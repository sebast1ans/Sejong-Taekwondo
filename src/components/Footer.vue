<template>
    <footer>
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <img class="footer-logo" src="@/assets/images/logos/sejongSealWhite.svg"
                         alt="Sejong Logo">
                    &copy; 2020 Sejong Taekwondo
                </v-col>
            </v-row>
        </v-container>
    </footer>

</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped lang="scss">
footer {
  position: absolute;
  bottom: 0;
  width: 100vw;
  color: white;
  background-color: #777;

  .footer-logo {
    height: 50px;
  }
}


</style>