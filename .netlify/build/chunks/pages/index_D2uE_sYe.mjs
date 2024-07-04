/* empty css                        */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro_CZOmkcE0.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout, a as $$Intro, b as $$Date, c as $$Video, d as $$Bento, e as $$Numeros, f as $$PreFooter, g as $$Footer } from './Inicio_CyCQKOWR.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Stream Fighter 3 | Pagina educativa" })} ${renderComponent($$result, "Intro", $$Intro, {})} ${renderComponent($$result, "Date", $$Date, {})} ${maybeRenderHead()}<main> ${renderComponent($$result, "Video", $$Video, {})} ${renderComponent($$result, "Bento", $$Bento, {})} ${renderComponent($$result, "Numeros", $$Numeros, {})} ${renderComponent($$result, "PreFooter", $$PreFooter, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} `;
}, "C:/Users/Cristian/stream_fighter_educativo/src/pages/index.astro", void 0);

const $$file = "C:/Users/Cristian/stream_fighter_educativo/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
