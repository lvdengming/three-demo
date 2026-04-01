/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 12:10:58
 */
import { Timer } from 'three';

const timer = new Timer();

/** 动画循环 */
export class Loop {
  #scene;
  #camera;
  #renderer;

  constructor(scene, camera, renderer) {
    this.updatableList = [];
    this.#scene = scene;
    this.#camera = camera;
    this.#renderer = renderer;
  }

  start() {
    this.#renderer.setAnimationLoop(() => {
      this.#tick();
      this.render();
    });
  }

  stop() {
    this.#renderer.setAnimationLoop(null);
  }

  render() {
    this.#renderer.render(this.#scene, this.#camera);
  }

  #tick() {
    timer.update();
    const delta = timer.getDelta();
    for (const obj of this.updatableList) {
      obj.tick(delta);
    }
  }
}
