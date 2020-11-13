<template>
    <div id="article">
        <v-container>
            <v-row>
                <v-col>
                    <h1>{{ $route.params.article }}</h1>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: "Article"
}
</script>

<style scoped>

</style>