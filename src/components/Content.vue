<script setup lang="ts">
    defineProps<{ lang: string }>()
</script>

<template>
    <div id="content">
        <div class="projectType" id="perso">
            <div class="project" id="helibotProject">
                <div class="3dIcon" id="helibotIcon">
    
                </div>
                <div class="projectDescription" id="helibotDescription">
    
                </div>
            </div>
        </div>
        <div class="projectType" id="ecole">
    
        </div>
        <div class="projectType" id="divers">
    
        </div>
    </div>
</template>

<style scoped lang="sass">
#content
    width: 100%
    background-color: red
    max-width: 70vw
    height: auto
.projectType
    margin: 50px
    height: 1000px
    background-color: green
</style>