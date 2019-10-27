import React from 'react';
import * as THREE from 'three';

class ThreeJs extends React.Component {
  state = {
    cursorCenterDeltaX: 0, // 0 at center, -0.5/0.5 at edges
    cursorCenterDeltaY: 0, // 0 at center, -0.5/0.5 at edges
    cursorPositionX: 0,
    cursorPositionY: 0,
    windowWidth: 0,
    windowHeight: 0,
  };

  componentDidMount() {
    this.setup3d();
  }

  componentWillUnmount() {
  }

  setup3d = () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 30, 1, 1, 1500 );
    var renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(200, 200);

    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: this.props.color ? this.props.color : 'lime' } );
    var cube = new THREE.Mesh( geometry, material );


    scene.add( cube );
    camera.position.z = 5;

    var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };

    animate();
  }
  //

  render() {
    return(
      <div className="threejs">
        <div ref={ref => (this.mount = ref)} className="threejs__item" />
      </div>
    );
  }
}

export default ThreeJs;
