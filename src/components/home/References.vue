<template>
    <section id="references" class="pb-12">
        <h2 class="text-center">Reference</h2>
        <!--                <div class="accent-line"></div>-->

        <div class="pt-12"></div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="review in shuffledReviews" :key="review.id">
                <v-card class="mx-2">
                    <v-card-text><br>{{ review.text }}</v-card-text>
                    <v-sheet>
                        <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                            <v-img v-if="review.photo"
                                   :src="require(`@/assets/images/references/${review.photo}`)"></v-img>
                            <v-img v-if="review.photo == ''"
                                   :src="require(`@/assets/images/references/silhouette.jpg`)"></v-img>
                        </v-avatar>
                    </v-sheet>
                </v-card>
                <p class="offset-4 mt-n8 mr-5 text-right">
                    <v-icon v-for="n in 5" color="yellow darken-2" :key="n">grade</v-icon>
                </p>
                <p class="font-weight-bold offset-4 mt-3">{{ review.name }}</p>
            </swiper-slide>
            <div class="swiper-pagination" slot="scrollbar"></div>
        </swiper>

    </section>
</template>

<script>
import db from "@/firebase/init";
import {Swiper, SwiperSlide} from "vue-awesome-swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import SwiperCore, {Autoplay, Pagination} from "swiper/core";

SwiperCore.use([Autoplay, Pagination])

export default {
    name: "References",

    components: {
        Swiper,
        SwiperSlide
    },

    data: () => ({
        reviews: [],
        swiperOption: {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 0,
            breakpoints: {
                900: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1400: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    initialSlide: 1
                }
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },
            centeredSlides: true,
            grabCursor: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            }

        }
    }),
    
    computed: {
        shuffledReviews: function () {
            return this.reviews.sort(() => .5 - Math.random())
        }
    },

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

.swiper-container >>> .swiper-wrapper {
    align-items: flex-end;
    padding-bottom: 30px;
}

.swiper-slide {
    opacity: .5;
}

.swiper-slide-active, .swiper-slide-next, .swiper-slide-prev {
    opacity: 1;
}

.swiper-pagination {
    bottom: 0;
}

.swiper-pagination >>> .swiper-pagination-bullet-active {
    background-color: #000;
}

@media only screen and (max-width: 1400px) {
    .swiper-slide-next, .swiper-slide-prev {
        opacity: .5;
    }
}
</style>