/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 11:49:16
 */
import { PerspectiveCamera } from 'three';

/** 创建相机 */
export function createCamera() {
  const camera = new PerspectiveCamera(
    // fov，视野角度，Field of View
    35,
    // aspect，宽高比，Aspect Ratio
    1,
    // near，近裁剪面，Near Clipping Plane
    0.1,
    // far，远裁剪面，Far Clipping Plane
    200,
  );

  camera.position.set(5, 5, 5);

  return camera;
}
