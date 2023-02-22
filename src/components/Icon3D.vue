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
    scene.background = new THREE.Color("white")
    const element = document.querySelector("#container" + props.id) as HTMLElement
    const camera = new THREE.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);
    var raycaster = new THREE.Raycaster();
    var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1);
    var intersectPoint = new THREE.Vector3();

    const light = new THREE.AmbientLight(0xffffff); // soft white light
    scene.add(light);



    const renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(element.offsetWidth, element.offsetHeight);
    element.appendChild(renderer.domElement);
    const mouse = new THREE.Vector2();
    element.addEventListener("mousemove", onMouseMove)
    element.addEventListener("mouseenter", ()=> {
        mouseInside = true
        targetScale = 0.015
    })
    element.addEventListener("mouseleave", () => {
        mouseInside = false
        targetScale = 0.01
    })


    function onMouseMove(event: MouseEvent) {
        if(!mouseInside) return
        mouse.x = ((event.offsetX / element.offsetWidth) * 2 - 1) / 2;
        mouse.y = (-(event.offsetY / element.offsetHeight) * 2 + 1) / 2;
        raycaster.setFromCamera(mouse, camera);
        raycaster.ray.intersectPlane(plane, intersectPoint);
        model.lookAt(intersectPoint);

    }
    // const controls = new OrbitControls(camera, renderer.domElement);


    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    let model: THREE.Group

    const fbxLoader = new FBXLoader()
    fbxLoader.load(
        '/discord.fbx',
        (object) => {
            model = object
            object.scale.setScalar(.01)
            targetScale = .01
            object.rotation.y = Math.random() * Math.PI * 2
            object.position.set(0,0,0)
            scene.add(object)
        },
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
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