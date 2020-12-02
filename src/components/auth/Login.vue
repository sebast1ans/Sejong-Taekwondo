<template>
    <div class="login">
        <v-container class="mt-12">
            <v-row>
                <v-spacer></v-spacer>
                <v-col>
                    <v-snackbar v-model="snackbar" top color="error">
                        <span>{{ feedback }}</span>
                        <v-btn text>
                            <v-icon @click="snackbar = false">close</v-icon>
                        </v-btn>
                    </v-snackbar>
                    <v-card width="400" outlined>
                        <v-card-title>Přihlášení</v-card-title>
                        <v-card-text>
                            <v-form @submit.prevent="login">
                                <v-text-field
                                        type="email"
                                        name="email"
                                        autocomplete="email"
                                        label="E-mail"
                                        v-model="email"
                                ></v-text-field>
                                <v-text-field
                                        type="password"
                                        name="password"
                                        autocomplete="current-password"
                                        label="Heslo"
                                        v-model="password"
                                ></v-text-field>
                                <!--                                <p v-if="feedback" class="text-center red&#45;&#45;text">{{ feedback }}</p>-->
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn type="submit" color="primary" :loading="loading">
                                        <span>Přihlásit se
                                            <v-icon>mdi-login</v-icon>
                                        </span>
                                    </v-btn>

                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name: "Login",

    data: () => ({
        email: '',
        password: '',
        feedback: '',
        loading: false,
        snackbar: false
    }),

    methods: {
        login() {
            if (this.email && this.password) {
                this.loading = true
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(() => {
                        this.$router.replace({name: 'News'})
                        this.loading = false
                    }).catch(err => {
                    this.loading = false
                    this.feedback = err.message
                    this.snackbar = true
                })
                this.feedback = null
            } else {
                this.feedback = "Please fill in both fields"
                this.snackbar = true
            }
        }
    }
}
</script>

<style scoped>

</style>