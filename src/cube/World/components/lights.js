/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 11:52:39
 */
import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

/** 创建灯光 */
export function createLights() {
  // 直射光
  const directionalLight = new DirectionalLight('#fff', 5);
  directionalLight.position.set(10, 10, 10);

  // 环境光
  const ambientLight = new AmbientLight('#fff', 5);
  // 天空与地面光
  const hemisphereLight = new HemisphereLight('#fff', '#ccc', 5);

  return { directionalLight, ambientLight, hemisphereLight };
}
