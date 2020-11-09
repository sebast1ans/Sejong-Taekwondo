<template>
    <scrollactive id="nav" :duration="800" bezier-easing-value=".66,0,.33,1" :modify-url=false @scroll="scrolledBeyond"
                  :class="{'nav-shrink': scrolled}">
        <v-container class="nav-elements">

            <div class="nav-mobile d-flex justify-space-around align-center">
                <img src="../assets/images/logos/whiteLogo.svg" alt="" class="nav-logo" height="85"
                     @click="$vuetify.goTo('#welcome')">
                <v-btn class="menu-toggle" outlined fab color="white" @click="navReveal = !navReveal">
                    <v-icon color="white">menu</v-icon>
                </v-btn>
            </div>

            <ul class="nav-items" :class="{active: navReveal}">
                <li v-for="navItem in navItems" class="nav-item" @click="navReveal = false">
                    <a class="nav-link scrollactive-item" :href="navItem.target" v-html="navItem.text"></a>
                </li>
                <div class="nav-social d-flex">
                    <li class="nav-item">
                        <a href="https://www.facebook.com/SejongDojang/" target="_blank" class="nav-link">
                            <v-icon class="nav-icons">mdi-facebook</v-icon>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.youtube.com/channel/UCENWwwDVUMEnVamN3ANXB2g" target="_blank"
                           class="nav-link">
                            <v-icon class="nav-icons">mdi-youtube</v-icon>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="https://www.instagram.com/sejong_taekwondo/" target="_blank" class="nav-link">
                            <v-icon class="nav-icons">mdi-instagram</v-icon>
                        </a>
                    </li>
                </div>
            </ul>

            </v-container>
        </scrollactive>
</template>

<script>

export default {
    name: "Navigation",

    data() {
        return {
            navItems: [
                // {target: '#information', text: 'Informace'},
                {target: '#who-are-we', text: 'Kdo jsme'},
                {target: '#coaches', text: 'Trenéři'},
                {target: '#what-is-taekwondo', text: 'O Taekwondo'},
                {target: '#locations', text: 'Tréninky'},
                {target: '#contact', text: 'Kontakt'},
            ],
            scrolled: false,
            navReveal: false
        }
    },
    created() {
        window.addEventListener('scroll', this.scrolledBeyond);
    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolledBeyond);
    },
    methods: {
        scrolledBeyond() {
            return window.scrollY > 150 ? this.scrolled = true : this.scrolled = false
        }
    },
    computed: {
        options() {
            return {
                duration: 700,
                easing: 'easeInOutQuart'
            }
        },

    }

}
</script>

<style lang="scss">
@use '../assets/styles/home/navigation';
</style>