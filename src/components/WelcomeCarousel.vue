<template>
    <section class="welcome">
        <div class="carousel">
            <carousel
                    :items="1"
                    :autoplay="true"
                    :loop="true"
                    :autoHeight="true"
                    :mouseDrag="false"
                    :touchDrag="false"
                    :nav="false"
                    :dots="false"
                    animateOut="fadeOut">
                <div v-for="background in backgrounds" :class="'background ' + background"></div>
            </carousel>
        </div>
        <div class="welcome-logo">

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
        },
        methods: {

        }
    }


</script>

<style lang="scss" scoped>
    @use '../assets/styles/home/welcome-carousel.scss';

    @for $i from 1 through 4 {
        .background#{$i} {
            background: url("../assets/images/welcome-carousel/foto#{$i}.jpg") no-repeat center;
        }
    }

    .welcome-logo {
        background: url("../assets/images/logos/whiteLogo.svg") no-repeat center;
        background-size: 50%;
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        /*left: 50vh;*/
        z-index: 1;

        @media only screen and (max-width: 900px) {
            background-size: 80%;
        }
    }
</style>