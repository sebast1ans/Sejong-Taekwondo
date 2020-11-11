<template>
    <section class="references pb-12">
        <!--        <h1>Reference</h1>-->
        <!--        <div class="accent-line"></div>-->

        <v-container>
            <v-row class="align-end">
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, officiis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, qui!
                            <br>
<!--                            <v-icon v-for="n in 5" color="yellow darken-2">grade</v-icon>-->
                        </v-card-text>
                        <v-sheet>
                            <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                                <v-img src="@/assets/images/coaches/duy.jpg"></v-img>
                            </v-avatar>
                        </v-sheet>
                    </v-card>
<!--                    <p class="offset-4 mt-n8 mr-3 text-right"> <v-icon v-for="n in 5" color="yellow darken-2">grade</v-icon></p>-->
                    <p class="font-weight-bold offset-4 mt-3">Tlusty Duy</p>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quas! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nam.
<!--                            <br><v-icon v-for="n in 5" color="yellow darken-2">grade</v-icon>-->
                        </v-card-text>
                        <v-sheet>
                            <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                                <v-img src="@/assets/images/coaches/bin.jpg"></v-img>
                            </v-avatar>
                        </v-sheet>
                    </v-card>
                    <p class="font-weight-bold offset-4 mt-3">Bill Vu</p>

                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, rerum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur error nihil officia quae quis similique suscipit voluptas voluptates.
<!--                            <br><v-icon v-for="n in 5" color="yellow darken-2">grade</v-icon>-->
                        </v-card-text>
                        <v-sheet>
                            <v-avatar class="mb-n10 ml-5 elevation-6" height="88px" width="88px">
                                <v-img src="@/assets/images/coaches/malydat.jpg"></v-img>
                            </v-avatar>
                        </v-sheet>
                    </v-card>
                    <p class="font-weight-bold offset-4 mt-3">Maly Dat</p>

                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>

export default {
    name: "References"
}
</script>

<style scoped>
.references {
    background-color: #f0f0f0;
}
</style>