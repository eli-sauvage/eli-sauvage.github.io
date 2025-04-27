import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import * as THREE from "three";

let canvas: HTMLElement,
    renderer: THREE.WebGLRenderer,
    scenes: THREE.Scene[] = [];

export async function init(projects: string[]) {
    let c = document.getElementById("page-canvas");
    if (c == null) return;
    canvas = c;
    const fbxLoader = new FBXLoader();
    for (let project of projects) {
        fbxLoader.loadAsync;

        let element = document.getElementById(`container${project}`);
        if (element == null) return;
        const scene = new THREE.Scene();
        scene.userData.element = element;
        scene.userData.targetScale = 0.01;
        scene.userData.mouseInside = false;
        scene.userData.phase = (Math.random() - 0.5) * Math.PI * 4;
        scene.userData.speed = 0.001 + Math.random() * 0.0005;

        let object = await fbxLoader.loadAsync("/" + project + ".fbx");
        object.scale.setScalar(0.01);
        object.rotation.y = Math.random() * Math.PI * 2;
        object.position.set(0, 0, 0);
        object.castShadow = true;
        object.receiveShadow = true;
        scene.userData.object = object;
        scene.add(object);

        const camera = new THREE.PerspectiveCamera(
            50,
            element.offsetWidth / element.offsetHeight,
            1,
            10
        );
        camera.position.z = 5;
        scene.userData.camera = camera;

        const Alight = new THREE.AmbientLight(0xffffff, 1.2); // soft white light
        scene.add(Alight);

        scenes.push(scene);

        element.addEventListener("mousemove", (event) =>
            onMouseMove(event.offsetX, event.offsetY)
        );
        element.addEventListener("mouseenter", mouseEnter);
        element.addEventListener("mouseleave", mouseLeave);
        element.addEventListener("touchstart", mouseEnter);
        element.addEventListener("touchend", mouseLeave);
        element.addEventListener("touchmove", (event) =>{
            onMouseMove(event.touches[0].clientX, event.touches[0].clientY)
        });

        function mouseEnter() {
            scene.userData.mouseInside = true;
            scene.userData.targetScale = 0.015;
        }
        function mouseLeave() {
            scene.userData.mouseInside = false;
            scene.userData.targetScale = 0.01;
        }
        function onMouseMove(x: number, y: number) {
            var raycaster = new THREE.Raycaster();
            var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1);
            const mouse = new THREE.Vector2();
            var intersectPoint = new THREE.Vector3();
            if (!scene.userData.mouseInside) return;
            mouse.x = ((x / scene.userData.element.offsetWidth) * 2 - 1) / 2;
            mouse.y = (-(y / scene.userData.element.offsetHeight) * 2 + 1) / 2;
            raycaster.setFromCamera(mouse, camera);
            raycaster.ray.intersectPlane(plane, intersectPoint);
            scene.userData.object.lookAt(intersectPoint);
        }
    }

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setClearColor(0xffffff, 1);
    // renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setAnimationLoop(animate);
}

function updateSize() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    if ((canvas as any).width !== width || (canvas as any).height !== height) {
        renderer.setSize(width, height, false);
    }
}

function animate(tick: number) {
    updateSize();
    canvas.style.transform = `translateY(${window.scrollY}px)`;
    renderer.setClearColor(0xffffff);
    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setClearColor(0xffffff);
    renderer.setScissorTest(true);

    scenes.forEach(function (scene) {
        // so something moves
        if (!scene.userData.mouseInside) {
            scene.userData.object.rotation.x +=
                Math.sin(tick * scene.userData.speed + scene.userData.phase) /
                100;
            scene.userData.object.rotation.y -= 0.01;
        }

        // get the element that is a place holder for where we want to
        // draw the scene
        const element = scene.userData.element;

        // get its position relative to the page's viewport
        const rect = element.getBoundingClientRect();

        // check if it's offscreen. If so skip it
        if (
            rect.bottom < 0 ||
            rect.top > renderer.domElement.clientHeight ||
            rect.right < 0 ||
            rect.left > renderer.domElement.clientWidth
        ) {
            return; // it's off screen
        }

        // set the viewport
        const width = rect.right - rect.left;
        const height = rect.bottom - rect.top;
        const left = rect.left;
        const bottom = renderer.domElement.clientHeight - rect.bottom;

        renderer.setViewport(left, bottom, width, height);
        renderer.setScissor(left, bottom, width, height);

        const camera = scene.userData.camera;

        camera.aspect = width / height; // not changing in this example
        camera.updateProjectionMatrix();

        //scene.userData.controls.update();

        renderer.render(scene, camera);
    });
}
