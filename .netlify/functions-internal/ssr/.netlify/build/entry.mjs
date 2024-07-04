import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BDYmEfai.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_vxAOOn05.mjs');
const _page1 = () => import('./chunks/App_Bo1b6tDo.mjs');
const _page2 = () => import('./chunks/Inicio_lIJxKtlK.mjs');
const _page3 = () => import('./chunks/Peleadores_dNyo9z5F.mjs');
const _page4 = () => import('./chunks/Pronosticos_B5AufNLx.mjs');
const _page5 = () => import('./chunks/RedesSociales_qLJ4zvOj.mjs');
const _page6 = () => import('./chunks/index_BvtOJuHy.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/App.astro", _page1],
    ["src/pages/Inicio.astro", _page2],
    ["src/pages/Peleadores.astro", _page3],
    ["src/pages/Pronosticos.astro", _page4],
    ["src/pages/RedesSociales.astro", _page5],
    ["src/pages/index.astro", _page6]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "6b599354-3a93-462c-82ef-4f1c6b34df2e"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
