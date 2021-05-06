<template>
    <div id="news-view">
        <v-app-bar dark height="109" hide-on-scroll>
            <v-container>
                <v-row class="align-center">
                    <v-img src="@/assets/images/logos/whiteLogo.svg" max-width="230" max-height="90" contain
                           @click="$router.push({name: 'Home'})" @dblclick="$router.push({name: 'Admin'})"></v-img>
                    <v-spacer></v-spacer>
                    <router-link :to="{name: 'Home'}">
                        <v-btn text>
                            <v-icon>mdi-home</v-icon>
                            <span class="d-none d-sm-inline"> Hlavní stránka</span></v-btn>
                    </router-link>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-container class="articles">
            <h1>Aktuality</h1>
            <div class="accent-line"></div>
            <v-row v-for="article in articles.slice().reverse()" :key="articles.id" class="pb-8">
                <v-col cols="12" md="2" sm="3" xs="12" class="pb-0 d-flex">
                    <p class="font-italic pr-3">{{ formattedDate(article.timestamp) }}</p>
                    <div class="accent-line-column"></div>
                </v-col>
                <v-col cols="12" md="6" sm="9" xs="12">
                    <h2 class="pb-4">
                        <router-link :to="'/articles/' + article.slug">{{ article.title }}</router-link>
                    </h2>
                    <div>{{ article.content | stripHTML | snippet }}</div>
                    <br>
                    <router-link :to="'/articles/' + article.slug" class="link-to-the-article">Celý článek
                    </router-link>
                </v-col>
            </v-row>
        </v-container>
        <Footer/>
    </div>
</template>

<script>
import db from "@/firebase/init";
import Footer from "@/components/Footer";

export default {
    name: "NewsView",
    components: {Footer},
    data: () => ({
        articles: []
    }),
    created() {
        db.collection('news').orderBy('timestamp').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let article = doc.data()
                    article.id = doc.id
                    this.articles.push(article)
                })
            })
    }
}
</script>

<style scoped lang="scss">
.articles {
  position: relative;
  padding-bottom: 10em;
}

a {
  color: black !important;
  text-decoration: none;
}

.link-to-the-article {
  color: #DA0A16 !important;
  text-decoration: none;

  &:hover {
    color: darken(#DA0A16, 10%) !important;
  }
}

</style>