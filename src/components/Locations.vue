<template>
    <section id="locations" class="pb-12">
        <h1>Kdy a kde trénujeme</h1>
        <div class="accent-line"></div>
        <v-container fluid>
            <v-row>
                <!--      Horackova-->
                <v-col md class="location">
                    <div class="icon-map">
                        <v-icon>place</v-icon>
                    </div>
                    <div class="address">
                        <h2>ZŠ Horáčkova</h2>
                        <p>Horáčkova 1100<br>
                            Praha 4 – Pankrác</p>
                    </div>
                    <div class="icon-clock">
                        <v-icon>alarm</v-icon>
                    </div>
                    <div class="time">
                        <p><strong>Děti 6 – 10 let</strong><br>
                            Středa 16.30 – 17.30 <br>
                            <strong>Děti 10 – 15 let</strong><br>
                            Úterý a čtvrtek 16.30 – 17.30 <br>
                            <strong>Dospělí</strong><br>
                            Úterý a čtvrtek 17.45 – 19.30</p>
                    </div>
                    <div class="icon-transport">
                        <v-icon>directions_bus</v-icon>
                    </div>
                    <div class="transport">
                        <p><strong>Metro:</strong><br>
                            Pankrác (5 min. pěšky <br>
                            <strong>Bus</strong> <br>
                            Krčský hřbitov (193, 148)</p>
                    </div>
                    <div class="map">
                        <iframe style="border:0"
                                src="https://www.google.com/maps/embed/v1/place?q=sejong%20dojang&key=AIzaSyCfR22SLMLB8bq_gRgaAMOWNqVrDEDVlKc"
                                allowfullscreen></iframe>
                    </div>
                </v-col>
                <!--                <div class="maps-line"></div>-->
                <!--      Smolkova-->
                <v-col md class="location">
                    <div class="icon-map">
                        <v-icon>place</v-icon>
                    </div>
                    <div class="address">
                        <h2>ZŠ Smolkova</h2>
                        <p>Smolkova 565/8<br>
                            Praha 12 – Kamýk</p>
                    </div>
                    <div class="icon-clock">
                        <v-icon>alarm</v-icon>
                    </div>
                    <div class="time">
                        <p><strong>Děti 6 – 10 let</strong><br>
                            Středa 16.00 – 17.00 <br>
                            <strong>Děti 10 – 15 let</strong> <br>
                            Úterý a čtvrtek 16.00 – 17.00</p>
                    </div>
                    <div class="icon-transport">
                        <v-icon>directions_bus</v-icon>
                    </div>
                    <div class="transport">
                        <strong>Bus</strong>
                        <p>Sídliště Libuš (165)<br>
                            Pavlíkova (197, 215)</p>
                    </div>
                    <div class="map">
                        <iframe style="border:0"
                                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJRbZwgmaRC0cRWzHX5AC9s_c&key=AIzaSyCfR22SLMLB8bq_gRgaAMOWNqVrDEDVlKc"
                                allowfullscreen></iframe>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    name: "Locations"
}
</script>

<style lang="scss">
@use '../assets/styles/home/locations';
</style>