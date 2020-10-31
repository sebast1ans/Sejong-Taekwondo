<template>
    <section id="coaches">
        <h1>Trenéři</h1>
        <div class="accent-line"></div>
        <v-container>
            <v-row class="d-flex justify-center">

                <v-card v-for="coach in mainCoaches" width="330" class="mt-8 mx-4 mb-4">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%"
                               :src="require(`@/assets/images/coaches/${coach.picture}`)"></v-img>
                    </v-sheet>
                    <v-card-title>{{ coach.name }}</v-card-title>
                    <v-card-subtitle>{{ coach.subtitle }}</v-card-subtitle>
                    <v-card-text class="text--primary" v-html="coach.cardText">
                    </v-card-text>
                    <v-card-actions>
                        <v-dialog v-model="coach.dialog" scrollable width="600px">
                            <template v-slot:activator="{ on }">
                                <v-btn text color="#DA0A16" slot="activator" v-on="on">Více</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="d-flex justify-space-between">
                                    {{ coach.name }}
                                    <v-btn icon @click="coach.dialog = false">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text v-html="coach.dialogText">
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>
            </v-row>

            <v-row class="d-flex justify-center mt-4">

                <v-card v-for="asistentCoach in asistentCoaches" max-width="260" class="my-12 mx-3">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img
                                class="mt-n8 elevation-6"
                                max-width="80%"
                                :src="require(`@/assets/images/coaches/${asistentCoach.picture}`)"
                        ></v-img>
                    </v-sheet>

                    <v-card-title>{{ asistentCoach.name }}</v-card-title>
                    <v-card-subtitle>{{ asistentCoach.subtitle }}</v-card-subtitle>
                    <v-card-text v-html="asistentCoach.cardText">
                    </v-card-text>
                    <v-card-actions>
                        <v-dialog v-model="asistentCoach.dialog" scrollable width="600px">
                            <template v-slot:activator="{ on }">
                                <v-btn text color="#DA0A16" slot="activator" v-on="on">Více</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="d-flex justify-space-between">
                                    {{ asistentCoach.name }}
                                    <v-btn icon @click="asistentCoach.dialog = false">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text v-html="asistentCoach.dialogText">
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </v-card-actions>
                </v-card>

            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Coaches",

    data() {
        return {
            mainCoaches: [
                {
                    picture: "ondra.jpg",
                    name: "Ondřej Havlíček",
                    subtitle: "hlavní trenér, 6. dan",
                    cardText: `Kvalifikace: trenér II. třídy <br>
                        Člen české národní reprezentace A <br>
                        Kukkiwon No.: 05070243`,
                    dialogText: `<br><ul>
                                        <li>Zkušební komisař CTF</li>
                                        <li>Vedoucí národního exhibičního týmu Moohwa</li>
                                        <li>Ocenění za službu a přispění k rozvoji Taekwondo (WT)</li>
                                        <li>Ocenění za mimořádný přínos pro česko-korejské vztahy</li>
                                        <li>Absolvent FF UK, obor koreanistika</li>
                                        <li>Tréninky v Koreji (Sung Kyun Kwan University, KTA, Kukkiwon, K-Tigers,
                                            Taeseong Taekwondo)
                                        </li>
                                    </ul>
                                    <br>
                                    <strong>Nějvětší sportovní úspěchy</strong>
                                    <ul>
                                        <li>Germany Open 2019 - 3. místo</li>
                                        <li>World Taekwondo Hanmadang 2018 – 1.místo</li>
                                        <li>Germany Open 2018 – 2. místo</li>
                                        <li>Korea Open G-2 2017, Chuncheon Korea - 1.místo</li>
                                        <li>Austria Open G-1 2017 – 1. místo</li>
                                        <li>Spanish Open A-Class 2017 - 1.místo</li>
                                        <li>Lille Open A Class 2017 - 2.místo</li>
                                        <li>World Taekwondo Championships 2016, Peru - 9. místo</li>
                                        <li>Jeonju Open 2016, Korea - 4. místo</li>
                                        <li>World Taekwondo Hanmadang 2015 - 2. místo</li>
                                        <li>ME Serbia 2015 - 3. Místo</li>
                                        <li>Nejlepší sportovec roku 2015, 2016, 2017, 2018 (ČUBU)</li>
                                        <li>Sedminásobný mistr ČR (2013 – 2019)</li>
                                        <li>Účast na ME 1996 - Helsinky/Finsko</li>
                                        <li>Účast na MS 1995 - Manila/Filipíny</li>
                                    </ul>`,
                    dialog: false
                },
                {
                    picture: "anh.jpg",
                    name: "Vu Viet Anh",
                    subtitle: "asistent trenéra, 4. dan",
                    cardText: `Kvalifikace: trenér II. třídy <br>
                        Člen české národní reprezentace A <br>
                        Kukkiwon No.: 5414090`,
                    dialogText: ` <br><ul>
                                        <li>Člen českého národního exhibičního týmu Moohwa</li>
                                        <li>Rozhodčí poomsae kategorie C 2016</li>
                                        <li>Tréninky v Koreji (KTA, K-Tigers, Taeseong Taekwondo)</li>
                                        <li>Tréninky s národním týmem Vietnamu (Saigon)</li>
                                    </ul>
                                    <br>
                                    <strong>Nějvětší sportovní úspěchy</strong>
                                    <ul>
                                        <li>Hungarian Open 2019 - 1. místo</li>
                                        <li>World Taekwondo Hanmadang 2018 - 5. místo</li>
                                        <li>Jeonju Open 2016, Korea - 3. místo</li>
                                        <li>World Taekwondo Championships 2016, Peru - 9. místo</li>
                                        <li>Belgium Open 2016 - finále</li>
                                        <li>Austria Open A-Class 2015 - 3.místo</li>
                                        <li>Hungary Open 2012 - 1.místo</li>
                                        <li>Belgium Challenge Cup 2012 - 1.místo</li>
                                        <li>Pětinásobný mistr České republiky (2015 – 2019)</li>
                                        <li>Vítěz Taekwondo Extraligy 2015, 2016, 2017, 2018, 2019</li>
                                        <li>Nejlepší sportovec roku 2019 (ČUBU)</li>
                                        <li>Vítěz NTL 2010</li>
                                    </ul>`,
                    dialog: false
                }
            ],
            asistentCoaches: [
                {
                    picture: "duy.jpg",
                    name: "Tang Tuan Duy",
                    subtitle: "asistent trenéra, 3. dan",
                    cardText: `Kukkiwon No.: 05414093`,
                    dialogText: `<br><ul>
                                                    <li>Rozhodčí poomsae kategorie B</li>
                                                    <li>Člen českého národního exhibičního týmu Moohwa</li>
                                                    <li>Tréninky v Koreji (Taeseong Taekwondo)</li>
                                                </ul>
                                                <br>
                                                <strong>Nějvětší sportovní úspěchy</strong>
                                                <ul>
                                                    <li>Czech Open 2019 – 3. místo</li>
                                                    <li>Czech Open 2015 - 3. místo</li>
                                                    <li>Prague Open 2013 - 1. místo</li>
                                                    <li>Czech Open 2013 - 1. místo</li>
                                                    <li>Czech Open 2012 - 3. místo</li>
                                                    <li>Cobra Cup 2010 - 2.místo</li>
                                                    <li>Májový pohár 2010 - 3. místo</li>
                                                </ul>`,
                    dialog: false
                },
                {
                    picture: "velkydat.jpg",
                    name: "Pham Tien Dat",
                    subtitle: "asistent trenéra, 2. dan",
                    cardText: `Kukkiwon No.: 05633611`,
                    dialogText: `<br><ul>
                                                    <li>Člen českého národního exhibičního týmu Moohwa</li>
                                                    <li>Tréninky v Koreji (Taeseong Taekwondo)</li>
                                                </ul>
                                                <br>
                                                <strong>Nějvětší sportovní úspěchy</strong>
                                                <ul>
                                                    <li>Hungary Open 2019 – 4. místo</li>
                                                    <li>Mustang Open 2019 – 1. místo</li>
                                                    <li>Czech Open 2018 - 1. ,ísto</li>
                                                    <li>Ambassador’s Cup Prague Open 2018 – 1. místo</li>
                                                    <li>Moravia Cup 2018 - 1. místo</li>
                                                    <li>Prague Open 2017 - 1. místo</li>
                                                    <li>Prague Open 2016 - 1. místo</li>
                                                    <li>Kolín Cup 2016 - 1. místo</li>
                                                    <li>Havířovský pohár 2016 - 1.místo</li>
                                                    <li>Moravia Poomse Cup 2015 - 1.místo</li>
                                                    <li>Prague Open 2015 - 1.místo</li>
                                                    <li>Kolín Cup 2015 - 1. místo</li>
                                                    <li>Hansoo Cup 2015 - 1. místo</li>
                                                    <li>Vítěz NTL 2016</li>
                                                </ul>`,
                    dialog: false
                },
                {
                    picture: "bin.jpg",
                    name: "Vu Ngoc Son",
                    subtitle: "asistent trenéra, 2. dan",
                    cardText: `Kukkiwon No.: 05633620`,
                    dialogText: `<br><ul>
                                                    <li>Člen českého národního exhibičního týmu Moohwa</li>
                                                    <li>Tréninky v Koreji (Taeseong Taekwondo)</li>
                                                </ul>
                                                <br>
                                                <strong>Nějvětší sportovní úspěchy</strong>
                                                <ul>
                                                    <li>Hungary Open 2019 – 3. místo</li>
                                                    <li>Czech Open 2018 - 1. místo</li>
                                                    <li>Moravia Poomsae Cup 2018 – 1. místo</li>
                                                    <li>Havířovský pohár 2018 - 1.místo</li>
                                                    <li>Ambassador’s Cup Prague Open 2018 – 2. místo</li>
                                                    <li>Prague Open 2017 - 1. místo</li>
                                                    <li>Prague Open 2016 - 1. místo</li>
                                                    <li>Kolín Cup 2016 - 1. místo</li>
                                                    <li>Hansoo Cup 2014 - 1. místo</li>
                                                    <li>Vítěz NTL 2016</li>
                                                </ul>`,
                    dialog: false
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>