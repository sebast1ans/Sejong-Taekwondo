<template>
    <div>
        <Navigation/>
        <WelcomeCarousel/>
        <Announcement/>
        <!--        <News/>-->
        <WhoAreWe/>
        <Coaches/>
        <!--        <References/>-->
        <WhatIsTaekwondo/>
        <Locations/>
        <Contact/>
        <Sponsors/>
    </div>
</template>

<script>
import Navigation from "./Navigation";
import WelcomeCarousel from "./WelcomeCarousel";
import News from "./News";
import WhoAreWe from "./WhoAreWe";
import Coaches from "./Coaches";
import References from "./References";
import WhatIsTaekwondo from "./WhatIsTaekwondo";
import Locations from "./Locations";
import Contact from "./Contact";
import Sponsors from "./Sponsors";
import Announcement from "./Announcement";

export default {
    name: "Index",
    components: {
        Navigation,
        Announcement,
        News,
        WhatIsTaekwondo,
        References,
        Coaches,
        WelcomeCarousel,
        WhoAreWe,
        Locations,
        Contact,
        Sponsors
    },
}
</script>

<style lang="scss">
@use '../assets/styles/main';

</style>