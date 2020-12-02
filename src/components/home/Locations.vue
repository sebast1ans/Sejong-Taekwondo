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
                    <div class="map" id="mapHorackova">
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
                            Úterý a čtvrtek 16.00 – 17.00 <br>
                            <strong>Dospělí začátečníci</strong><br>
                            Středa 18.30 – 20.00
                        </p>
                    </div>
                    <div class="icon-transport">
                        <v-icon>directions_bus</v-icon>
                    </div>
                    <div class="transport">
                        <strong>Bus</strong>
                        <p>Sídliště Libuš (165)<br>
                            Pavlíkova (197, 215)</p>
                    </div>
                    <div class="map" id="mapSmolkova">
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import {Loader} from "@googlemaps/js-api-loader"

export default {
    name: "Locations",
    data: () => ({
        coordinatesHorackova: {
            lat: 50.0461,
            lng: 14.4365
        },
        coordinatesSmolkova: {
            lat: 50.0085,
            lng: 14.4514
        },
        renderNewMap: new Loader({
            apiKey: "AIzaSyCfR22SLMLB8bq_gRgaAMOWNqVrDEDVlKc",
            version: "weekly",
        })
    }),

    mounted() {
        this.renderMap()
    },

    methods: {
        renderMap() {
            this.renderNewMap.load().then(() => {
                const mapHorackova = new google.maps.Map(document.getElementById("mapHorackova"), {
                    center: this.coordinatesHorackova,
                    zoom: 16,
                    fullscreenControl: false,
                    zoomControl: true,
                    streetViewControl: true
                })

                new google.maps.Marker({
                    position: this.coordinatesHorackova,
                    map: mapHorackova,
                    title: "Sejong Taekwondo"
                })

                const mapSmolkova = new google.maps.Map(document.getElementById("mapSmolkova"), {
                    center: this.coordinatesSmolkova,
                    zoom: 16,
                    fullscreenControl: false,
                    zoomControl: true,
                    streetViewControl: true
                })

                new google.maps.Marker({
                    position: this.coordinatesSmolkova,
                    map: mapSmolkova,
                    title: "Sejong Taekwondo"
                })
            })

        },
    }
}
</script>

<style lang="scss">
@use '~@/assets/styles/home/locations';
</style>