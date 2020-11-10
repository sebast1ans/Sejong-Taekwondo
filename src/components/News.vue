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
                                    <v-card-actions><v-btn text color="#DA0A16">Celý článek</v-btn></v-card-actions>
                                </v-card>
                            </v-col>
<!--                            <v-btn text color="#DA0A16" class="all-news"><strong>Všechny novinky</strong></v-btn>-->
                        </v-row>

                    </v-sheet>

        </v-container>

    </section>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            news: [
                {
                    title: "Tréninky ve školním roce 2020/2021",
                    date: "10. listopadu",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                },
                {
                    title: "Czech Open 2020",
                    date: "11. září",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi architecto asperiores assumenda exercitationem id, laudantium libero, maxime provident quam similique tempore vel veniam. Aperiam eos esse explicabo hic magnam tempore."
                },
                {
                    title: "Novinka 1",
                    date: "7. srpna",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                },
                {
                    title: "Novinka 1",
                    date: "1. srpna",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>