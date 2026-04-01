/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:43:31
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 12:11:57
 */
import { OrbitControls } from '/vendor/three/examples/jsm/controls/OrbitControls.js';

export function createOrbitControls(canvas, camera) {
  const controls = new OrbitControls(camera, canvas);

  // 添加阻尼效果
  controls.enableDamping = true;
  // 禁止改变相机中心
  controls.enablePan = false;
  // 开启自动旋转
  controls.autoRotate = true;
  // 设置自动旋转速度
  controls.autoRotateSpeed = 1;
  // 启用键盘控制
  controls.listenToKeyEvents(window);
  // 限制放大和缩小的距离
  controls.minDistance = 5;
  controls.maxDistance = 20;

  controls.tick = () => controls.update();

  return controls;
}
