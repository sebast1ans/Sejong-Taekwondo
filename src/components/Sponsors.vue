<template>
    <footer class="sponsors">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-space-between align-center flex-wrap mt-5">
                    <a href="http://www.worldtaekwondo.org/" target="_blank">
                        <img src="../assets/images/sponsors/wt.png" alt="" class="sponsor">
                    </a>
                    <a href="http://www.kukkiwon.or.kr/front/eng/main.action" target="_blank">
                        <img src="../assets/images/sponsors/kkw.png" alt="" class="sponsor">
                    </a>
                    <a href="http://www.taekwondo-wtf.cz/" target="_blank">
                        <img src="../assets/images/sponsors/cssvaz.png" alt="" class="sponsor">
                    </a>
                    <a href="https://worldtaekwondoeurope.org/" target="_blank">
                        <img src="../assets/images/sponsors/wte.png" alt="" class="sponsor">
                    </a>
                    <a href="http://moohwa.net/" target="_blank">
                        <img src="../assets/images/sponsors/moohwa.png" alt="" class="sponsor">
                    </a>
                    <a href="http://www.praha.eu/" target="_blank">
                        <img src="../assets/images/sponsors/prg.png" alt="" class="sponsor">
                    </a>
                    <a href="https://www.praha4.cz/" target="_blank">
                        <img src="../assets/images/sponsors/prg4.png" alt="" class="sponsor">
                    </a>
                    <a href="https://www.constructservice.cz/" target="_blank">
                        <img src="../assets/images/sponsors/construct.png" alt="" class="sponsor">
                    </a>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <img class="footer-logo" src="../assets/images/logos/sejongSealWhite.svg"
                         alt="Sejong Logo">
                    &copy; 2020 Sejong Taekwondo
                </v-col>
            </v-row>
        </v-container>
    </footer>
</template>

<script>
export default {
    name: "Sponsors"
}
</script>

<style lang="scss">
@use '../assets/styles/home/sponsors';
</style>