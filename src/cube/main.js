/*
 * @Author: lvdengming@foxmail.com
 * @Date: 2026-04-01 07:40:02
 * @LastEditors: lvdengming@foxmail.com
 * @LastEditTime: 2026-04-04 07:40:24
 */

import { World } from './World/index.js';

async function main() {
  const container = document.getElementById('scene-container');
  const world = new World(container);

  world.start();
}

main().catch(console.error);
