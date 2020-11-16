<template>
    <div id="article">

        <v-app-bar dark height="100">
            <v-container>
                <v-row class="align-center">
                    <v-img src="@/assets/images/logos/whiteLogo.svg" max-width="230" max-height="90" contain></v-img>
                    <v-spacer></v-spacer>
                    <router-link :to="{name: 'Home'}">
                        <v-btn text>
                            <v-icon>mdi-home</v-icon>
                            <span class="d-none d-sm-inline"> Hlavní stránka</span></v-btn>
                    </router-link>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-container>

            <v-row>
                <v-col>
                    <router-link :to="{name: 'NewsView'}">
                        <v-btn text color="#DA0A16">
                            <v-icon>arrow_back</v-icon>
                            <span class="d-none d-sm-inline">Zpět na všechny články</span></v-btn>
                    </router-link>
                    <h1>{{ article.title }}</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="2" sm="3" xs="12" class="pb-0 d-flex">
                    <p class="font-italic pr-3">{{ formattedDate(article.timestamp) }}</p>
                    <div class="accent-line-column"></div>
                </v-col>
                <v-col cols="12" md="8" sm="9" xs="12">
                    <div>{{ article.content }}</div>

                </v-col>
            </v-row>
        </v-container>
        <Footer/>
    </div>
</template>

<script>

import db from "@/firebase/init";
import Footer from "@/components/Footer"

export default {
    name: "Article",
    components: {
        Footer
    },
    data: () => ({
        article: {}
    }),

    created() {
        let ref = db.collection('news').where('slug', '==', this.$route.params.article)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.article = doc.data()
            })
        })
    }
}
</script>

<style scoped>
a {
    color: black !important;
    text-decoration: none;
}

h1 {
    text-align: left;
}
</style>