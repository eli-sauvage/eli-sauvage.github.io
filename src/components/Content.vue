<script setup lang="ts">
import { connect } from 'http2';
import { dict, langName } from '../ts/languages';
import Icon3D from './Icon3D.vue';
let content = dict.projects
defineProps<{ lang: langName }>()
</script>

<template>
    <div id="content">
        <div :class="['projectType',  'scroll' + indexType]" v-for="(projectType, key, indexType) in content" :id="key">
            <h1>{{ dict.sideMenu[key][lang]}}</h1>
            <div :class="['project', (index + indexType * 3)%2==0?'project-reverse':'']" v-for="(project, projectKey, index) of projectType" :id="(projectKey as string)">
                <div class="projectDescription" :id="projectKey + 'Description'"
                    v-html="project.description[lang]">
                </div>
                <div class="icon3d" :id="projectKey + 'Icon'">
                    <Icon3D :id="projectKey"></Icon3D>
                </div>
            </div>
            <!-- <hr v-if="indexType != Object.keys(content).length -1" :id="'br' + (indexType +1).toString()"> -->
        </div>

    </div>
</template>

<style scoped lang="sass">
#content
    width: 100%
    // background-color: red
    max-width: 70vw
    height: auto
    padding-right: 10%
    // margin:0 auto
    right: 0
    position: absolute
.projectType:not(:last-child)
    margin: 5%
    margin-bottom: 20vh
.project
    display: flex
    flex-direction: row
    min-height: 30vh
    margin-bottom: 25px
    // background: #555555
    // border-radius: 20px
.project-reverse
    flex-direction: row-reverse
.icon3d
    flex-grow: 1
    flex-shrink: 0
    flex-basis: 200px
    min-width: 20vw
.projectDescription
    flex-grow: 2
    align-items: center
    display: flex

h1
    text-align: center
</style>
<style lang="sass">
span.important
    font-weight: bold

</style>