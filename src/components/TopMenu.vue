<script setup lang="ts">
import { watch } from "vue";
import lang from "./SideMenu.vue"
defineEmits(['changeLanguage'])
console.log(lang)
</script>

<template>
    <div id="topMenu">
        <div id="languageChoice">
            <button id="fr" @click="$emit('changeLanguage', 'fr')">fr</button>
            <button id="en" @click="$emit('changeLanguage', 'en')">en</button>
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
</style>

