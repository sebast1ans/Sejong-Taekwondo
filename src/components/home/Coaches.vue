<template>
    <section id="coaches">
        <h1>Trenéři</h1>
        <div class="accent-line"></div>
        <v-container>
            <v-row class="d-flex justify-center">

                <v-card v-for="coach in mainCoaches.slice().reverse()" :key="coach.id" width="330"
                        class="mt-8 mx-4 mb-4">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img class="mt-n8 elevation-6" max-width="80%"
                               :src="require(`@/assets/images/coaches/${coach.picture}`)"></v-img>
                    </v-sheet>
                    <v-card-title>{{ coach.name }}</v-card-title>
                    <v-card-subtitle>{{ coach.subtitle }}</v-card-subtitle>
                    <v-card-text class="text--primary" v-html="coach.cardText">
                    </v-card-text>
                    <v-card-actions>
                        <v-dialog v-model="coachDialog[coach.id]" scrollable width="600px">
                            <template v-slot:activator="{ on }">
                                <v-btn text color="#DA0A16" slot="activator" v-on="on">Více</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="d-flex justify-space-between">
                                    {{ coach.name }}
                                    <v-btn icon @click.stop="$set(coachDialog, coach.id, false)">
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

                <v-card v-for="assistantCoach in assistantCoaches" :key="assistantCoach.id" max-width="260"
                        class="my-12 mx-3">
                    <v-sheet class="d-flex justify-space-around">
                        <v-img
                                class="mt-n8 elevation-6"
                                max-width="80%"
                                :src="require(`@/assets/images/coaches/${assistantCoach.picture}`)"
                        ></v-img>
                    </v-sheet>

                    <v-card-title>{{ assistantCoach.name }}</v-card-title>
                    <v-card-subtitle>{{ assistantCoach.subtitle }}</v-card-subtitle>
                    <v-card-text v-html="assistantCoach.cardText">
                    </v-card-text>
                    <v-card-actions>
                        <v-dialog v-model="coachDialog[assistantCoach.id]" scrollable width="600px">
                            <template v-slot:activator="{ on }">
                                <v-btn text color="#DA0A16" slot="activator" v-on="on">Více</v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="d-flex justify-space-between">
                                    {{ assistantCoach.name }}
                                    <v-btn icon @click.stop="$set(coachDialog, assistantCoach.id, false)">
                                        <v-icon>close</v-icon>
                                    </v-btn>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text v-html="assistantCoach.dialogText">
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
import db from "@/firebase/init";

export default {
    name: "Coaches",

    data() {
        return {
            coaches: [],
            coachDialog: {}
        }
    },

    computed: {
        mainCoaches() {
            return this.coaches.filter(coach => coach.role.match("main")
            )
        },
        assistantCoaches() {
            return this.coaches.filter(coach => coach.role.match("assistant")
            )
        }
    },

    created() {
        db.collection("coaches").get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    let coach = doc.data()
                    coach.id = doc.id
                    this.coaches.push(coach)
                })

            })
    }
}
</script>

<style scoped>

</style>