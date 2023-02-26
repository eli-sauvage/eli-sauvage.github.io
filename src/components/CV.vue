<script setup lang="ts">
function openCv(){
    window.open("https://eli-sauvage.github.io/CV.pdf", "_blank")
}
</script>

<template>
    <div id="CV" @click="openCv">
        Mon CV
    </div>
</template>

<style scoped lang="sass">
#CV
    position: fixed
    z-index: 999
    background-color: black
    color: white
    padding: 15px
    border-radius: 10px
    cursor: pointer
@media (max-width: 1200px)
    #CV
        left: 20px
        bottom: 20px
@media (min-width: 1200px)
    #CV
        left: 40px
        bottom: 40px
</style>
