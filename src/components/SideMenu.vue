<script setup lang="ts">
import { onMounted } from "vue";
import {dict} from "../ts/languages"
import sideAnim from "../ts/sideMenu"
const props = defineProps<{ lang: string }>()
onMounted(sideAnim)
</script>

<template>
    <div id="sideMenu">
        <div v-for="(item, index) in Object.keys(dict.sideMenu)" v-bind:id="item" :class="{ 'currentType': index === 0 }">
            <p>{{ dict.sideMenu[item][lang as "fr" || "en"]}}</p>
        </div>
    </div>
</template>

<style scoped lang="sass">
#sideMenu
    width: $sideWidth
    min-width: 350px
    display: flex
    flex-direction: column
    position: sticky
    height: calc(100vh - $topHeight)
    top: $topHeight

#sideMenu *
    font-size: 32px
    text-align: center
    display: flex
    width: 100%
    justify-content: center
    flex-direction: column
    justify-content: flex-start
    transition: flex-grow .5s
.currentType
    flex-grow: 1
</style>