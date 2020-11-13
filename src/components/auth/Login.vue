<template>
    <div class="login">
        <v-container>
            <v-card>
                <v-card-title>Přihlášení</v-card-title>
                <v-card-text>
                    <v-form @submit.prevent="login">
                        <v-text-field
                                type="email"
                                name="email"
                                label="E-mail"
                                v-model="email"
                        ></v-text-field>
                        <v-text-field
                                type="password"
                                name="current-password"
                                label="Heslo"
                                v-model="password"
                        ></v-text-field>
                        <p v-if="feedback" class="text-center red--text">{{ feedback }}</p>
                        <v-btn type="submit">Přihlásit se</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "Login",

    data: () => ({
        email: null,
        password: null,
        feedback: null,
    }),

    methods: {
        login() {
            if (this.email && this.password) {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then(cred => {
                        this.$emit('loggedin', true)
                        this.$router.push({name: 'News'})
                    }).catch(err => {
                    this.feedback = err.message
                })
                this.feedback = null
            } else {
                this.feedback = "Please fill in both fields"
            }
        }
    }
// TODO login state
}
</script>

<style scoped>

</style>