<template>
    <section id="news">
        <h1>Novinky</h1>
        <div class="accent-line"></div>
        <v-container>

            <v-sheet elevation="5" light>
                <v-row>
                    <v-col cols="12" xs="12" sm="6" md="3" v-for="article in news" xs12 md6>
                        <v-card flat height="100%">
                            <v-card-title>{{ article.title }}</v-card-title>
                            <v-card-subtitle>{{ article.date }}</v-card-subtitle>
                            <v-card-text>{{ article.content }}</v-card-text>
                            <v-card-actions>
                                <v-btn text color="#DA0A16">Celý článek</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                    <!--                            <v-btn text color="#DA0A16" class="all-news"><strong>Všechny novinky</strong></v-btn>-->
                </v-row>
            </v-sheet>
        </v-container>
    </section>
</template>

<script>
import db from "@/firebase/init"

export default {
    name: "News",
    data() {
        return {
            news: []
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