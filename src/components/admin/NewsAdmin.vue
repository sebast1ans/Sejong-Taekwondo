<template>
    <section id="news-admin">
        <v-container>
            <h1>All News</h1>
            <v-dialog v-model="dialog" persistent max-width="600px" transition="dialog-bottom-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">Přidat nový článek</v-btn>
                </template>

                <v-card>
                    <v-card-title>Nový článek</v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-form @submit.prevent="addArticle()">
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Titulek" name="title" v-model="title"
                                                      required></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-textarea name="content" label="Obsah článku" v-model="content"></v-textarea>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="dialog = false">Uložit</v-btn>
                        <v-btn @click="addArticle()">Publikovat</v-btn>
                        <v-btn @click="cancelArticle(); dialog = false">Storno</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-row>
                <v-col cols="12" md="3" sm="6" v-for="article in news" :key="article.id">
                    <v-card>
                        <v-card-title>{{ article.title }}</v-card-title>
                        <v-card-subtitle>{{ article.date }}</v-card-subtitle>
                        <v-card-text>{{ article.content }}</v-card-text>
                        <v-card-actions>
                            <v-btn @click="deleteArticle(article.id)">Vymazat</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import db from "@/firebase/init"
import slugify from "slugify"

export default {
    name: "NewsAdmin",

    data() {
        return {
            news: [],
            dialog: false,
            title: null,
            // date: null,
            content: null,
            feedback: null,
            slug: null
        }
    },

    methods: {
        addArticle() {
            if (this.title) {
                this.feedback = null
                // create a slug
                this.slug = slugify(this.title, {
                    replacement: "-",
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                db.collection("news").add({
                    title: this.title,
                    content: this.content,
                    slug: this.slug
                }).then(() => {
                    this.dialog = false

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
                    this.news = this.news.filter(article => article.id !== id
                    )
                })
        },

        cancelArticle() {
            this.title = null
            this.content = null
        }
    },

    created() {
        db.collection("news").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let article = doc.data()
                    article.id = doc.id
                    this.news.push(article)
                })
            })
    }
}
</script>

<style scoped>

</style>