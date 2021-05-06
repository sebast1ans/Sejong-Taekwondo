<template>
    <section id="references" class="pb-12">
        <h2 class="text-center">Reference</h2>
        <!--                <div class="accent-line"></div>-->

        <div class="pt-12"></div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="review in reviews" :key="review.id">
                <v-card>
                    <v-card-text><br>{{ review.text }}</v-card-text>
                    <v-sheet>
                        <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                            <v-img v-if="review.photo"
                                   :src="require(`@/assets/images/references/${review.photo}`)"></v-img>
                        </v-avatar>
                    </v-sheet>
                </v-card>
                <p class="offset-4 mt-n8 mr-3 text-right">
                    <v-icon v-for="n in 5" color="yellow darken-2" :key="n">grade</v-icon>
                </p>
                <p class="font-weight-bold offset-4 mt-3">{{ review.name }}</p>
            </swiper-slide>
            <!--                    <div class="swiper-scrollbar" slot="scrollbar"></div>-->
        </swiper>

    </section>
</template>

<script>
import db from "@/firebase/init";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/swiper.scss";
// import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, {Autoplay} from "swiper/core";

SwiperCore.use([Autoplay])

export default {
    name: "References",
    components: {
        Swiper,
        SwiperSlide
    },

    data: () => ({
        reviews: [],
        swiperOption: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide: 1,
            grabCursor: true,
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false
            // }
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     hide: true
            // }
        }
    }),

    created() {
        db.collection("references").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let review = doc.data()
                    review.id = doc.id
                    this.reviews.push(review)
                })
            })

    },


}
</script>

<style scoped>
#references {
    background-color: #f0f0f0;
}

.v-card__text {
    width: unset;
}

.swiper-slide {
    opacity: .5;
}

.swiper-slide-active, .swiper-slide-next, .swiper-slide-prev {
    opacity: 1;
}
</style>