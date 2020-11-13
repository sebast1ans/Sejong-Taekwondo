<template>
    <section id="news-admin">
        <v-container>
            <h1>Všechny aktuality</h1>

            <!--            Add new article-->
            <v-dialog
                    v-model="newArticleDialog"
                    persistent max-width="600px" t
                    ransition="dialog-bottom-transition">
                <template
                        v-slot:activator="{ on, attrs }">
                    <v-btn
                            dark
                            color="primary"
                            v-bind="attrs"
                            v-on="on"
                            @click="clearArticle">
                        <v-icon>mdi-plus</v-icon>
                        Přidat nový článek
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>Nový článek</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form
                                    @submit.prevent="addArticle()">
                                <v-row>
                                    <v-col
                                            cols="12">
                                        <v-text-field
                                                label="Titulek"
                                                name="title"
                                                v-model="title"
                                                required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-textarea
                                                name="content"
                                                label="Obsah článku"
                                                v-model="content"></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                text color="red"
                                @click="clearArticle(); newArticleDialog = false">Storno
                        </v-btn>
                        <v-btn
                                text color="green"
                                @click="addArticle(); newArticleDialog = false">
                            <v-icon>mdi-check</v-icon>
                            Publikovat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!--            Show articles-->
            <v-row>
                <v-col
                        cols="12"
                        md="3"
                        sm="6"
                        v-for="article in news.slice().reverse()"
                        :key="article.id">
                    <v-card>
                        <v-card-actions class="pb-0">
                            <v-spacer></v-spacer>
                            <v-dialog v-model="confirmDeleteArticleDialog[article.id]" max-width="280">
                                <template v-slot:activator="{on, attrs}">
                                    <v-btn icon small v-bind="attrs" v-on="on">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>{{ article.title }}</v-card-title>
                                    <v-card-text>Opravdu smazat tento článek?</v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn outlined color="yellow darken-3"
                                               @click="$set(confirmDeleteArticleDialog, article.id, false)">Nemazat
                                        </v-btn>
                                        <v-btn text color="red"
                                               @click="deleteArticle(article.id); $set(confirmDeleteArticleDialog, article.id, false)">
                                            Smazat
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>


                        </v-card-actions>
                        <v-card-title class="pt-0">{{ article.title }}</v-card-title>
                        <v-card-subtitle>{{ formattedDate(article.timestamp) }}</v-card-subtitle>
                        <!--                        <v-card-subtitle>{{ getLatestUpdateDate(article.updatesTimestamp) }}</v-card-subtitle>-->
                        <v-card-text>{{ article.content | snippet }}</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-dialog
                                    v-model="articleDialog[article.id]"
                                    persistent max-width="600px"
                                    transition="dialog-bottom-transition">
                                <template
                                        v-slot:activator="{ on, attrs }">
                                    <v-btn
                                            text
                                            color="yellow darken-3"
                                            v-bind="attrs"
                                            v-on="on"
                                            @click="fillToEditArticle(article.title, article.content)">
                                        <v-icon>mdi-pencil</v-icon>
                                        Upravit
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>Upravit článek</v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-form>
                                                <v-row>
                                                    <v-col
                                                            cols="12">
                                                        <v-text-field
                                                                label="Titulek"
                                                                name="title"
                                                                v-model="title"
                                                                value="Hello"
                                                                required></v-text-field>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col>
                                                        <v-textarea
                                                                name="content"
                                                                label="Obsah článku"
                                                                v-model="content"></v-textarea>
                                                    </v-col>
                                                </v-row>
                                            </v-form>
                                            <v-sheet>
                                                <p>Úpravy:</p>
                                                <p
                                                        v-for="update in article.updatesTimestamp">
                                                    {{ formattedDate(update) }}</p>
                                            </v-sheet>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                                text color="red"
                                                @click="$set(articleDialog, article.id, false); clearArticle()">Storno
                                        </v-btn>
                                        <v-btn
                                                text color="green"
                                                @click="$set(articleDialog, article.id, false); updateArticle(article.id)">
                                            Aktualizovat
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import firebase from 'firebase/app'
import db from "@/firebase/init"
import slugify from "slugify"

export default {
    name: "NewsAdmin",

    data() {
        return {
            news: [],
            newArticleDialog: false,
            articleDialog: {},
            confirmDeleteArticleDialog: {},
            title: null,
            content: null,
            // updatesTimestamp: [],
            feedback: null,
            slug: null,
            monthsCzech: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
        }
    },

    methods: {
        addArticle() {
            if (this.title && this.content) {
                this.feedback = null
                // create a slug
                this.slug = slugify(this.title, {
                    replacement: "-",
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection("news").add({
                    title: this.title,
                    timestamp: Date.now(),
                    content: this.content,
                    slug: this.slug
                }).then(() => {
                    this.newArticleDialog = false
                    this.feedback = "Článek je zveřejněn." // TODO notification bars
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = "Chybí titulek"
            }
        },

        updateArticle(id) {
            if (this.title && this.content) {
                this.feedback = null
                db.collection("news").doc(id).update({
                    title: this.title,
                    content: this.content,
                    updatesTimestamp: firebase.firestore.FieldValue.arrayUnion(Date.now())
                }).then(() => {
                    this.feedback = 'Úspěšně upraveno.'
                }).catch(err => {
                    console.log(err)
                })
            } else {
                this.feedback = "Chybí titulek"
            }

        },

        deleteArticle(id) {
            db.collection("news").doc(id).delete()
                .then(() => {
                    this.news = this.news.filter(article => article.id !== id)
                })
        },

        clearArticle() {
            this.title = null
            this.content = null
        },

        fillToEditArticle(title, content) {
            this.title = title
            this.content = content
        },

        formattedDate(timestamp) {
            let date = new Date(timestamp)
            return `${date.getDay()}. ${this.monthsCzech[date.getMonth()]} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`
        },

        // TODO implement
        // getLatestUpdateDate(arr) {
        //
        // }
    },

    created() {
        db.collection('news').orderBy('timestamp').onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added') {
                    let article = change.doc.data()
                    article.id = change.doc.id
                    this.news.push(article)
                }
                if (change.type === 'modified') {
                    let editedArticle = change.doc.data()
                    editedArticle.id = change.doc.id
                    let articleIndex = this.news.findIndex(article => article.id === change.doc.id)
                    this.news.splice(articleIndex, 1, editedArticle)
                }
            })
        })
    }

}
</script>

<style scoped>

</style>