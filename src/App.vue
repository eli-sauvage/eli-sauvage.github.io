<script setup lang="ts">
import Content from './components/Content.vue';
import HelloWorld from './components/HelloWorld.vue'
import SideMenu from './components/SideMenu.vue';
import languages from './components/languages.vue';
import WelcomePage from './components/WelcomePage.vue'
import { Ref, ref, VueElement } from 'vue'
import { langName } from "./ts/languages"

let lang= ref("fr") as Ref<langName>
function changeLanguage(language: "fr" | "en") {
  lang.value = language
  console.log("p " + lang)
}
</script>

<template>
  <languages :lang="lang" @changeLanguage="changeLanguage"></languages>
  <WelcomePage :lang="lang"/>
  <div id="global">
    <SideMenu :lang="lang" />
    <Content :lang="lang"/>
  </div>
</template>

<style scoped lang="sass">
@media (max-width: 850px)
    #sideMenu
      display: none
#global
    display: flex
</style>