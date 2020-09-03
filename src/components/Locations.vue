<template>
    <section class="locations pb-12">
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
                        <h4>Děti 6 – 10 let</h4>
                        <p>Středa 16.30 – 17.30</p>
                        <h4>Děti 10 – 15 let</h4>
                        <p>Úterý a čtvrtek 16.30 – 17.30</p>
                        <h4>Dospělí</h4>
                        <p>Úterý a čtvrtek 17.45 – 19.30</p>
                    </div>
                    <div class="icon-transport">
                        <v-icon>directions_bus</v-icon>
                    </div>
                    <div class="transport">
                        <h4>Metro:</h4>
                        <p>Pankrác (5 min. pěšky</p>
                        <h4>Bus</h4>
                        <p>Krčský hřbitov (193, 148)</p>
                    </div>
                    <div class="map">
                        <iframe style="border:0"
                                src="https://www.google.com/maps/embed/v1/place?q=sejong%20dojang&key=AIzaSyCfR22SLMLB8bq_gRgaAMOWNqVrDEDVlKc"
                                allowfullscreen></iframe>
                    </div>
                </v-col>

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
                        <h4>Děti 6 – 10 let</h4>
                        <p>Středa 16.00 – 17.00</p>
                        <h4>Děti 10 – 15 let</h4>
                        <p>Úterý a čtvrtek 16.00 – 17.00</p>
                    </div>
                    <div class="icon-transport">
                        <v-icon>directions_bus</v-icon>
                    </div>
                    <div class="transport">
                        <h4>Bus</h4>
                        <p>Sídliště Libuš (165)</p>
                        <p>Pavlíkova (197, 215)</p>
                    </div>
                    <div class="map">
                        <iframe width="600" height="450" style="border:0"
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