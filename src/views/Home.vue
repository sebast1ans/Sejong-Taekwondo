<template>
    <div>
        <Navigation/>
        <WelcomeCarousel/>
        <Announcement/>
        <News/>
        <WhoAreWe/>
        <Coaches/>
        <References/>
        <WhatIsTaekwondo/>
        <Locations/>
        <Contact/>
        <Sponsors/>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import WelcomeCarousel from "@/components/WelcomeCarousel";
import News from "@/components/News";
import WhoAreWe from "@/components/WhoAreWe";
import Coaches from "@/components/Coaches";
import References from "@/components/References";
import WhatIsTaekwondo from "@/components/WhatIsTaekwondo";
import Locations from "@/components/Locations";
import Contact from "@/components/Contact";
import Sponsors from "@/components/Sponsors";
import Announcement from "@/components/Announcement";

export default {
    name: "Home",
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