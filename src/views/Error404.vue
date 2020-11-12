<template>
    <div class="not-found">
        <v-img src="@/assets/images/logos/sejongSeal.svg" max-height="400" contain></v-img>
        <h1>Stránka neexistuje 😢</h1>
    </div>
</template>

<script>
export default {
    name: "Error404"
}
</script>

<style scoped>
.not-found {
    display: grid;
    height: 100vh;
    justify-content: center;
    align-content: center;
}
</style>