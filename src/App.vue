<script setup lang="ts">
import Content from "./components/Content.vue";
import HelloWorld from "./components/HelloWorld.vue";
import SideMenu from "./components/SideMenu.vue";
import languages from "./components/languages.vue";
import WelcomePage from "./components/WelcomePage.vue";
import { Ref, ref, VueElement } from "vue";
import { langName } from "./ts/languages";
import CV from "./components/CV.vue";

let query = new URLSearchParams(window.location.search);
let lang: Ref<langName> = ref("fr");
if (query.get("lang") == "en") {
    changeLanguage("en");
} else {
    changeLanguage("fr");
}
function changeLanguage(language: "fr" | "en") {
    let url = new URL(window.location.toString());
    let query = new URLSearchParams(url.search);
    query.set("lang", language);
    url.search = query.toString();
    window.history.replaceState({}, "", url);

    lang.value = language;
}
</script>

<template>
    <languages :lang="lang" @changeLanguage="changeLanguage"></languages>
    <CV :lang="lang" />
    <WelcomePage :lang="lang" />
    <div id="global">
        <SideMenu :lang="lang" />
        <Content :lang="lang" />
    </div>
</template>

<style scoped lang="sass">
@media (max-width: 1200px)
    #sideMenu
      display: none
#global
    display: flex
</style>
<style></style>
