/* empty css                        */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as addAttribute, f as renderSlot, g as createAstro, h as renderHead } from '../astro_CZOmkcE0.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                           */
/* empty css                           */

const $$Video = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full p-20 max-w-6xl mx-auto"> <h3 class="uppercase mt-32 text-4xl  mx-auto flex flex-col justify-center items-center fond-bold">
Recuerdos de Stream Fighter 2
</h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": "QjTqXiPi75o", "class": "shadow-2xl shadow-white/20" })} </section> `;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Video.astro", void 0);

const $$Astro$1 = createAstro();
const $$BentoItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BentoItem;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`
    ${Astro2.props.class}
    col-span-10 row-span-1
    relative rounded-xl
    backdrop-blur-md
    border border-black/10
    shadow-inner shadow-white/10
    overflow-hidden
    group
    `, "class")}> ${renderSlot($$result, $$slots["image"])} <div class="relative  z-10 bottom-0 top-0 w-full h-full
        bg-gradient-to-b from-transparent via-black/20 to-black/80"><div></div> <div class="select-none flex flex-col gap-1 p-6 text-lg z-20 justify-end h-full"> <h2 class="text-3xl font-semibold text-balance text-white mb-4">${title}</h2> ${subtitle && renderTemplate`<h3 class="text-xl font-semibold text-sky-200/60 -mt-4 mb-4"> ${subtitle} </h3>`} ${renderSlot($$result, $$slots["content"])} </div> </div></article>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/BentoItem.astro", void 0);

