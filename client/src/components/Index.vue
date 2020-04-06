<template>
    <main>
        <WelcomeCarousel/>
        <WhoAreWe />
    </main>
</template>
<script>
    import WelcomeCarousel from "./WelcomeCarousel";
    import WhoAreWe from "./WhoAreWe";

    export default {
        name: "Index",
        components: {
            WelcomeCarousel,
            WhoAreWe
        }
    }
</script>

<style lang="scss">
    @use '../assets/styles/main';
</style>