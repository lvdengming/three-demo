/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-03 22:28:59
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-03 22:34:29
 */
import { Color, Scene } from 'three';

/** 创建场景 */
export function createScene() {
  const scene = new Scene();
  // 设置背景颜色
  scene.background = new Color('skyblue');

  return scene;
}
