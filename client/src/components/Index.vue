<template>
    <main>
        <WelcomeCarousel/>
        <WhoAreWe />
        <Coaches />
    </main>
</template>
<script>
    import WelcomeCarousel from "./WelcomeCarousel";
    import WhoAreWe from "./WhoAreWe";
    import Coaches from "./Coaches";

    export default {
        name: "Index",
        components: {
            Coaches,
            WelcomeCarousel,
            WhoAreWe
        }
    }
</script>

<style lang="scss">
    @use '../assets/styles/main';
</style>