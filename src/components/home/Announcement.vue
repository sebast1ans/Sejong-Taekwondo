<template>
    <section id="announcement">
        <h1>Upozornění!</h1>
        <div class="accent-line"></div>
        <v-container class="text-center">
            <p>Od 3.12. ČR přechází do třetího stupně protiepidemického systému, a tím se mění i podmínky pro sport.
                Sice bylo povoleno sportování ve vnitřních prostorách, ale pouze při dodržení přísně stanovených
                podmínek:</p>
            <strong>– v tělocvičně může být max. 10 osob (včetně trenéra)</strong><br>
            <strong>– povinnost nosit roušku při sportování</strong><br>
            <strong>– nemožnost využívání šaten a sprch</strong><br><br>
            <p>Sportování má sloužit především k tomu, abychom byli zdravější, zdatnější a měli pak i lepší imunitu.
                Povinnost nosit roušky při sportování se s tímto absolutně neslučuje, naopak si myslím, že pro některé
                by to mohlo znamenat i určitá zdravotní rizika. Především pak pro děti. Věřím, že v nejbližších dnech se
                Národní sportovní agentuře a České unii sportu podaří najít rozumné řešení, které nějakým způsobem
                upraví tento „nesmysl“.
            </p>
            <p>Dokud se podmínky pro sportování ve vnitřních prostorách nezlepší, tak i když je nám to velice líto, jsme
                prozatím nuceni nechat naše tělocvičny pro dětské tréninky do konce roku uzavřeny. Několik tréninkových
                jednotek, které do konce kalendářního roku zbývají, využijeme pro přípravu závodního týmu dospělých.</p>
            <p>Co se kurzovného týče, tak kdo v září provedl platbu kurzovného na toto školní pololetí, tak měsíce, po
                které jsme byli vzhledem k této nelehké situaci nuceni naše školy uzavřít, se automaticky převádí na
                další školní pololetí a budou z něho odečteny. </p>
            <p>Situaci neustále sledujeme a o jejím vývoji vás budu průběžně informovat. </p>
            <p>Doufám, že i přes tuto těžkou situaci nám zachováte přízeň a budeme moc rádi, že nám pak znovu pomůžete
                vybudovat skvělý Sejong tým, který jsme měli. </p>
            <p><strong>Prozatím můžete cvičit doma podle výukových videí na našem youtube kanále: </strong></p>
            <v-btn text color="#DA0A16">
                <a href="https://www.youtube.com/playlist?list=PL_IlyM5-dT-kDu5R3w-ltyKtvwKOY2IPA" target="_blank">
                    <v-icon large color="#DA0A16">mdi-youtube</v-icon>&nbsp;Sejong Taekwondo Youtube</a>
            </v-btn>
            <br><br>
            <p><strong>Těším se, až se zase všichni společně uvidíme. Držte se, buďte zdraví a pozitivní.</strong></p>
            <v-img class="width" style="margin: auto;" src="@/assets/images/podpis_sejong.png"></v-img>
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
  color: #DA0A16 !important;
  text-decoration: none;
}

.width {
  max-width: 40%;

  @media only screen and (max-width: 600px) {
    max-width: 90%;
  }
}
</style>