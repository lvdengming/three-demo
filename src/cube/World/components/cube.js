/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 12:13:41
 */
import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from 'three';

/** 创建材料 */
function createMaterial() {
  const loader = new TextureLoader();
  const texture = loader.load('/assets/textures/uv-test-bw.png');
  const material = new MeshStandardMaterial({
    map: texture,
  });

  return material;
}

/** 创建立方体 */
export function createCube() {
  const geometry = new BoxGeometry(1, 1, 1);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  // 设置初始旋转弧度
  cube.rotation.set(2, 2, 2);
  // 设置每秒旋转的弧度
  const radiansPerSecond = MathUtils.degToRad(30);
  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
    cube.rotation.z += radiansPerSecond * delta;
  };

  return cube;
}
