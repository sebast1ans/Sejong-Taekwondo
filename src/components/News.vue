<template>
    <section id="news">
        <h1>Novinky</h1>
        <div class="accent-line"></div>
        <v-row>
            <v-col v-for="article in news" class="px-0">
                <v-card outlined class="rounded-0">
                    <v-card-title>{{ article.title }}</v-card-title>
                    <v-card-text>{{ article.content }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: "News",
    data() {
        return {
            news: [
                {
                    title: "Novinka 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?fsfsfsdfsdfsfasfsdfsadfsdfsafsdfsfsaf"
                },
                {
                    title: "Novinka 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                },
                {
                    title: "Novinka 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                },
                {
                    title: "Novinka 1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam esse odio. Delectus, necessitatibus, quo! Nihil nostrum odio perferendis ut?"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>