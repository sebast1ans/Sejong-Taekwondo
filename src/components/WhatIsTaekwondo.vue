<template>
    <section id="what-is-taekwondo">
        <h1>Co je Taekwondo</h1>
        <div class="accent-line"></div>
        <v-row>
            <v-col
                    v-for="discipline in disciplines"
                    sm="6"
                    md="3"
                    class="pa-0"
            >
                <v-dialog v-model="discipline.dialog" scrollable width="700px">
                    <template v-slot:activator="{ on }">
                        <div class="discipline" slot="activator" v-on="on">
                            <v-img class="discipline-img"
                                   :src="require(`@/assets/images/what-is-taekwondo/${discipline.imgSrc}`)"></v-img>
                            <div class="discipline-top-layer d-flex flex-column justify-center">
                                <div class="discipline-text">{{ discipline.name }}</div>
                            </div>
                        </div>
                    </template>
                    <v-card>
                        <v-card-title class="d-flex justify-space-between">
                            {{ discipline.name }}
                            <v-btn icon @click="discipline.dialog = false">
                                <v-icon>close</v-icon>
                            </v-btn>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text v-html="discipline.content"></v-card-text>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>

    </section>
</template>

<script>
export default {
    name: "WhatIsTaekwondo",

    data() {
        return {
            disciplines: [
                {
                    name: "Taekwondo",
                    imgSrc: 'foto1.jpg',
                    content: `
                    <br><img src=${require("@/assets/images/what-is-taekwondo/content/kihap.jpg")}
                                             style="display: inline-block; width: 45%; float: right; margin-left: 1em; margin-bottom: 1em" alt="kihap">
                                        <p>Taekwondo je <strong>bojové umění</strong>, které se nezávisle vyvíjelo
                                            <strong>v Koreji</strong> po dobu více než dvě tisíciletí s stalo se tak
                                            <strong>moderním mezinárodním sportem</strong>. Stručně lze Taekwondo
                                            charakterizovat jako bojové umění, které používá ruce, nohy a ostatní části
                                            těla k odvrácení útoku protivníka.</p>

                                        <p>Jelikož Taekwondo se již od počátku vyvíjelo jako sebeobranný systém, tak i
                                            veškeré aktivity v Taekwondo se zakládají v duchu sebeobrany. V dávných
                                            dobách lidé žily jednoduchý život s nedostatkem fyzického zatížení a ve
                                            stáří se jejich těla hrbila. Taekwondo také napomáhá upevnit zdraví,
                                            fyzickou i psychickou sílu a celkovou rovnováhu lidského těla.</p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/concentrating.jpg")}
                                             style="display:inline-block; width: 40%; margin-right: 1em; float: left;"
                                             alt="concentrating">
                                        <p>Člověk, který se věnuje Taekwondo se musí naučit potlačit vlastní ego,
                                            ovládat své nitro a být uctivý k druhým, čili dospět k harmonii duchovna a
                                            fyzické síly, protože se učí technikám pro vlastní obranu s použitím celého
                                            těla. Pro člověka, který se učí technikám Taekwondo, je jeho celé tělo
                                            zbraní, kterou lze lehce zneškodnit protivníkův útok za pomoci vlastních
                                            nohou, rukou, pěstí, loktů, kolen, hlavy, či jiné části svého těla.</p>
                                        <br>
                                        <p>Taekwondista se nejdříve musí naučit ovládat sám sebe a vždy se musí zastat
                                            slabšího. Může se sice rovně postavit každému nepříteli, ale kodex zakazuje
                                            nepoctivý útok a použití nepřiměřené síly. Cvičení Taekwondo učí jednotlivce
                                            duševní skromnosti.</p>
                                        <p class="text-center"><strong>5 zásad taekwondo</strong></p>
                                        <p>Taekwondo je bojové umění, které vyžaduje i přísnou disciplínu. Proto by jeho
                                            pět zásad (taekwondo jeongsin) měl každý, kdo se věnuje taekwondo, nejenom
                                            znát, ale měl by i chápat jejich skutečný význam. Každý cvičenec taekwondo
                                            by se měl zásadami taekwondo řídit nejenom v tělocvične, ale i v běžném
                                            životě.
                                        </p>
                                        <p class="text-center">
                                            <strong>Zdvořilost</strong> 예의 [ye-hwi] <br>
                                            <strong>Čestnost</strong> 염치 [yeom-chi] <br>
                                            <strong>Vytrvalost</strong> 인내 [in-nae] <br>
                                            <strong>Sebeovládání</strong> 극기 [geuk-gi] <br>
                                            <strong>Nezlomný duch</strong> 백절불굴 [baekjeol-bulgul]
                                        </p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/jongshin.jpg")} alt="jonghsin" style="width: 100%; margin: auto"">
                    `,
                    dialog: false
                },
                {
                    name: "Poomsae",
                    imgSrc: 'foto2.jpg',
                    content: `<br>
                                  <video id="poomsae-vid" width="100%" controls src="${require('@/assets/videos/poomsae.mp4')}"></video>
                                        <br>
                                        <p>Poomsae (souborná cvičení) jsou závazná cvičení, vypracovaná mistry
                                            Taekwondo,
                                            za účelem předávání vědy o umění boje a vlastních interpretacích tohoto
                                            umění.</p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/yopchagi.jpg")}
                                             style="display: inline-block; width: 40%; float: left; margin-right: 1em"
                                             alt="">
                                        <p>Pchumse se dělí na <strong>základní</strong> a <strong>mistrovské</strong>.
                                        </p>

                                        <p>V poomsae vystupují harmonicky spjaté všechny techniky obrany a útoku se
                                            vzrůstajícím stupněm obtížnosti, které napomáhají k procvičení umění boje s
                                            jedním nebo více protivníky. Takto se můžou cvičit různé útočné a obrané
                                            techniky bez skutečného protivníka a bez nebezpečí zranění. </p>
                                        <p>Posloupnost pohybů je přesně vymezena a probíhá podle stanoveného diagramu
                                            kroku. Pohyby musí být
                                            silné, koncentrované, přesné a rytmické při zachování stabilní polohy
                                            těla.</p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/yopchagi2.jpg")}
                                             style="display: inline-block; width: 35%; float: right; margin-left: 1em"
                                             alt="">
                                        <p>Poomsae stanoví základní prvek zkoušky pro další stupeň školení nebo
                                            mistrovství. </p>
                                        <p>Poomsae se dělí na <strong>8 základních</strong> (Taegeuk 1 – 8 Jang) a <strong>9
                                                mistrovských</strong> (Yudanja Poomsae), které jsou pojmenovány podle
                                            posvátných míst v
                                            Koreji nebo názvy, které se vztahují ke korejským dějinám <strong>(Koryo,
                                                Keumgang,
                                                Taebaek, Pyongwon, Sipjin, Jitae, Cheonkwon, Hansoo a Ilyeo)</strong>.
                                        </p>
                    `,
                    dialog: false
                },
                {
                    name: "Kyorugi",
                    imgSrc: 'foto3.jpg',
                    content: `<br>

                                        <video id="kyorugi-vid" width="100%" controls src="${require('@/assets/videos/kyorugi.mp4')}"></video>
                                        <br>
                                        <p>Kyorugi (zápas) se dělí na zápas <strong>řízený</strong> a
                                            <strong>volný</strong>.</p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/kyorugi1.jpg")}
                                             style="display:inline-block; width: 35%; margin-right: 1em; float: left;"
                                             alt="kyorugi">
                                        <p>Řízený boj probíhá podle předem stanoveného schématu. Je to soubor
                                            konkrétních
                                            útoků a přesně vymezených technik obrany po provedení <strong>tří kroků
                                                (sambon
                                                kjorugi)</strong>, <strong>dvou kroků (dubon kyorugi)</strong>, či
                                            <strong>jednoho kroku (hanbon kyorugi)</strong>.</p>

                                        <p>Ve <strong>cvičném volném boji (chayu kyorugi)</strong> se cvičenec musí
                                            rozhodovat rychle a
                                            samostatně, a musí svá rozhodnutí přizpůsobit aktuální situaci. Musí se
                                            vyhnout
                                            jakékoli jednostrannosti ve stylu boje a vyčerpat veškeré kombinace a
                                            uskutečňovat protiútoky.</p> <br>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/kyorugi2.jpg")}
                                             style="display: inline-block; width: 35%; float: right; margin-left: 1em"
                                             alt="kyorugi">
                                        <p> Boj sledovaný rozhodčím podléhá naopak přísným sportovním pravidlům.
                                            <strong>Sportovní
                                                zápas</strong> se uskutečňuje v plném kontaktu a trvá <strong>3 kola po
                                                3 minutách</strong>, což vyžaduje
                                            pro sportovce velké technické umění, pevnou fyzickou kondici, psychickou
                                            rovnováhu, bleskové reakce a ohromné důvěry ve vlastní schopnosti. Při
                                            volném
                                            zápase se cvičenec vybaven chrániči hrudi, hlavy, holení, předloktí a
                                            suspensorem.</p>`,
                    dialog: false
                },
                {
                    name: "Kyokpa",
                    imgSrc: 'foto4.jpg',
                    content: `
                    <br><img src=${require("@/assets/images/what-is-taekwondo/content/kyokpa1.jpg")}
                                             style="display: inline-block; width: 35%; float: right; margin-left: 1em"
                                              alt="kyokpa">
                                        <p>Kyokpa (přerážecí techniky) se dělí na <strong>silové přerážení</strong>,
                                            kde se zaměřuje především na sílu prováděné techniky, a <strong>speciální
                                                přerážení</strong>, kde je nejdůležitějším faktorem obtížnost prováděné
                                            techniky. Kjokpcha jsou součástí výcviku a jsou i soutěže v této disciplíně.
                                            Cvičenec jimi testuje sama sebe, svoji šikovnost, sílu, přesnost, zručnost,
                                            schopnost soustředit se a tím i svoji vyspělost.</p>
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/kyokpa2.jpg")}
                                              style="width: 100%; margin: auto" alt="kyokpa">
                                        <img src=${require("@/assets/images/what-is-taekwondo/content/kyokpa3.jpg")}
                                              style="width: 100%; margin: auto" alt="kyokpa">
                    `,
                    dialog: false
                }
            ]
        }
    },

    methods: {
    }
}
</script>

<style scoped lang="scss">
@use '../assets/styles/home/what-is-taekwondo';
</style>