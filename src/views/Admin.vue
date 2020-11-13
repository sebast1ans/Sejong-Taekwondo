<template>
    <div id="admin">
        <NavbarAdmin v-bind:loggedin="loggedin" v-on:loggedout="updateLoggedState($event)"/>
        <router-view v-if="loggedin === true"/>
        <Login v-on:loggedin="updateLoggedState($event)" v-if="!loggedin"/>
<!--        <Dashboard v-if="loggedin"/>-->
    </div>
</template>

<script>
import NavbarAdmin from "@/components/admin/NavbarAdmin"
import Login from "@/components/auth/Login"
import Dashboard from "@/components/admin/Dashboard";
export default {
    name: "Admin",
    components: {
        NavbarAdmin,
        Login,
        Dashboard
    },

    data: () => ({
        loggedin: false
    }),
    methods: {
        updateLoggedState(param) {
            this.loggedin = param
        }
    }
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: left;
}
</style>

