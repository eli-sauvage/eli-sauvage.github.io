<script setup lang="ts">
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { onMounted } from "vue";
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer
let props = defineProps<{ id: string | number }>()
let mouseInside = false
let targetScale:number


function init() {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#555555")
    const element = document.querySelector("#container" + props.id) as HTMLElement
    const camera = new THREE.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);
    var raycaster = new THREE.Raycaster();
    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1);
    var intersectPoint = new THREE.Vector3();


    const Alight = new THREE.AmbientLight(0xffffff, 1.2); // soft white light
    scene.add(Alight);

    const renderer = new THREE.WebGLRenderer({antialias:true, alpha: true});
    renderer.setSize(element.offsetWidth, element.offsetHeight);
    renderer.setClearColor(0x000000, 0);

    // const controls = new OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);

    function onWindowResize() {

        camera.aspect = element.offsetWidth / element.offsetHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(element.offsetWidth, element.offsetHeight);

    }

    element.appendChild(renderer.domElement);
    const mouse = new THREE.Vector2();
    element.addEventListener("mousemove", (event)=>onMouseMove(event.offsetX, event.offsetY))
    element.addEventListener("mouseenter", mouseEnter)
    element.addEventListener("mouseleave", mouseLeave)
    element.addEventListener("touchstart", mouseEnter)
    element.addEventListener("touchend", mouseLeave)
    element.addEventListener("touchmove", (event)=>onMouseMove(event.touches[0].clientX, event.touches[0].clientY ))

    function mouseEnter(){
        mouseInside = true
        targetScale = 0.015
    }
    function mouseLeave(){
        mouseInside = false
        targetScale = 0.01
    }
    function onMouseMove(x:number, y:number) {
        if(!mouseInside) return
        mouse.x = ((x / element.offsetWidth) * 2 - 1) / 2;
        mouse.y = (-(y / element.offsetHeight) * 2 + 1) / 2;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, intersectPoint);
        model.lookAt(intersectPoint);
    }
    
    let model: THREE.Group

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        '/' + props.id + '.fbx',
        (object) => {
            model = object
            object.scale.setScalar(.01)
            targetScale = .01
            object.rotation.y = Math.random() * Math.PI * 2
            object.position.set(0,0,0)
            scene.add(object)
            object.castShadow=true
            object.receiveShadow = true
        },
        (xhr) => {
            // console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
        (error) => {
            console.log(error)
        }
    )

    camera.position.z = 5;
    const phase =  (Math.random() - .5) * Math.PI * 4
    const speed = 0.001 + Math.random()*.0005


    function animate(tick: number) {
        if (model && !mouseInside) {
            model.rotation.x +=  Math.sin(tick * speed + phase) / 100
            model.rotation.y -= .01
        }
        // if(model && props.id == "helibot")
        //     console.log(model.scale.x)
        
        if(model)
            model.scale.setScalar(model.scale.x + 0.1 * (targetScale - model.scale.x))
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
    };

    animate(0);
}




onMounted(init)
</script>

<template>
    <div :id="'container' + props.id" class="container3d">

    </div>
</template>

<style scoped lang="sass">
.container3d
    width: auto
    height: 300px
</style>