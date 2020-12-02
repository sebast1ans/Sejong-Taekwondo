<template>
    <div>
        <Navigation/>
        <WelcomeCarousel/>
        <Announcement/>
        <!--        <News/>-->
        <WhoAreWe/>
        <References/>
        <Coaches/>
        <WhatIsTaekwondo/>
        <Locations/>
        <Contact/>
        <Sponsors/>
    </div>
</template>

<script>
import Navigation from "@/components/home/Navigation";
import WelcomeCarousel from "@/components/home/WelcomeCarousel";
import News from "@/components/home/News";
import WhoAreWe from "@/components/home/WhoAreWe";
import Coaches from "@/components/home/Coaches";
import References from "@/components/home/References";
import WhatIsTaekwondo from "@/components/home/WhatIsTaekwondo";
import Locations from "@/components/home/Locations";
import Contact from "@/components/home/Contact";
import Sponsors from "@/components/home/Sponsors";
import Announcement from "@/components/home/Announcement";

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
@use '~@/assets/styles/main';

</style>