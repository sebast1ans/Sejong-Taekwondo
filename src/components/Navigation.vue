<template>
    <nav>
        <v-container class="d-flex justify-space-between align-center">
            <img src="../assets/images/logos/whiteLogo.svg" alt="" class="nav-logo" height="85"
                 @click="$vuetify.goTo('#welcome', options)">
            <ul class="nav-items">
                <li v-for="navItem in navItems" class="nav-item">
                    <span class="nav-link" @click="$vuetify.goTo(navItem.target, options)" v-html="navItem.text"></span>
                </li>

                <li class="nav-item">
                    <a href="https://www.facebook.com/SejongDojang/" target="_blank" class="nav-link">
                        <v-icon class="nav-icons">mdi-facebook</v-icon>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.youtube.com/channel/UCENWwwDVUMEnVamN3ANXB2g" target="_blank" class="nav-link">
                        <v-icon class="nav-icons">mdi-youtube</v-icon>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.instagram.com/sejong_taekwondo/" target="_blank" class="nav-link">
                        <v-icon class="nav-icons">mdi-instagram</v-icon>
                    </a>
                </li>
            </ul>
        </v-container>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data() {
        return {
            navItems: [
                {target: '#information', text: 'Informace'},
                {target: '#who-are-we', text: 'Kdo jsme'},
                {target: '#coaches', text: 'Trenéři'},
                {target: '#what-is-taekwondo', text: 'O Taekwondo'},
                {target: '#locations', text: 'Tréninky'},
                {target: '#contact', text: 'Kontakt'},
            ]
        }
    },

    computed: {
        options() {
            return {
                duration: 700,
                easing: 'easeInOutQuart'
            }
        }
    }
}
</script>

<style lang="scss">
@use '../assets/styles/home/navigation';
</style>