function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var l=r("7Y9D8");const i={formEl:document.querySelector(".form"),delayEl:document.querySelector('input[name="delay"]'),stepEl:document.querySelector('input[name="step"]'),amountEl:document.querySelector('input[name="amount"]')};function u(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.formEl.addEventListener("submit",(function(t){t.preventDefault();let o=Number(i.delayEl.value),n=Number(i.stepEl.value),r=Number(i.amountEl.value),a=0;o-=n;for(let t=0;t<r;t+=1)a=t+1,o+=n,u(a,o).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)}));i.formEl.reset()}));
//# sourceMappingURL=03-promises.c080a550.js.map