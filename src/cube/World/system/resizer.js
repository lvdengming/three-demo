/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-04 07:47:45
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 11:58:55
 */

export class Resizer {
  constructor(container, camera, renderer) {
    this.#setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      this.onResize();
      this.#setSize(container, camera, renderer);
    });
  }

  onResize() {}

  #setSize(container, camera, renderer) {
    // 横纵比
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  }
}
