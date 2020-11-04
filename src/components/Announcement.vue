<template>
    <section id="announcement">
        <h1>Upozornění!</h1>
        <div class="accent-line"></div>
        <v-container class="text-center">
            <p><strong>Na základě usnesení Vlády ČR, které vyplývá ze zhoršení epidemické situace, jsme nuceni dočasně
                přerušit činnost na všech našich školách Sejong Taekwondo.</strong></p>
            <p><strong>Tato situace nás velice mrzí. Sledujte prosím naše stránky pro další informace. Doufáme, že se
                tato situace brzy zlepší a co nevidět budeme schopni znovu zahájit naše kurzy.</strong></p>
            <p><strong>Prozatím můžete cvičit doma podle výukových videí na našem youtube kanále: </strong></p>
            <v-btn text color="#DA0A16">
                <a href="https://www.youtube.com/playlist?list=PL_IlyM5-dT-kDu5R3w-ltyKtvwKOY2IPA" target="_blank">
                    <v-icon large color="#DA0A16">mdi-youtube</v-icon>&nbsp;Sejong Taekwondo Youtube</a>
            </v-btn>
            <br><br>
            <p><strong>Držte se, buďte zdraví a pozitivní!</strong></p>
            <v-img max-width="80%" style="margin: auto;" src="@/assets/images/podpis_sejong.png"></v-img>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Announcement"
}
</script>

<style lang="scss" scoped>
a {
  color: #DA0A16;
  text-decoration: none;
}
</style>