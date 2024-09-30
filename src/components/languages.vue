<script setup lang="ts">
const emit = defineEmits(["changeLanguage"]);
function click(lang: string) {
    emit("changeLanguage", lang);
    document.querySelector("img")?.classList.remove("active");
    document.querySelector(`#${lang}`)?.classList.add("active");
}
</script>

<template>
    <div id="languageChoice">
        <img src="../assets/france.svg" id="fr" @click="click('fr')" class="active" />
        <img src="../assets/UK.svg" id="en" @click="click('en')" />
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
