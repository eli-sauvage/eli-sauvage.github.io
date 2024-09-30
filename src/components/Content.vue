<script setup lang="ts">
import { ref } from "vue";
import { dict, langName } from "../ts/languages";
import Icon3D from "./Icon3D.vue";

defineProps<{ lang: langName }>();
const content = ref(dict.projects);
</script>

<template>
    <p>{{ lang }}</p>
    <div id="content">
        <div :class="['projectType', 'scroll' + indexType]" v-for="(projectType, key, indexType) in content" :id="key">
            <h1>{{ dict.sideMenu[key][lang] }}</h1>
            <div :class="[
                'project',
                (index + indexType * 3) % 2 == 0 ? 'project-reverse' : '',
            ]" v-for="(project, projectKey, index) of projectType" :id="projectKey as string">
                <div>
                    <h3>
                        {{ project.title[lang] }}
                        {{ project.link ? "[" : "" }}
                        <a v-if="project.link" :href="project.link" target="_blank">
                            {{ dict.general.seeCode[lang] }}
                        </a>
                        {{ project.link ? "]" : "" }}
                    </h3>
                    <div class="projectDescription" :id="projectKey + 'Description'"
                        v-html="project.description[lang]" />
                </div>
                <div :class="['icon3d', project.link ? 'selectionable' : '']" :id="projectKey + 'Icon'">
                    <Icon3D :id="projectKey"></Icon3D>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="sass">
// @media (max-width: 1200px)
//     width: 100%
@media (min-width: 1200px)
    #content
        max-width: 70vw
        padding-right: 10%

#content
    width: 100%
    height: auto
    right: 0
    position: absolute
@media (max-width: 1200px)
    .projectType
        margin-bottom: 40vh
    .projectType:last-child
        margin-bottom: 20vh
@media (min-width: 1200px)
    .projectType:not(:last-child)
        margin-bottom: 20vh
.projectType
    margin-right: 5%
    margin-left: 5%
.project
    display: flex
    flex-direction: row
    min-height: 30vh
    margin-bottom: 25px
@media (max-width: 1200px)
    .project
        flex-direction: column-reverse
        text-align: justify
    .project-reverse
        flex-direction: column-reverse
@media (min-width: 1200px)
    .project-reverse
        flex-direction: row-reverse
.icon3d
    flex-grow: 1
    flex-shrink: 0
    flex-basis: 200px
    min-width: 20vw
.icon3d.selectionable
    cursor: pointer
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
