/*
 * Project: js
 * File: /app.js
 * File Created: 2025-07-25, 13:09:50
 * Author: Wojciech Sobczak (wsobczak@gmail.com)
 * -----
 * Last Modified: 2025-07-25, 13:10:05
 * Modified By: Wojciech Sobczak (wsobczak@gmail.com)
 * -----
 * Copyright © 2021 - 2025 by vbert
 */
const header = document.querySelector('header');
const topBar = document.querySelector('.top-bar');
const middleBar = document.querySelector('.middle-bar');
const bottomBar = document.querySelector('.bottom-bar');

// wysokość header
const headerHeight = header.getBoundingClientRect().height;
console.log('Header height:', headerHeight);

// wysokość poszczególnych barów
const topBarHeight = topBar ? topBar.getBoundingClientRect().height : 0;
const middleBarHeight = middleBar ? middleBar.getBoundingClientRect().height : 0;
const bottomBarHeight = bottomBar ? bottomBar.getBoundingClientRect().height : 0;

console.log('Top bar height:', topBarHeight);
console.log('Middle bar height:', middleBarHeight);
console.log('Bottom bar height:', bottomBarHeight);
