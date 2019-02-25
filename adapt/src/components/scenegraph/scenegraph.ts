import { Component, Input, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls} from 'three-orbitcontrols-ts'
import  GLTFLoader from 'three-gltf-loader';
import { Object3D } from 'three';

@Component({
  selector: 'scenegraph',
  template: '<div style="width:100%; height:100%"></div>'
})
export class SceneGraph {

  @Input()
  geometry: string;

  renderer: THREE.Renderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  mesh: THREE.Mesh;
  animating: boolean;
  controls: OrbitControls;

  constructor(private sceneGraphElement: ElementRef) {

  }

  ngAfterViewInit() {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.set( 1, 1, 1  );
    this.controls = new OrbitControls(this.camera);
    this.controls.enabled = true;
    this.controls.enableZoom = true;
    let geometry;
    switch(this.geometry) {
      case 'box': geometry = new THREE.BoxGeometry(500, 500, 500); break;
      case 'cylinder': geometry = new THREE.CylinderGeometry(200, 200, 600); break;
      default:
      case 'sphere': geometry = new THREE.SphereGeometry(400);
    }

    let material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

    //this.mesh = new THREE.Mesh(geometry, material);
    //this.scene.add(this.mesh);
    this.loadModel().then((gltfScene) =>{
      var light = new THREE.AmbientLight( 0x404040 );
      this.scene.add(gltfScene);
      this.scene.add(light);
      this.renderer.render(this.scene, this.camera);
      console.log("rendered");
    }).catch(err => {
      console.log(err);
    });
    this.renderer = new THREE.WebGLRenderer({antialias: true, logarithmicDepthBuffer: true});
    this.sceneGraphElement.nativeElement.childNodes[0].appendChild(this.renderer.domElement);
  }

  loadModel(): Promise<Object3D>{
    return new Promise((resolve, reject) => {
      var loader = new GLTFLoader();
      loader.setResourcePath('assets/models/bedroom/');
      loader.load( 'assets/models/bedroom/scene.gltf', function ( gltf ) {
          console.log(gltf);
          resolve(gltf.scene);
      },
      function ( xhr ) {
        console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
      },
      function ( err ) {
          reject(err);
        }
      );
    });
  }

  startAnimation() {
    let width = this.sceneGraphElement.nativeElement.childNodes[0].clientWidth;
    let height = this.sceneGraphElement.nativeElement.childNodes[0].clientHeight;
    this.renderer.setSize(width, height);
    this.animating = true;
    this.render();
  }

  stopAnimation() {
    this.animating = false;
  }

  render() {
    this.renderer.render(this.scene, this.camera);
    if (this.animating) { requestAnimationFrame(() => {
      this.controls.update();
      this.render()
     }); };
  }

}
