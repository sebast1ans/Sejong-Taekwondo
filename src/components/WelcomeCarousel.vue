<template>
    <section class="welcome">
        <div class="carousel">
            <carousel
                    :autoplay="true"
                    :items="1"
                    :loop="true"
                    :autoHeight="true"
                    :mouseDrag="false"
                    :touchDrag="false"
                    animateOut="fadeOut">
                <div v-for="background in backgrounds" :class="'background ' + background"></div>
            </carousel>
        </div>
    </section>

</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: 'WelcomeCarousel',
        components: { carousel },
        data: () => {
            return {
                backgrounds: ["background1", "background2", "background3", "background4"]
            }
        }
    }


</script>

<style lang="scss" scoped>
    @import url('../assets/styles/home/welcome-carousel.scss');

    @for $i from 1 through 4 {
        .background#{$i} {
            background: url("../assets/images/welcome-carousel/foto#{$i}.jpg") no-repeat center;
        }
    }
</style>