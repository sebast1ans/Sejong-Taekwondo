<template>
    <section id="news">
        <h1>Novinky</h1>
        <div class="accent-line"></div>
        <v-container>

            <v-sheet elevation="5" light>
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="3" v-for="(article) in news.slice( -4).reverse()"
                           :key="article.id">
                        <v-card flat height="100%">
                            <v-card-title>{{ article.title }}</v-card-title>
                            <v-card-subtitle>{{ formattedDate(article.timestamp) }}</v-card-subtitle>
                            <v-card-text>{{ article.content | snippet }}</v-card-text>
                            <v-card-actions>
                                <v-btn text color="#DA0A16" :to="{name: 'Article', params: {article: article.slug
                                }}">Celý článek
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-sheet>
            <v-row>
                <v-col class="d-flex">
                    <v-spacer></v-spacer>
                    <v-btn text color="#DA0A16" class="all-news" :to="{name: 'AllNews'}"><strong>Všechny
                        novinky</strong></v-btn>
                    <v-spacer></v-spacer>
                </v-col>
            </v-row>

        </v-container>
    </section>
</template>

<script>
import db from "@/firebase/init"

export default {
    name: "News",
    data() {
        return {
            news: [],
            monthsCzech: ["ledna", "února", "března", "dubna", "května", "června", "července", "srpna", "září", "října", "listopadu", "prosince"]
        }
    },

    created() {
        db.collection("news").orderBy('timestamp').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let article = doc.data()
                    article.id = doc.id
                    this.news.push(article)
                })
            })
    },

    methods: {
        formattedDate(timestamp) {
            let date = new Date(timestamp)
            return `${date.getDay()}. ${this.monthsCzech[date.getMonth()]}`

        }
    }
}
</script>

<style scoped>
</style>