const $$Bento = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="w-full text-5xl text-bold mx-96 my-12 mt-4 text-pretty"></h1> </div> <section${addAttribute(`w-full max-w-[1400px]
        grid grid-cols-10 auto-rows-[25rem] gap-4
        mx-auto px-20`, "class")}> ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-1 md:col-span-4", "title": "ROMPIENDO RECORDS", "subtitle": "MAS DE 800K VIEWS" }, { "content": ($$result2) => renderTemplate`<p class="text-pretty"></p>`, "image": ($$result2) => renderTemplate`<div class=" absolute top-0 left-0 w-full 
            h-full group-hover:scale-110 transit-scale duration-1000
            ease-in-out opacity-90 bg-blend-luminosity bg-center bg-cover
            bg-no-repeat  -z-10" style="background-image: url('STF1 (1).jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-6", "title": "LA LEALTAD TE LLEVA AL EXITO", "subtitle": "LOS MEJORES CON LOS MEJORES" }, { "image": ($$result2) => renderTemplate`<div class=" absolute top-0 left-0 w-full 
            h-full group-hover:scale-110 transit-scale duration-1000
            ease-in-out opacity-90 bg-blend-luminosity bg-center bg-cover
            bg-no-repeat  -z-10" style="background-image: url('STF1 (2).jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-6", "title": "MAXIMO EXPONENTE DEL STREAMING EN COLOMBIA", "subtitle": "ADMIRABLE" }, { "image": ($$result2) => renderTemplate`<div class=" absolute top-0 left-0 w-full 
            h-full group-hover:scale-110 transit-scale duration-1000
            ease-in-out opacity-90 bg-blend-luminosity bg-center bg-cover
            bg-no-repeat  -z-10" style="background-image: url('STF1 (4).jpg');"></div>` })} ${renderComponent($$result, "BentoItem", $$BentoItem, { "class": "col-span-10 md:col-span-4", "title": "RECORD DEL DIRECTO MAS VISTO EN LATAM ", "subtitle": "INFLUYENTE" }, { "image": ($$result2) => renderTemplate`<div class=" absolute top-0 left-0 w-full 
            h-full group-hover:scale-110 transit-scale duration-1000
            ease-in-out opacity-90 bg-blend-luminosity bg-center bg-cover
            bg-no-repeat -z-10" style="background-image: url('STF1 (3).jpg');"></div>` })}</section>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Bento.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-cyan-600-950 text-white py-8"> <div class="container mx-auto flex flex-col items-center"> <div class="border-t border-gray-600 w-full mb-4"></div> <div class="flex items-center space-x-6 mb-4"> <a href="https://www.instagram.com/westcol/"> <img src="instagram-1-svgrepo-com.svg" alt="Instagram" class="h-8"> </a> <a href="https://kick.com/westcol"> <img src="/public/KICK.svg" alt="Kickstarter" class="h-11"> </a> </div> <p class="text-sm">&copy; 2024 Todos los derechos reservados</p> </div> </footer>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Footer.astro", void 0);

const $$Intro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full relative p-56 uppercase"> <img class="mx-auto m" src="Group 2.png"> <section class="w-full px-20 max-w-[60ch] mx-auto my-24 text-pretty"> <div class="text-xl text-left"> <h1 id="header-vue" class="text-3xl font-semibold text-wrap mx-auto mb-6 tracking-wide"> <strong class="text-center mx-20 text-4xl">Stream Fighter 3:</strong> <br>El evento de boxeo organizado por el streamer más grande de Colombia, WestCol
</h1> <p>Prepárate para vivir la emoción y la acción en el ring con Stream Fighter 3. <strong>Este evento de boxeo promete ser una experiencia inolvidable</strong>, donde los mejores luchadores se enfrentarán en combates emocionantes.</p> <p>WestCol, el streamer más grande de Colombia, se une como organizador para brindar un espectáculo único lleno de entretenimiento y adrenalina. No te pierdas la oportunidad de presenciar peleas épicas y apoyar a tus luchadores favoritos.</p> <p>Únete a nosotros para una noche llena de emociones, sorpresas y momentos emocionantes. ¡Compra tus boletos ahora y asegura tu lugar en este evento histórico!</p> </div> </section> </div> <div> <section class="w-full p-20 max-w-6xl mx-auto font-semibold"> <h3 class="uppercase mt-32 text-4xl  mx-auto flex flex-col justify-center items-center fond-bold">
Presentacion de Stream Fighter 3
</h3> ${renderComponent($$result, "lite-youtube", "lite-youtube", { "videoid": "1K1eVNJ6jxg", "class": "shadow-2xl shadow-white/20" })} </section>  </div>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Intro.astro", void 0);

const $$PreFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/PreFooter.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header-nav" class="fixed w-screen py-1 z-40 top-0 px-8 lg:px-0 margin-top"> <div class="flex justify-between items-center max-w-7xl mx-auto"> <a href="/" class="flex items-center"> <img src="Group 2.png" alt="Logo Stream Fighter" width="200"> </a> <nav> <ul class="flex gap-4 items-center"> <li> <a id="header-dev" class="nav-link" href="Inicio">INICIO</a> </li> <li> <a id="header-dev" class="nav-link" href="Peleadores">PELEADORES</a> </li> <li> <a id="header-dev" class="nav-link" href="Pronosticos">PRONOSTICOS</a> </li> <li> <a id="header-dev" class="nav-link" href="RedesSociales">REDES SOCIALES</a> </li> </ul> </nav> <a id="header-vip" href="https://kick.com/westcol" target="_blank" class="font-bold shadow border rounded-full inline-block border-white px-4 py-2 justify-self-end hover:bg-sky-600 hover:text-White duration-300">VER EVENTO</a> </div> </header>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/layouts/Layout.astro", void 0);

const $$Numeros = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-full max-w-6xl mx-auto py-20 px-20 grid-cols-3"> <h2 class="text-4xl lg:text-6xl font-extrabold text-center text-balance mb-10 lg:mb-20 ">NUESTROS NUMEROS</h2> <div class="flex gap-10 items-center"> <p> <span class="max-w-6xl py-20 px-80 text-7xl font-bold tabular-nums shadow-xl shadow-slate-100/10 rounded-xl">+800K</span> </p> <p class="text-center text-2xl -mx-80">Espectadores</p> </div> <div class="flex gap-10 items-center"> <p> <span class="max-w-6xl py-20 px-80 text-7xl font-bold tabular-nums">+17M</span> </p> <p class="text-center text-2xl -mx-72">Visualizaciones</p> </div> </section>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Numeros.astro", void 0);

const $$Date = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="stream-fighter" class=" uppercase mt-32  mx-auto flex flex-col justify-center items-center text-pretty"> <h2 class="text-5xl text-primary text-semibold">Boletas STREAM FIGHTER 3 MEDELLÍN - WESTCOL<span aria-hidden class="hidden md:inline mx-1">🔥</span></h2> <p class="text-3xl"><strong>Evento:</strong> STREAM FIGHTER 3 MEDELLÍN - WESTCOL</p> <h3 class="text-3xl "><strong>Lugar:</strong> Centro de Eventos La Macarena, Medellín</h3> <p class="text-3xl mt-1"><strong>Fecha:</strong> Domingo, 20 de octubre de 2024</p> <p class="text-4xl"><strong>Hora:</strong> 5:00 PM UTC -5</p> <div class="text-2xl text-pretty mx-auto text-center mt-4">
Compra tus boletas para el evento<br> STREAM FIGHTER 3 MEDELLÍN - WESTCOL en el Centro de Eventos<br> La Macarena en Medellín desde la comodidad<br> de tu hogar en Taquillalive. Consulta los precios y más detalles en el siguiente enlace:
</div> <a class="text-4xl mt-5 mx-auto font-bold shadow border rounded-full inline-block border-white px-4 py-2 justify-self-end hover:bg-sky-600 hover:text-white duration-300" target="_blank" href="https://www.taquillalive.com/performance-details/?artist=westcol&event=TCL.EVN542.PRF1">
Compra boletas
</a> </section>`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/components/Date.astro", void 0);

const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stream Fighter 3 | P\xE1gina educativa", "data-astro-cid-ey7maxor": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-32 md:mt-40 " data-astro-cid-ey7maxor> <h3 class="font-RoadRage text-center text-white text-5xl font-bold mb-4" data-astro-cid-ey7maxor>Patrocinadores</h3> <p class="text-center text-neutral mt-4" data-astro-cid-ey7maxor>Gracias a la colaboración de...</p> <div class="mt-12 grid grid-cols-3 gap-8" data-astro-cid-ey7maxor> ${[
    {
      id: "dgeventos",
      name: "DG Eventos",
      url: "https://dgeventos.com/",
      image: {
        name: "LogoDG",
        width: 150,
        height: 100
      }
    },
    {
      id: "everlast",
      name: "Everlast",
      url: "https://www.everlast.com/",
      image: {
        name: "LogoEverlast",
        width: 150,
        height: 100
      }
    },
    {
      id: "lamacarenamed",
      name: "La Macarena Medell\xEDn",
      url: "https://www.instagram.com/lamacarenamed/",
      image: {
        name: "LogoMacarena",
        width: 150,
        height: 100
      }
    },
    {
      id: "sayco",
      name: "SAYCO",
      url: "http://sayco.org/",
      image: {
        name: "LogoSayco",
        width: 150,
        height: 100
      }
    },
    {
      id: "stageeventos",
      name: "Stage Eventos",
      url: "https://stageeventos.com.co/eventos/",
      image: {
        name: "Logostage",
        width: 150,
        height: 100
      }
    },
    {
      id: "ttw",
      name: "TTW",
      url: "https://ttw.com/",
      image: {
        name: "LogoTTW",
        width: 150,
        height: 100
      }
    }
  ].map(({ id, name, url, image }) => renderTemplate`<a${addAttribute(id, "id")} class="company-link flex items-center justify-center"${addAttribute(`Visita la p\xE1gina del patrocinador ${name}`, "title")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`Link con el logo de ${name} que lleva a ${url}`, "aria-label")} data-astro-cid-ey7maxor> <img${addAttribute(`/public/sponsors/${image.name}.png`, "src")}${addAttribute(image.width, "width")} loading="lazy"${addAttribute(image.height, "height")} fetchpriority="low"${addAttribute(`Logo de ${name}`, "alt")} class="company-logo" data-astro-cid-ey7maxor> </a>`)} </div> </section>  ` })}`;
}, "C:/Users/Cristian/stream_fighter_educativo/src/sections/Sponsors.astro", void 0);

const $$Inicio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stream Fighter 3 | Pagina educativa" })} ${renderComponent($$result, "Intro", $$Intro, {})} ${renderComponent($$result, "Date", $$Date, {})} ${maybeRenderHead()}<main> ${renderComponent($$result, "Sponsors", $$Sponsors, {})} ${renderComponent($$result, "Video", $$Video, {})} ${renderComponent($$result, "Bento", $$Bento, {})} ${renderComponent($$result, "Numeros", $$Numeros, {})} ${renderComponent($$result, "PreFooter", $$PreFooter, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} `;
}, "C:/Users/Cristian/stream_fighter_educativo/src/pages/Inicio.astro", void 0);

const $$file = "C:/Users/Cristian/stream_fighter_educativo/src/pages/Inicio.astro";
const $$url = "/Inicio";

const Inicio = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Inicio,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Inicio as I, $$Intro as a, $$Date as b, $$Video as c, $$Bento as d, $$Numeros as e, $$PreFooter as f, $$Footer as g };
