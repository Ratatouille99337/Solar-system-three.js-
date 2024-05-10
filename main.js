console.clear();
import { Environment, useTexture } from "@react-three/drei";

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/controls/OrbitControls.js";
import { GUI } from "https://cdn.jsdelivr.net/npm/three@0.127.0/examples/jsm/libs/dat.gui.module.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 3600);
camera.position.set(0, 50, 200);

let renderer = new THREE.WebGLRenderer({
  antialias: true,
});
renderer.setSize(innerWidth, innerHeight);

document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

let light = new THREE.PointLight();
scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

// const loader = new THREE.TextureLoader();
// const bgTexture = loader.load("andro.jpg");
// scene.background = bgTexture;

// const loader = new THREE.TextureLoader();
// scene.background = loader.load("http://songnes.com/gift/images/andro.jpg");

// scene.background = new THREE.CubeTextureLoader()
// 	.setPath( 'img/' )
// 	.load( [
// 				'px.jpg',
// 				'nx.jpg',
// 				'py.jpg',
// 				'ny.jpg',
// 				'pz.jpg',
// 				'nz.jpg'
// 			] );

let loader = new THREE.TextureLoader();
    let texture = loader.load('andro.jpg');
    const material = new THREE.MeshPhongMaterial({
        map: texture
    });
    let geomentry = new THREE.BoxGeometry(-3500,3500,3500);
    let cube = new THREE.Mesh(geomentry, material);
    scene.add(cube);


scene.add(
  new THREE.Mesh(
    new THREE.SphereGeometry(10, 32, 32),
    new THREE.MeshBasicMaterial({
      color: 0xffffff7f,
    })
  )
);

let planet = {
  orbitRadius: 20,
};
let planet1 = {
  orbitRadius: 30,
};
let planet2 = {
  orbitRadius: 40,
};
let planet3 = {
  orbitRadius: 50,
};
let planet4 = {
  orbitRadius: 60,
};
let planet5 = {
  orbitRadius: 70,
};
let planet6 = {
  orbitRadius: 80,
};
let planet7 = {
  orbitRadius: 90,
};
let planet8 = {
  orbitRadius: 100,
};
let planet9 = {
  orbitRadius: 4,
};

