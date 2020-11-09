<template>
    <section id="contact" class="pb-12">
        <h1>Kontakt</h1>
        <div class="accent-line"></div>
        <v-container>
            <v-row>
                <v-col class="text-center">
                    <strong>Sejong Taekwondo Dojang, z. s.</strong><br>
                    <strong>Email: </strong><a href="mailto:info@sejong.cz" target="_top">info@sejong.cz</a> <br>
                    <strong>IČ:</strong> 68403518 <br>
                    <strong>ČUS evidence: </strong>3107729 <br>
                    <strong>Bankovní spojení (ČSOB):</strong> 154282135/0300 <br>
                    <br>
                    <v-btn outlined color="#DA0A16" @click="$vuetify.goTo('#locations')">Kdy a kde trénujeme
                        <v-icon>arrow_upward</v-icon>
                    </v-btn>
                    <br>
                    <br>
                    <v-icon color="black">contacts</v-icon>
                    <strong> Mgr. Ondřej Havlíček</strong><br>
                    <strong>Telefon: </strong> 604 541 100<br>
                    <strong>E-mail: </strong> <a href="mailto:ondra@sejong.cz" target="_top">ondra@sejong.cz</a>
                    <br>
                    <br>
                    <v-icon color="black">contacts</v-icon>
                    <strong>Bc. Phuong Nhung Havlíčková</strong><br>
                    <strong>Telefon (Tiếng Việt):</strong> 774 545 777 <br>
                    <strong>E-mail: </strong><a href="mailto:hoang.pnhung@gmail.com"
                                                target="_top">hoang.pnhung@gmail.com</a><br>
                    <br>
                    <div class="social-icons">
                        <a href="https://www.facebook.com/SejongDojang/" target="_blank" class="nav-link">
                            <v-icon class="contact-icon contact-icon-fb">mdi-facebook</v-icon>
                        </a>
                        <a href="https://www.youtube.com/channel/UCENWwwDVUMEnVamN3ANXB2g" target="_blank"
                           class="nav-link">
                            <v-icon class="contact-icon contact-icon-yt">mdi-youtube</v-icon>
                        </a>
                        <a href="https://www.instagram.com/sejong_taekwondo/" target="_blank" class="nav-link">
                            <v-icon class="contact-icon contact-icon-ig">mdi-instagram</v-icon>
                        </a>
                    </div>


                </v-col>
                <!--                <v-col>-->
                <!--                    <form action="">-->
                <!--                        <input type="text" name="name" placeholder="Vaše jméno">-->
                <!--                        <input type="email" name="email" placeholder="Váš e-mail">-->
                <!--                        <textarea name="text" cols="80" rows="8" placeholder="Zpráva..."></textarea>-->
                <!--                        <input type="submit" value="Odeslat">-->
                <!--                    </form>-->
                <!--                </v-col>-->
            </v-row>
        </v-container>

    </section>

</template>

<script>
export default {
    name: "Contact"
}
</script>

<style lang="scss">
@use '../assets/styles/home/contact';
</style>