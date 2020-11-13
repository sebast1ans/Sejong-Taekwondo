<template>
    <section class="references pb-12">
        <!--        <h1>Reference</h1>-->
        <!--        <div class="accent-line"></div>-->
        <v-container>
            <v-row class="align-end">
                <v-col cols="12" md="4" v-for="review in reviews" :key="review.name">
                    <v-card>
                        <v-card-text><br>{{ review.text }}</v-card-text>
                        <v-sheet>
                            <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                                <v-img :src="require(`@/assets/images/references/${review.photo}`)"></v-img>
                            </v-avatar>
                        </v-sheet>
                    </v-card>
                    <!--                    <p class="offset-4 mt-n8 mr-3 text-right"> <v-icon v-for="n in 5" color="yellow darken-2">grade</v-icon></p>-->
                    <p class="font-weight-bold offset-4 mt-3">{{ review.name }}</p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>

export default {
    name: "References",
    data: () => ({
        reviews: [
            {
                name: "Hanka",
                photo: "hankavu.jpg",
                text: "Skvělé tréninky, skvělý kolektiv a skvělý trenér navrch. Každý trénink je plný nových poznatků, co víc si přát!"
            },
            {
                name: "Adéla",
                photo: "adela.jpg",
                text: "Kvalitní tréninky pod vedením zkušeného a schopnéhomistra tým plný úžasných lidí, kteří se vzájemně inspirují a podporují."
            },
            {
                name: "Quang Huy",
                photo: "huy.jpg",
                text: "V tomto oddíle trénuji již od svých 15ti let. Trenér Ondřej Havlíček dává velký důraz na rozvoj jak fyzických tak i mentálních dovedností."
            }
        ]
    })
}
</script>

<style scoped>
.references {
    background-color: #f0f0f0;
}
</style>