<script setup lang="ts">
import Content from './components/Content.vue';
import HelloWorld from './components/HelloWorld.vue'
import SideMenu from './components/SideMenu.vue';
import TopMenu from './components/TopMenu.vue'
import { ref } from 'vue'

let lang = ref("fr")
function changeLanguage(language:"fr"|"en"){
  lang.value=language
  console.log("p " + lang)
}
</script>

<template>
  <TopMenu @changeLanguage="changeLanguage"/>
  <div id="global">
    <SideMenu :lang="lang"/>
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