let pts = new THREE.Path()
  .absarc(0, 0, planet.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g = new THREE.BufferGeometry().setFromPoints(pts);
let m = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit = new THREE.Line(g, m);
orbit.rotation.x = Math.PI / 2; // 30 deg
scene.add(orbit);

let pts1 = new THREE.Path()
  .absarc(0, 0, planet1.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g1 = new THREE.BufferGeometry().setFromPoints(pts1);
let m1 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit1 = new THREE.Line(g1, m1);
orbit1.rotation.x = Math.PI / 2; // 30 deg
scene.add(orbit1);

let pts2 = new THREE.Path()
  .absarc(0, 0, planet2.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);

let g2 = new THREE.BufferGeometry().setFromPoints(pts2);
let m2 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit2 = new THREE.Line(g2, m2);
orbit2.rotation.x = Math.PI / 2; // 30 deg
scene.add(orbit2);

let pts3 = new THREE.Path()
  .absarc(0, 0, planet3.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g3 = new THREE.BufferGeometry().setFromPoints(pts3);
let m3 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit3 = new THREE.Line(g3, m3);
orbit3.rotation.x = Math.PI / 2; // 30 deg
scene.add(orbit3);

let pts4 = new THREE.Path()
  .absarc(0, 0, planet4.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g4 = new THREE.BufferGeometry().setFromPoints(pts4);
let m4 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit4 = new THREE.Line(g4, m4);
orbit4.rotation.x = Math.PI / 2; // 40 deg
scene.add(orbit4);

let pts5 = new THREE.Path()
  .absarc(0, 0, planet5.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g5 = new THREE.BufferGeometry().setFromPoints(pts5);
let m5 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit5 = new THREE.Line(g5, m5);
orbit5.rotation.x = Math.PI / 2; // 50 deg
scene.add(orbit5);

let pts6 = new THREE.Path()
  .absarc(0, 0, planet6.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g6 = new THREE.BufferGeometry().setFromPoints(pts6);
let m6 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit6 = new THREE.Line(g6, m6);
orbit6.rotation.x = Math.PI / 2; // 60 deg
scene.add(orbit6);

let pts7 = new THREE.Path()
  .absarc(0, 0, planet7.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g7 = new THREE.BufferGeometry().setFromPoints(pts7);
let m7 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit7 = new THREE.Line(g7, m7);
orbit7.rotation.x = Math.PI / 2; // 70 deg
scene.add(orbit7);

let pts8 = new THREE.Path()
  .absarc(0, 0, planet8.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g8 = new THREE.BufferGeometry().setFromPoints(pts8);
let m8 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit8 = new THREE.Line(g8, m8);
orbit8.rotation.x = Math.PI / 2; // 80 deg
scene.add(orbit8);

let pts9 = new THREE.Path()
  .absarc(0, 0, planet9.orbitRadius, 0, Math.PI * 2)
  .getPoints(90);
let g9 = new THREE.BufferGeometry().setFromPoints(pts9);
let m9 = new THREE.LineBasicMaterial({
  color: 0xffff00,
  transparent: true,
  opacity: 0.75,
});
let orbit9 = new THREE.Line(g9, m9);
orbit9.rotation.x = Math.PI / 2; // 90 deg
scene.add(orbit9);

let pg = new THREE.SphereGeometry(1, 50, 50);
let pm = new THREE.MeshLambertMaterial({
  color: "aqua",
});

let p = new THREE.Mesh(pg, pm);
p.rotation.order = "ZYX";
orbit.add(p);

let pg1 = new THREE.SphereGeometry(1.3, 50, 50);
let pm1 = new THREE.MeshLambertMaterial({
  color: "blue",
});

let p1 = new THREE.Mesh(pg1, pm1);
p1.rotation.order = "ZYX";
orbit.add(p1);

let pg2 = new THREE.SphereGeometry(2, 50, 50);
let pm2 = new THREE.MeshLambertMaterial({
  color: "green",
});

let p2 = new THREE.Mesh(pg2, pm2);
p1.rotation.order = "ZYX";
orbit.add(p2);

let pg3 = new THREE.SphereGeometry(1.7, 50, 50);
let pm3 = new THREE.MeshLambertMaterial({
  color: "brown",
});

let p3 = new THREE.Mesh(pg3, pm3);
p3.rotation.order = "ZYX";
orbit.add(p3);

let pg4 = new THREE.SphereGeometry(4, 50, 50);
let pm4 = new THREE.MeshLambertMaterial({
  color: "grey",
});

let p4 = new THREE.Mesh(pg4, pm4);
p4.rotation.order = "ZYX";
orbit.add(p4);

let pg5 = new THREE.SphereGeometry(3.5, 50, 50);
let pm5 = new THREE.MeshLambertMaterial({
  color: "darkbrown",
});

let p5 = new THREE.Mesh(pg5, pm5);
p5.rotation.order = "ZYX";
orbit.add(p5);

let pg6 = new THREE.SphereGeometry(3.1, 50, 50);
let pm6 = new THREE.MeshLambertMaterial({
  color: "darkgrey",
});

let p6 = new THREE.Mesh(pg6, pm6);
p6.rotation.order = "ZYX";
orbit.add(p6);

let pg7 = new THREE.SphereGeometry(2.2, 50, 50);
let pm7 = new THREE.MeshLambertMaterial({
  color: "darkgreen",
});

let p7 = new THREE.Mesh(pg7, pm7);
p7.rotation.order = "ZYX";
orbit.add(p7);

let pg8 = new THREE.SphereGeometry(3.5, 50, 50);
let pm8 = new THREE.MeshLambertMaterial({
  color: "#555555",
});

let p8 = new THREE.Mesh(pg8, pm8);
p8.rotation.order = "ZYX";
orbit.add(p8);

let pg9 = new THREE.SphereGeometry(0.4, 50, 50);
let pm9 = new THREE.MeshLambertMaterial({
  color: "aqua",
});

let p9 = new THREE.Mesh(pg9, pm9);
p9.rotation.order = "ZYX";
orbit.add(p9);

let clock = new THREE.Clock();

renderer.setAnimationLoop((_) => {
  let elapsed = clock.getElapsedTime();
  p.position.set(
    Math.sin(elapsed) * planet.orbitRadius,
    Math.cos(elapsed) * planet.orbitRadius,
    0
  );
  p1.position.set(
    Math.sin(elapsed * 0.8) * planet1.orbitRadius,
    Math.cos(elapsed * 0.8) * planet1.orbitRadius,
    0
  );
  p2.position.set(
    Math.sin(elapsed * 0.6) * planet2.orbitRadius,
    Math.cos(elapsed * 0.6) * planet2.orbitRadius,
    0
  );
  p3.position.set(
    Math.sin(elapsed * 0.5) * planet3.orbitRadius,
    Math.cos(elapsed * 0.5) * planet3.orbitRadius,
    0
  );
  p4.position.set(
    Math.sin(elapsed * 0.3) * planet4.orbitRadius,
    Math.cos(elapsed * 0.3) * planet4.orbitRadius,
    0
  );
  p5.position.set(
    Math.sin(elapsed * 0.1) * planet5.orbitRadius,
    Math.cos(elapsed * 0.1) * planet5.orbitRadius,
    0
  );
  p6.position.set(
    Math.sin(elapsed * 0.08) * planet6.orbitRadius,
    Math.cos(elapsed * 0.08) * planet6.orbitRadius,
    0
  );
  p7.position.set(
    Math.sin(elapsed * 0.06) * planet7.orbitRadius,
    Math.cos(elapsed * 0.06) * planet7.orbitRadius,
    0
  );
  p8.position.set(
    Math.sin(elapsed * 0.04) * planet8.orbitRadius,
    Math.cos(elapsed * 0.04) * planet8.orbitRadius,
    0
  );
  p9.position.set(
    Math.sin(elapsed * 12) * planet9.orbitRadius + p2.position.x,
    Math.cos(elapsed * 12) * planet9.orbitRadius + p2.position.y,
    0
  );
  renderer.render(scene, camera);
});
