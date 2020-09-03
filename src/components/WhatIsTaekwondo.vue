<template>
    <section id="what-is-taekwondo">
        <h1>Co je Taekwondo</h1>
        <div class="accent-line"></div>
        <v-row>
            <v-col
                    v-for="(imgLink, i) in imgLinks"
                    :key="i"
                    sm="6"
                    md="3"
                    class="pa-0"
            >
                <v-img :src=imgLink.src></v-img>
            </v-col>
        </v-row>

    </section>
</template>

<script>
export default {
    name: "WhatIsTaekwondo",

    data() {
        return {
            imgLinks: [
                {
                    src: require("../assets/images/what-is-taekwondo/foto1.jpg")
                },
                {
                    src: require("../assets/images/what-is-taekwondo/foto2.jpg")
                },
                {
                    src: require("../assets/images/what-is-taekwondo/foto3.jpg")
                },
                {
                    src: require("../assets/images/what-is-taekwondo/foto4.jpg")
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>