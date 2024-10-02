<script setup lang="ts">
import { langName, dict } from "../ts/languages";
let props = defineProps<{ lang: langName }>();
function openCv() {
    if (props.lang == "fr")
        window.open("https://eli-sauvage.github.io/CV", "_blank");
    else if (props.lang == "en")
        window.open("https://eli-sauvage.github.io/CV-en", "_blank");
}
</script>

<template>
    <div id="CV" @click="openCv">{{ dict.general.myCV[lang] }}</div>
</template>

<style scoped lang="sass">
#CV
    position: fixed
    z-index: 999
    background-color: black
    color: white
    padding: 15px
    border-radius: 10px
    cursor: pointer
@media (max-width: 1200px)
    #CV
        left: 20px
        bottom: 20px
@media (min-width: 1200px)
    #CV
        left: 40px
        bottom: 40px
</style>
