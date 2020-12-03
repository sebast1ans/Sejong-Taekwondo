<template>
    <scrollactive id="nav" :duration="800" bezier-easing-value=".66,0,.33,1" :modify-url=false @scroll="scrolledBeyond"
                  :class="{'nav-shrink': !mobileScreenOn || scrolled }">
        <v-container class="nav-elements">
            <div class="nav-mobile d-flex justify-space-around align-center">
                <img src="@/assets/images/logos/whiteLogo.svg" alt="" class="nav-logo" height="85"
                     @click="$vuetify.goTo('#welcome')" @dblclick="$router.replace({name: 'Admin'})">
                <v-btn class="menu-toggle" outlined fab color="white" @click="expand = !expand">
                    <v-icon color="white">menu</v-icon>
                </v-btn>
            </div>

            <v-expand-transition>
                <ul class="nav-items" v-show="expand">
                    <li v-if="!mobileScreenOn" v-for="navItem in navItems" class="nav-item" @click="expand = false">
                        <a class="nav-link scrollactive-item" :href="navItem.target" v-html="navItem.text"></a>
                    </li>
                    <li v-if="mobileScreenOn" v-for="navItem in navItems" class="nav-item">
                        <a class="nav-link scrollactive-item" :href="navItem.target" v-html="navItem.text"></a>
                    </li>
                    <li>
                        <ul class="nav-social d-flex">
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
                        </ul>
                    </li>
                </ul>
            </v-expand-transition>
        </v-container>
    </scrollactive>
</template>

<script>

export default {
    name: "Navigation",

    data() {
        return {
            navItems: [
                // {target: '#news', text: 'Aktuality'},
                {target: '#who-are-we', text: 'Kdo jsme'},
                {target: '#coaches', text: 'Trenéři'},
                {target: '#what-is-taekwondo', text: 'O Taekwondo'},
                {target: '#locations', text: 'Tréninky'},
                {target: '#contact', text: 'Kontakt'},
            ],
            scrolled: false,
            mobileScreenOn: null,
            expand: true
        }
    },
    created() {
        window.addEventListener('scroll', this.scrolledBeyond)
        window.addEventListener('resize', this.mobileScreen)

        if (window.matchMedia("(max-width: 960px)").matches) {
            this.mobileScreenOn = false
            this.expand = false
        } else {
            this.mobileScreenOn = true
            this.expand = true
        }

    },
    destroyed() {
        window.removeEventListener('scroll', this.scrolledBeyond)
        window.removeEventListener('resize', this.mobileScreen)
    },
    methods: {
        scrolledBeyond() {
            return window.scrollY > 150 ? this.scrolled = true : this.scrolled = false
        },
        mobileScreen() {
            if (window.matchMedia("(max-width: 960px)").matches) {
                this.mobileScreenOn = false
                this.expand = false
            } else {
                this.mobileScreenOn = true
                this.expand = true
            }
        }
    },
}
</script>

<style lang="scss">
@use '~@/assets/styles/home/navigation';
</style>