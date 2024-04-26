import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
        import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js';

        function main() {
          const canvas = document.querySelector('#c');
          const renderer = new THREE.WebGLRenderer({canvas});
          renderer.autoClearColor = false;
        
          const fov = 75;
          const aspect = 2;  // the canvas default
          const near = 0.1;
          const far = 100;
          const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
          camera.position.z = 7; //카메라 위치 조정
        
          const scene = new THREE.Scene();
        
          {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(-1, 2, 4);
            scene.add(light);
          }
        
          const loader = new GLTFLoader();
          loader.load('cultivator.glb', (gltf) => {
            const model = gltf.scene;
            scene.add(model);
          });
        
          function resizeRendererToDisplaySize(renderer) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
              renderer.setSize(width, height, false);
              camera.aspect = width / height;
              camera.updateProjectionMatrix();
            }
            return needResize;
          }
        
          function render(time) {
            time *= 0.001;
        
            if (resizeRendererToDisplaySize(renderer)) {
              const canvas = renderer.domElement;
              camera.aspect = canvas.clientWidth / canvas.clientHeight;
              camera.updateProjectionMatrix();
            }
        
            renderer.render(scene, camera);
        
            requestAnimationFrame(render);
          }
        
          requestAnimationFrame(render);
        }
        
        main();