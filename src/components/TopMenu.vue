<script setup lang="ts">
import $ from "jquery"
const emit = defineEmits(['changeLanguage'])
function click(lang: string) {
    emit('changeLanguage', lang)
    $("img").removeClass("active")
    $(`#${lang}`).addClass("active")
}
</script>

<template>
    <div id="topMenu">
        <div id="languageChoice">
            <img src="../assets/france.svg" id="fr" @click="click('fr')" class="active" />
            <img src="../assets/UK.svg" id="en" @click="click('en')" />
        </div>
    </div>
</template>

<style scoped lang="sass">
#topMenu
    position: fixed
    top:0
    height: $topHeight
    width: 100%
    background-color: gray
    display: flex
    align-items: center
#languageChoice
    width: 100%
    height: 20px
    display: flex
    justify-content: end
    margin-right: 15px

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

