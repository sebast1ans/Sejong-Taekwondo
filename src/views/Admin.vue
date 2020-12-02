<template>
    <div id="admin">
        <NavbarAdmin v-bind:loggedIn="loggedIn"/>
        <router-view v-if="loggedIn === true"/>
        <Login v-if="!loggedIn"/>
        <!--        <Dashboard v-if="loggedIn"/>-->
    </div>
</template>

<script>
import NavbarAdmin from "@/components/admin/NavbarAdmin"
import Login from "@/components/auth/Login"
import Dashboard from "@/components/admin/Dashboard"
import firebase from "firebase/app"
import "firebase/auth"

export default {
    name: "Admin",
    components: {
        NavbarAdmin,
        Login,
        Dashboard
    },

    data: () => ({
        loggedIn: false
    }),

    created() {
        firebase.auth().onAuthStateChanged(user => {
            this.loggedIn = !!user
        })
    },

}
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
</style>

