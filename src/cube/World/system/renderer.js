/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-03 22:34:44
 */
import { WebGLRenderer } from 'three';

/** 创建渲染器 */
export function createRenderer() {
  const renderer = new WebGLRenderer({
    // 打开抗锯齿
    antialias: true,
  });

  // 打开物理正确的光照
  renderer.physicallyCorrectLights = true;

  return renderer;
}
