if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const f=e=>i(e,o),c={module:{uri:o},exports:r,require:f};t[o]=Promise.all(s.map((e=>c[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"bfea89c9af892c9e26f87f82f24c4550"},{url:"main.js",revision:"0dbfc39751fe8720195a38b4817a7841"}],{})}));
