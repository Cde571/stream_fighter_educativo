import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_CZOmkcE0.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"}],"routeData":{"route":"/app","isIndex":false,"type":"page","pattern":"^\\/App\\/?$","segments":[[{"content":"App","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/App.astro","pathname":"/App","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ZtjYfubq.js"}],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"},{"type":"external","src":"/_astro/Inicio.CBJulblr.css"},{"type":"inline","content":".company-link[data-astro-cid-ey7maxor]{position:relative;display:flex;align-items:center;justify-content:center;transition:transform .3s ease}.company-logo[data-astro-cid-ey7maxor]{width:150px;height:100px;transition:transform .3s ease}.company-link[data-astro-cid-ey7maxor]:hover .company-logo[data-astro-cid-ey7maxor],.company-link[data-astro-cid-ey7maxor]:hover{transform:scale(1.1)}\n"}],"routeData":{"route":"/inicio","isIndex":false,"type":"page","pattern":"^\\/Inicio\\/?$","segments":[[{"content":"Inicio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Inicio.astro","pathname":"/Inicio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.querySelectorAll(\".card\");s.forEach(e=>{e.addEventListener(\"mouseenter\",()=>{const t=e.getAttribute(\"data-pair\");s.forEach(a=>{a.getAttribute(\"data-pair\")!==t?a.classList.add(\"blur\"):a.classList.add(\"highlight\")})}),e.addEventListener(\"mouseleave\",()=>{s.forEach(t=>{t.classList.remove(\"blur\"),t.classList.remove(\"highlight\")})}),e.addEventListener(\"click\",()=>{e.classList.toggle(\"flipped\")})})});\n"}],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"},{"type":"inline","content":".overlay[data-astro-cid-ut4koup4]{position:fixed;inset:0;z-index:10000;display:none;pointer-events:auto}.overlay-content[data-astro-cid-ut4koup4]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#000c;padding:20px;border-radius:10px;color:#fff}.overlay-image[data-astro-cid-ut4koup4]{max-width:100%;max-height:100%;border-radius:10px}.overlay-text[data-astro-cid-ut4koup4]{margin-top:10px}.hidden[data-astro-cid-ut4koup4]{display:none}.cards-container[data-astro-cid-ut4koup4]{display:flex;flex-direction:column;align-items:center;margin:20px 0}.row[data-astro-cid-ut4koup4]{display:flex;justify-content:center;margin:10px 0}.card[data-astro-cid-ut4koup4]{width:280px;height:330px;perspective:1000px;margin:5px}.card-inner[data-astro-cid-ut4koup4]{width:100%;height:100%;position:top;transition:transform .6s;transform-style:preserve-3d;border-radius:10px;box-shadow:0 4px 8px #0003}.card[data-astro-cid-ut4koup4].flipped .card-inner[data-astro-cid-ut4koup4]{transform:rotateY(180deg)}.card-front[data-astro-cid-ut4koup4],.card-back[data-astro-cid-ut4koup4]{width:100%;height:100%;background-size:cover;position:absolute;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:10px;font-family:Arial,sans-serif;color:#fff}.card-front[data-astro-cid-ut4koup4]{background-color:#333;display:flex;align-items:center;justify-content:center}.card-front[data-astro-cid-ut4koup4] img[data-astro-cid-ut4koup4]{max-width:100%;max-height:100%;border-radius:10px}.card-back[data-astro-cid-ut4koup4]{background-color:#444;transform:rotateY(180deg)}.highlight[data-astro-cid-ut4koup4]{border:1px solid rgb(255,255,255);box-shadow:0 0 10px 2px #ffffffb3}.blur[data-astro-cid-ut4koup4]{filter:blur(4px);opacity:.5}.vs-overlay[data-astro-cid-ut4koup4]{position:center;text-shadow:#333333;text-align:center;font-family:RoadRage,sans-serif;transform:translate(-50%,-50%);font-size:24px;color:#07f;border:#333333;text-shadow:2px 2px 4px rgba(0,0,0,.5);box-shadow:0 0 10px 2px #000000b3}\n"},{"type":"external","src":"/_astro/Inicio.CBJulblr.css"}],"routeData":{"route":"/peleadores","isIndex":false,"type":"page","pattern":"^\\/Peleadores\\/?$","segments":[[{"content":"Peleadores","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Peleadores.astro","pathname":"/Peleadores","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"document.addEventListener(\"DOMContentLoaded\",()=>{const l=document.querySelectorAll(\".pronostico\"),c=document.querySelectorAll(\".card\");let s=null,i={};l.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.getAttribute(\"data-pair\");t?(d(t),e.classList.toggle(\"selected\"),s=e,l.forEach(a=>{a!==e&&a.classList.contains(\"black-and-white\")&&a.classList.remove(\"black-and-white\")}),s&&s.classList.add(\"black-and-white\")):console.error(\"El atributo data-pair no está definido para el pronóstico.\")})}),c.forEach(e=>{e.addEventListener(\"click\",()=>{if(s){const t=s.getAttribute(\"data-pair\"),a=e.getAttribute(\"data-pair\");t===a&&t?(e.classList.contains(\"flipped\")?(e.classList.remove(\"flipped\"),e.classList.remove(\"selected-card\"),i[t]=null,t!==null&&s.classList.remove(\"black-and-white\")):(e.classList.add(\"flipped\"),e.classList.add(\"selected-card\"),i[t]=e,s.classList.add(\"black-and-white\")),console.log(i)):alert(\"Solo puedes seleccionar una tarjeta por pelea.\")}else alert(\"Primero selecciona un pronóstico.\")})});function d(e){c.forEach(t=>{t.classList.add(\"hidden\"),t.getAttribute(\"data-pair\")===e&&t.classList.remove(\"hidden\")})}});\n"}],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"},{"type":"inline","content":".pronosticos[data-astro-cid-pik4phmx] ul[data-astro-cid-pik4phmx]{margin-top:10px;padding:0}.pronosticos[data-astro-cid-pik4phmx] li[data-astro-cid-pik4phmx]{cursor:pointer;margin-bottom:5px}.pronosticos[data-astro-cid-pik4phmx] li[data-astro-cid-pik4phmx].selected{text-decoration:line-through;color:#999}.card[data-astro-cid-pik4phmx]{width:350px;height:400px;perspective:1000px;margin:6px}.card-inner[data-astro-cid-pik4phmx]{width:200px;height:300px;position:relative;transition:transform .6s;transform-style:preserve-3d;border-radius:10px;box-shadow:0 4px 8px #0003}.card[data-astro-cid-pik4phmx].flipped .card-inner[data-astro-cid-pik4phmx]{transform:rotateY(180deg)}.card-front[data-astro-cid-pik4phmx],.card-back[data-astro-cid-pik4phmx]{width:100%;height:100%;background-size:cover;background-repeat:no-repeat;position:absolute;backface-visibility:hidden;display:flex;align-items:center;justify-content:center;border-radius:10px;font-family:RoadRage,sans-serif;color:#fff}.card-front[data-astro-cid-pik4phmx]:hover{opacity:.3;border:1px solid #fff}.card-front[data-astro-cid-pik4phmx] img[data-astro-cid-pik4phmx]{max-width:100%;max-height:100%;border-radius:10px}.card-back[data-astro-cid-pik4phmx]{background-color:#444;transform:rotateY(180deg)}.card[data-astro-cid-pik4phmx].selected-card{filter:grayscale(100%)}.hidden[data-astro-cid-pik4phmx]{display:none}\n"},{"type":"external","src":"/_astro/Inicio.CBJulblr.css"}],"routeData":{"route":"/pronosticos","isIndex":false,"type":"page","pattern":"^\\/Pronosticos\\/?$","segments":[[{"content":"Pronosticos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/Pronosticos.astro","pathname":"/Pronosticos","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"},{"type":"external","src":"/_astro/Inicio.CBJulblr.css"}],"routeData":{"route":"/redessociales","isIndex":false,"type":"page","pattern":"^\\/RedesSociales\\/?$","segments":[[{"content":"RedesSociales","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/RedesSociales.astro","pathname":"/RedesSociales","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.ZtjYfubq.js"}],"styles":[{"type":"external","src":"/_astro/App.3zxYHkH8.css"},{"type":"external","src":"/_astro/Inicio.CBJulblr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Cristian/stream_fighter_educativo/src/pages/Inicio.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cristian/stream_fighter_educativo/src/pages/Peleadores.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cristian/stream_fighter_educativo/src/pages/Pronosticos.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cristian/stream_fighter_educativo/src/pages/RedesSociales.astro",{"propagation":"none","containsHead":true}],["C:/Users/Cristian/stream_fighter_educativo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","/src/pages/App.astro":"chunks/pages/App_CR_q0laD.mjs","/src/pages/Peleadores.astro":"chunks/pages/Peleadores_VqqT4JD9.mjs","/src/pages/Pronosticos.astro":"chunks/pages/Pronosticos_DErNr1uQ.mjs","/src/pages/RedesSociales.astro":"chunks/pages/RedesSociales_XBGsPLan.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_c8mt79Sa.mjs","/src/pages/index.astro":"chunks/pages/index_D2uE_sYe.mjs","\u0000@astrojs-manifest":"manifest_BDYmEfai.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_vxAOOn05.mjs","\u0000@astro-page:src/pages/App@_@astro":"chunks/App_Bo1b6tDo.mjs","\u0000@astro-page:src/pages/Inicio@_@astro":"chunks/Inicio_lIJxKtlK.mjs","\u0000@astro-page:src/pages/Peleadores@_@astro":"chunks/Peleadores_dNyo9z5F.mjs","\u0000@astro-page:src/pages/Pronosticos@_@astro":"chunks/Pronosticos_B5AufNLx.mjs","\u0000@astro-page:src/pages/RedesSociales@_@astro":"chunks/RedesSociales_qLJ4zvOj.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BvtOJuHy.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DDthpmA2.js","@astrojs/preact/client.js":"_astro/client.BQ9En5Uh.js","/astro/hoisted.js?q=1":"_astro/hoisted.DDTyploq.js","/astro/hoisted.js?q=2":"_astro/hoisted.ZtjYfubq.js","C:/Users/Cristian/stream_fighter_educativo/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.DDMDEOx5.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/onest-latin-wght-normal.DJzCSW5i.woff2","/_astro/onest-latin-ext-wght-normal.0BME-IPC.woff2","/_astro/onest-cyrillic-wght-normal.CiQTuMoU.woff2","/_astro/App.3zxYHkH8.css","/_astro/Inicio.CBJulblr.css","/favicon.svg","/Group 2.png","/instagram-1-svgrepo-com.svg","/instagram.svg","/KICK.svg","/ruido.png","/Spoon.webp","/STF1 (1).jpg","/STF1 (1).svg","/STF1 (2).jpg","/STF1 (3).jpg","/STF1 (4).jpg","/StrF (2).png","/StrF (2).svg","/StrF.png","/Untitled.png","/Untitledintro.svg","/Video.mp4","/W.png","/nameboxers/ALANA.png","/nameboxers/BIGMIKE.png","/nameboxers/CHANTY.png","/nameboxers/ELGOMEZ.png","/nameboxers/ganador.png","/nameboxers/HERCULES.png","/nameboxers/JH.png","/nameboxers/KRISR.png","/nameboxers/LEANDRO.png","/nameboxers/MAV.png","/nameboxers/MIDIOSTEPAGUE.png","/nameboxers/REBOLL.png","/img/INCICIO.jpg","/img/PELEA1.jpg","/img/PELEA2.jpg","/img/PELEA3.jpg","/img/PELEA4.jpg","/img/PELEA5.jpg","/img/PELEA6.jpg","/img/peleador1.png","/img/peleador11.png","/img/peleador2.png","/img/peleador22.png","/img/peleador3.png","/img/peleador33.png","/img/peleador4.png","/img/peleador44.png","/img/peleador5.png","/img/peleador55.png","/img/peleador6.png","/img/peleador66.png","/img/PRE.jpg","/img/preventa.jpg","/img/ruido.png","/sponsors/LogoDG.png","/sponsors/LogoEverlast.png","/sponsors/LogoMacarena.png","/sponsors/LogoSayco.png","/sponsors/logostage.png","/sponsors/LogoTTW.png","/_astro/client.BQ9En5Uh.js","/_astro/client.DPkdA99d.js","/_astro/hoisted.ZtjYfubq.js","/_astro/signals.module.DDMDEOx5.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
