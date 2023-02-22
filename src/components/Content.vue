<script setup lang="ts">
import { connect } from 'http2';
import { dict } from '../ts/languages';
import Icon3D from './Icon3D.vue';
let content = dict.projects
defineProps<{ lang: string }>()
</script>

<template>
    <div id="content">
        <div class="projectType" v-for="(projectType, key, indexType) in content" :id="key">
            <div :class="['project', (index + indexType * 3)%2==0?'project-reverse':''] " v-for="(project, projectKey, index) of projectType" :id="(projectKey as string)">
                <div class="projectDescription" :id="projectKey + 'Description'"
                    v-html="project[lang as 'fr' || 'en']">
                </div>
                <div class="icon3d" :id="projectKey + 'Icon'">
                    <Icon3D :id="projectKey"></Icon3D>
                        <!-- <p>TODO image {{ projectKey }}</p> -->
                </div>
            </div>
            <hr v-if="indexType != Object.keys(content).length -1">
        </div>

    </div>
</template>

<style scoped lang="sass">
#content
    width: 100%
    // background-color: red
    max-width: 70vw
    height: auto
.projectType
    margin: 5%
.project
    display: flex
    flex-direction: row
    min-height: 30vh
    margin-bottom: 25px
.project-reverse
    flex-direction: row-reverse
.icon3d
    flex-grow: 1
    flex-shrink: 0
    flex-basis: 200px
    // background-color: red
    // height: 100%
    // width: auto
    min-width: 20vw
.projectDescription
    flex-grow: 2
</style>