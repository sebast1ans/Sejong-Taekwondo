<template>
    <div>
        <v-app-bar dark>
            <v-img src="@/assets/images/logos/sejongSeal.svg" max-width="50" max-height="45" contain></v-img>
            <v-toolbar-title class="text-uppercase">Administrace</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link :to="{name: 'Home'}">
                <v-btn text v-if="!loggedIn"><span><v-icon>mdi-home</v-icon> Hlavní stránka</span></v-btn>
            </router-link>

            <v-btn text @click="logout" v-if="loggedIn">
                <span><v-icon>mdi-logout</v-icon> Odhlásit se</span>

            </v-btn>

            <template v-slot:extension v-if="loggedIn">
                <v-tabs align-with-title>
                    <v-tab :to="{name: 'News'}">Aktuality</v-tab>
                    <v-tab :to="{name: 'Members'}">Členové</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    name: "NavbarAdmin",
    props: ['loggedIn'],

    data: () => ({
        feedback: '',
    }),

    methods: {
        logout() {
            this.isActive = true
            firebase.auth().signOut()
                .then(() => {
                    this.$router.replace({name: 'Admin'})
                }).catch(err => {
                console.log(err.message)
                this.feedback = err.message
            })
        }
    }

}
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>