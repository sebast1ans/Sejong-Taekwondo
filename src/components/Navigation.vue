<template>
    <nav>
        <v-container class="d-flex justify-space-between align-center">
            <a href="#welcome">
                <img src="../assets/images/logos/whiteLogo.svg" alt="" height="85">
            </a>
            <ul class="nav-items">
                <li class="nav-item">
                    <a href="" class="nav-link">Informace</a>
                </li>
                <li class="nav-item">
                    <a href="#who-are-we" class="nav-link">Kdo jsme</a>
                </li>
                <li class="nav-item">
                    <a href="#coaches" class="nav-link">Trenéři</a>
                </li>
                <li class="nav-item">
                    <a href="#what-is-taekwondo" class="nav-link">O Taekwondo</a>
                </li>
                <li class="nav-item">
                    <a href="#locations" class="nav-link">Tréninky</a>
                </li>
                <li class="nav-item">
                    <a href="#contact" class="nav-link">Kontakt</a>
                </li>
                <li class="nav-item">
                    <a href="https://www.facebook.com/SejongDojang/" target="_blank" class="nav-link">
                        <v-icon>mdi-facebook
                        </v-icon>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.youtube.com/channel/UCENWwwDVUMEnVamN3ANXB2g" target="_blank" class="nav-link">
                        <v-icon>mdi-youtube</v-icon>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="https://www.instagram.com/sejong_taekwondo/" target="_blank" class="nav-link">
                        <v-icon>mdi-instagram</v-icon>
                    </a>
                </li>
            </ul>
        </v-container>
    </nav>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="scss">
@use '../assets/styles/home/navigation';
</style>