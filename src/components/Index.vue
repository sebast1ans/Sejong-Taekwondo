<template>
    <main>
        <WelcomeCarousel/>
        <WhoAreWe/>
        <Coaches/>
        <References/>
        <WhatIsTaekwondo/>
        <Locations/>
        <Contact/>
        <Sponsors/>
    </main>
</template>

<script>
import WelcomeCarousel from "./WelcomeCarousel";
import WhoAreWe from "./WhoAreWe";
import Coaches from "./Coaches";
import References from "./References";
import WhatIsTaekwondo from "./WhatIsTaekwondo";
import Locations from "./Locations";
import Contact from "./Contact";
import Sponsors from "./Sponsors";

export default {
    name: "Index",
    components: {
        WhatIsTaekwondo,
        References,
        Coaches,
        WelcomeCarousel,
        WhoAreWe,
        Locations,
        Contact,
        Sponsors

    }
}
</script>

<style lang="scss">
@use '../assets/styles/main';
</style>