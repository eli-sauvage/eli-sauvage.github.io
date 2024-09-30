<script setup lang="ts">
import { onMounted } from "vue";
import { dict, langName } from "../ts/languages";
import sideAnim from "../ts/sideMenu";
defineProps<{ lang: langName }>();
onMounted(sideAnim);
function scrollTo(id: number) {
    document
        .querySelector(".scroll" + id)
        ?.scrollIntoView({ behavior: "smooth" });
}
window.onscroll = function () {
    let sticky = window.innerHeight;
    let sideMenu = document.querySelector("#sideMenu");
    if (window.pageYOffset >= sticky) {
        sideMenu?.classList.add("sticky");
    } else {
        sideMenu?.classList.remove("sticky");
    }
};
</script>

<template>
    <div id="sideMenu">
        <div v-for="(item, index) in Object.keys(dict.sideMenu)" v-bind:id="item" :class="{ currentType: index === 0 }"
            @click="scrollTo(index)">
            <p class="typetext">{{ dict.sideMenu[item][lang] }}</p>
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
    height: 100vh
    bottom: 0
    // background: #cccccc
    padding: 30vh 0

#sideMenu > *
    display: flex
    justify-content: center
    flex-direction: column
    justify-content: flex-start
    transition: flex-grow .5s
p
    justify-content: flex-start
    font-size: 32px
    text-align: left
    margin: 5px 2%
    border-radius: 10px
    // padding-left: 30px
    padding: 5px 0 10px 5px
    margin-left: 20px
    transition: transform 250ms ease

.typetext
    cursor: pointer
.currentType
    flex-grow: 1
.currentType p
    background: #aaaaaa
    transform: translateX(50px)
.sticky
    position: fixed !important
    top: 0
</style>
