<script setup lang="ts">
import { langName } from "../ts/languages";

defineProps<{ lang: langName }>();
const emit = defineEmits(["changeLanguage"]);
function click(lang: string) {
    emit("changeLanguage", lang);
}
</script>

<template>
    <div id="languageChoice">
        <img
            src="../assets/france.svg"
            id="fr"
            @click="click('fr')"
            :class="lang == 'fr' ? 'active' : ''"
        />
        <img
            src="../assets/UK.svg"
            id="en"
            @click="click('en')"
            :class="lang == 'en' ? 'active' : ''"
        />
    </div>
</template>

<style scoped lang="sass">
#languageChoice
    height: 25px
    width: 50px
    display: flex
    justify-content: end
    margin-right: 15px
    position: fixed
    bottom: 25px
    right: 25px
    z-index: 1000

$radius:6px
#fr
    border-radius: $radius 0 0 $radius
#en
    border-radius: 0 $radius $radius 0
img
    opacity: .25
img.active
    opacity: 1
</style>
