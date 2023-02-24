<script setup lang="ts">
import $ from "jquery"
import { dict, langName } from "../ts/languages"
const props = defineProps<{ lang: langName }>()
function scrollToContent(){
    $("#global")[0].scrollIntoView({behavior:"smooth"})
}
</script>

<template>
    <div id="welcomePage">
        <p id="nom">Eli SAUVAGE</p>
        <p id="sujet">{{dict.welcomePage.sujet[lang]}}</p>
        <p id="ecole">{{ dict.welcomePage.ecole[lang] }}</p>
        <div id="projets">
            <p>{{ dict.welcomePage.projets[lang] }}</p>
            <img src="../assets/arrow.svg" id="en" @click="scrollToContent()" />
        </div>
    </div>
</template>

<style scoped lang="sass">
*
    user-select: none
    color: white
#welcomePage
    display: inline-block
    width: 100vw
    height: 100vh
    background-color: #222222
p
    text-align: center
#nom
    font-size: 100px
    margin-top: 5%
#sujet
    font-size: 40px
    margin-top: 20px

#ecole
    font-size: 30px
    margin-top: 20px
#projets
    position: absolute
    bottom: 50px
    left: 50vw
    transform: translateX(-50%)

#projets p
    font-size: 35px
img
    width: 100px
    transform: rotate(90deg)
    margin: 0 auto
    display: block
    animation: bounce 1s ease infinite alternate 



img:hover
    animation: zoom 250ms ease forwards


@keyframes bounce 
    from 
        transform: scale(.5) rotate(90deg)
    to 
        transform: scale(1) rotate(90deg)
@keyframes zoom
    to
        transform: scale(1.5) rotate(90deg)
</style>
