<template>
    <section class="who-are-we">
        <h1>Kdo jsme</h1>
        <div class="accent-line"></div>

        <div v-for="text in texts" :key="text.id">
            <h2 v-html="text.title"></h2>
            <p v-html="text.text"></p>
        </div>

    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: 'WhoAreWe',
        components: {carousel},

        data: () => {
            return {
                texts: [
                    {
                        id: 1,
                        title: 'Sejong Taekwondo - oddíl s 25letou historií',
                        text: 'Sejong Taekwondo je jeden z nejstarších oddílů taekwondo v Praze - oddíl svíce jak třiadvacetiletou historií. Oddíl je pod vedením zkušených trenérů s mnohaletýmizkušenostmi, členů národní reprezentace a několikanásobných mistrů republiky. Cvičení vnašem oddíle je vhodné pro všechny generace - pro děti i dospělé. Naším cílem není pouzevychovávat skvělé sportovce, ale především pomáhat s výchovou mládeže ve smyslu správnéhovyužití volného času se zaměřením na sport, smysl pro kolektiv, disciplínu a ostatnívlastnosti potřebné pro rozvoj osobnosti. '
                    },
                    {
                        id: 2,
                        title: 'Taekwondo – korejské bojové umění a olympijský sport',
                        text: 'Taekwondo je tradiční korejské bojové umění a zároveň i moderní olympijský sport. Taekwondo není pouze sebeobranným bojovým uměním, které rozvíjí fyzické schopnosti a dovednosti. Taekwondo slouží především k rozvoji osobnosti, rozvíjí sebeovládání, sebedůvěru a sebekázeň, a napomáhá sjednocení mysli a těla. Taekwondo je mnohem více, než jen cesta boje. Je to způsob života, cesta sebepoznání a sebezlepšení.'
                    },
                    {
                        id: 3,
                        title: 'Pravidelná účast na domácích i mezinárodních soutěžích',
                        text: 'Členové našeho oddílu se pravidelně zúčastňují mnoha domácích i mezinárodních soutěží. Mnozí členové Sejong Taekwondo jsou mistry republiky a někteří úspěšně reprezentují ČR i na nejvyšších mezinárodních soutěžích jako ME a MS. Největším úspěchem našeho oddílu jsou např. zlaté medaile z G-1 turnajů, zlato z prestižního turnaje <em>KOREA OPEN 2017</em>, stříbro z <em>WORLD TAEKWONDO HANMADANG 2015</em>, nebo bronz z <em>ME 2015.</em>.'
                    },
                    {
                        id: 4,
                        title: 'Oddíl s mnoha oceněními',
                        text: 'Oddíl Sejong Takekwondo získal mnoho mezinárodních uznání a ocenění, jako např. <em>Ocenění za službu a přispění k rozvoji Taekwondo (WTF)</em>, <em>Ocenění za mimořádný přínos pro česko-korejské vztahy (ČKS)</em>, <em>Ocenění za úsilí v rozvoji a šíření taekwondo a Kukkiwonu (Kukkiwon)</em> nebo <em>Ocenění za oddanou službu a příspění k rozvoji taekwondo (Korea Taekwondo Association)</em>'
                    },
                    {
                        id: 5,
                        title: 'Sejong Taekwondo <br>- Mistři ČR 2018 & 2019',
                        text: 'Náš tým Sejong Taekwondo na letošním mistrovství České republiky v Poomsae obhájil titul mistra ČR a podruhé tak získal <strong>první místo</strong> v celkovém hodnocení týmů! Naši členové získali <em>4x titul mistr ČR</em>, <em>3x titul vicemistr ČR</em> a <em>4x druhý vicemistr ČR</em> v Poomsae.'
                    },

                ]
            }
        }
    }
</script>

<style scoped>

</style>