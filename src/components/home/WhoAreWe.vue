<template>
    <section id="who-are-we">
        <h1>Kdo jsme</h1>
        <div class="accent-line"></div>

        <v-carousel
                continuous
                cycle
                hide-delimiter-background
                height="600"
                :interval="15000"
                :show-arrows="false"
        >
            <v-carousel-item
                    v-for="slide in slidesOrdered"
                    :key="slide.order"
            >
                <v-img
                        height="100%"
                        :src="require(`@/assets/images/who-are-we-carousel/${slide.background}`)"
                >
                    <v-container class="text-container">
                        <h1 class="white--text text-left"
                            :elevation="-25"
                            v-html="slide.title"
                        ></h1>
                        <p class="white--text" v-html="slide.text"></p>
                    </v-container>
                </v-img>
            </v-carousel-item>
        </v-carousel>
    </section>
</template>

<script>
import db from "@/firebase/init";

export default {
    name: 'WhoAreWe',
    data() {
        return {
            slides: []
        }
    },
    computed: {
        slidesOrdered: function () {
            return this.slides.sort((a, b) => a.order - b.order)
        }
    },

    created() {
        // fetch data from firestore
        db.collection('who-are-we').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let slide = doc.data()
                    slide.id = doc.id
                    this.slides.push(slide)
                })
            })
    }
}

</script>

<style lang="scss">
@use '~@/assets/styles/home/who-are-we-carousel';
</style>