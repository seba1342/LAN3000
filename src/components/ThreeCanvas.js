import React, { Component } from 'react';
import * as THREE from 'three';
import * as OBJLoader from 'three-obj-loader';

OBJLoader(THREE);

class ThreeCanvas extends Component {
  threeCanvas = React.createRef();

  loadingManager;

  modelId;

  object;

  objLoader;

  state = {
    cursorDeltaPositionX: 0,
    cursorDeltaPositionY: 0,
  }

  componentDidMount() {
    this.THREE = THREE;

    //
    // threejs initialisation

    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new this.THREE.Scene();

    this.camera = new this.THREE.PerspectiveCamera(30, 1, 1, 1500);

    this.renderer = new this.THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(width, height);

    this.threeCanvas.current.appendChild(this.renderer.domElement);

    //
    // global loaders

    this.loadingManager = new this.THREE.LoadingManager();
    this.objLoader = new this.THREE.OBJLoader();

    //
    // texture loader

    this.camera.position.z = 200;

    this.loadObjectWithMeshBasicMaterial(width, height);

    //
    // listeners

    document.addEventListener('mousemove', (event) => {
      this.setState({
        cursorDeltaPositionX: -(0.5 - event.pageX / window.innerWidth),
        cursorDeltaPositionY: -(
          0.5 -
          (event.pageY - window.pageYOffset) / window.innerHeight
        ),
      });
    }, false);


  }

  componentWillUnmount() {
    this.stop();

    this.threeCanvas.current.removeChild(this.renderer.domElement);
  }

  //
  // loaders

  loadObjectWithMeshBasicMaterial = () => {
    const textureLoader = new this.THREE.TextureLoader(this.loadingManager);

    textureLoader.load(`webgl${this.props.bookName}.jpg`, texture => {
      texture.mapping = this.THREE.SphericalReflectionMapping;

      const material = new this.THREE.MeshBasicMaterial({ envMap: texture });

      this.objLoader.load('webgl/model.obj', object => {
        this.object = object;

        this.object.traverse(node => {
          if (node.isMesh && material) {
            node.material = material;
          }
        });

        this.scene.add(this.object);

        this.start();
      });
    });
  };

  //
  // rendering

  animate = () => {
    if (!this.object) {
      return;
    }

    if(this.state.cursorDeltaPositionX && this.state.cursorDeltaPositionY){
      this.object.rotation.x += this.state.cursorDeltaPositionX * 0.025;
      this.object.rotation.y += this.state.cursorDeltaPositionY * 0.025;
    } else {
      this.object.rotation.x += 0.0025;
      this.object.rotation.y += 0.0025;
    }
    this.object.rotation.z += 0.0025;

    this.renderScene();

    this.frameId = window.requestAnimationFrame(this.animate);
  };

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };

  stop = () => {
    cancelAnimationFrame(this.frameId);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        ref={this.threeCanvas}
        className={`three-canvas ${this.props.className}`}
      ></div>
    );
  }
}

//

export default ThreeCanvas;
