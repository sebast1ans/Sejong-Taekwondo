<template>
    <section id="coaches">
        <h1>Trenéři</h1>
        <div class="accent-line"></div>
        <v-container>
            <v-row class="d-flex justify-center">
                <v-card width="330" class="mt-8 mx-4 mb-4">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%"
                               src="../assets/images/coaches/ondra.jpg"></v-img>
                    </v-sheet>
                    <v-card-title>Ondřej Havlíček</v-card-title>
                    <v-card-subtitle>hlavní trenér, 6. dan</v-card-subtitle>
                    <v-card-text class="text--primary">
                        Kvalifikace: trenér II. třídy <br>
                        Člen české národní reprezentace A <br>
                        Kukkiwon No.: 05070243
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#DA0A16">Více</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card max-width="330" class="mt-8 mx-4 mb-4">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%" src="../assets/images/coaches/anh.jpg"></v-img>
                    </v-sheet>
                    <v-card-title>Vu Viet Anh</v-card-title>
                    <v-card-subtitle>asistent trenéra, 4. dan</v-card-subtitle>
                    <v-card-text class="text--primary">
                        Kvalifikace: trenér II. třídy <br>
                        Člen české národní reprezentace A <br>
                        Kukkiwon No.: 5414090
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#DA0A16">Více</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>

            <v-row class="d-flex justify-center mt-4">
                <v-card max-width="260" class="my-12 mx-3">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%" src="../assets/images/coaches/duy.jpg"></v-img>
                    </v-sheet>

                    <v-card-title>Tang Tuan Duy</v-card-title>
                    <v-card-subtitle>asistent trenéra, 3. dan</v-card-subtitle>
                    <v-card-text>
                        Kukkiwon No.: 05414093
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#DA0A16">Více</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card max-width="260" class="my-12 mx-3">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%"
                               src="../assets/images/coaches/velkydat.jpg"></v-img>
                    </v-sheet>

                    <v-card-title>Pham Tien Dat</v-card-title>
                    <v-card-subtitle>asistent trenéra, 2. dan</v-card-subtitle>
                    <v-card-text>
                        Kukkiwon No.: 05633611
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#DA0A16">Více</v-btn>
                    </v-card-actions>
                </v-card>

                <v-card max-width="260" class="my-12 mx-3">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%" src="../assets/images/coaches/bin.jpg"></v-img>
                    </v-sheet>

                    <v-card-title>Vu Ngoc Son</v-card-title>
                    <v-card-subtitle>asistent trenéra, 2. dan</v-card-subtitle>
                    <v-card-text>
                        Kukkiwon No.: 05633620
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text color="#DA0A16">Více</v-btn>
                    </v-card-actions>
                </v-card>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Coaches"
}
</script>

<style scoped>

</style>