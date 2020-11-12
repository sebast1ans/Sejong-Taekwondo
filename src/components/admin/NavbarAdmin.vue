<template>
    <div>
        <v-app-bar dark>
            <v-img src="@/assets/images/logos/sejongSeal.svg" max-width="50" max-height="45" contain></v-img>
            <v-toolbar-title class="text-uppercase">Administrace</v-toolbar-title>
            <v-spacer></v-spacer>
            <router-link :to="{name: 'Home'}">
                <v-btn text><span>Hlavní stránka</span></v-btn>
            </router-link>

            <v-btn text v-if="loggedin" @click="logout"><span>Odhlásit se</span>
                <v-icon>mdi-logout</v-icon>
            </v-btn>
            <template v-slot:extension v-if="loggedin">
                <v-tabs align-with-title>
                    <v-tab :to="{name: 'News'}">Aktuality</v-tab>
                    <v-tab :to="{name: 'Members'}">Členové</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "NavbarAdmin",
    props: ['loggedin'],
    data: () => ({
        drawer: false,

    }),
    methods: {
        logout() {
            firebase.auth().signOut()
                .then(() => {
                    this.$emit('loggedout', false)
                    this.$router.push({name: 'Admin'})
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