/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-01 07:44:34
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 12:15:23
 */

import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createOrbitControls } from './system/controls.js';
import { Loop } from './system/loop.js';
import { createRenderer } from './system/renderer.js';
import { Resizer } from './system/resizer.js';

export class World {
  #scene;
  #camera;
  #renderer;
  #loop;

  constructor(container) {
    this.#scene = createScene();
    this.#camera = createCamera();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#scene, this.#camera, this.#renderer);

    // 将渲染器的 DOM 元素添加到页面中
    container.append(this.#renderer.domElement);

    const cube = createCube();
    const { directionalLight, ambientLight, hemisphereLight } = createLights();
    const orbitControls = createOrbitControls(
      this.#renderer.domElement,
      this.#camera,
    );

    this.#scene.add(cube, hemisphereLight);
    // 此处没有添加 cube，只用 orbitControls 更新相机位置达到旋转的效果
    this.#loop.updatableList.push(orbitControls);

    new Resizer(container, this.#camera, this.#renderer);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }

  render() {
    this.#loop.render();
  }
}
