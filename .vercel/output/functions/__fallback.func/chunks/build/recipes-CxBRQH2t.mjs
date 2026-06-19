import { u as useCheckboxes, a as useAsyncData, r as recipes, _ as __nuxt_component_0 } from './asyncData-DduKAYyv.mjs';
import { defineComponent, withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead, a as useRoute } from './server.mjs';
import './nuxt-link-B1kaawHq.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'lucide-vue-next';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "recipes",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Recipes" });
    const { load } = useCheckboxes();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("checkboxes", () => load(), { server: false })), await __temp, __restore();
    useRoute();
    const openRecipes = ref(/* @__PURE__ */ new Set());
    const openSections = ref(/* @__PURE__ */ new Set());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckItem = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6" }, _attrs))}><div><h1 class="text-2xl font-black tracking-tight">📖 Recipe Mode</h1><p class="text-muted-foreground text-sm mt-0.5"> All five recipes — ingredients and steps. Everything has a checkbox so you can go off-script. </p></div><div class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(recipes), (recipe) => {
        _push(`<div${ssrRenderAttr("id", recipe.id)} class="border border-border rounded-xl overflow-hidden bg-card"><button type="button" class="w-full flex items-center justify-between gap-3 px-4 py-4 text-left hover:bg-accent/40 transition-colors"><div class="flex items-center gap-3"><span class="text-2xl">${ssrInterpolate(recipe.emoji)}</span><span class="font-bold text-lg text-foreground">${ssrInterpolate(recipe.title)}</span></div><svg class="${ssrRenderClass([unref(openRecipes).has(recipe.id) && "rotate-180", "size-5 text-muted-foreground transition-transform shrink-0"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></button>`);
        if (unref(openRecipes).has(recipe.id)) {
          _push(`<div class="border-t border-border flex flex-col divide-y divide-border/60"><!--[-->`);
          ssrRenderList(recipe.sections, (section) => {
            _push(`<div${ssrRenderAttr("id", section.id)}><button type="button" class="w-full flex items-center justify-between gap-2 px-4 py-3 text-left bg-secondary/40 hover:bg-secondary/70 transition-colors"><span class="font-semibold text-sm text-foreground">${ssrInterpolate(section.title)}</span><svg class="${ssrRenderClass([unref(openSections).has(section.id) && "rotate-180", "size-4 text-muted-foreground transition-transform shrink-0"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></button>`);
            if (unref(openSections).has(section.id)) {
              _push(`<div class="divide-y divide-border/40">`);
              if (section.ingredients?.length) {
                _push(`<div class="flex flex-col"><div class="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold bg-background/60"> Ingredients </div><div class="divide-y divide-border/40"><!--[-->`);
                ssrRenderList(section.ingredients, (ing) => {
                  _push(ssrRenderComponent(_component_CheckItem, {
                    key: ing.key,
                    "cb-key": ing.key,
                    label: ing.item
                  }, null, _parent));
                });
                _push(`<!--]--></div></div>`);
              } else {
                _push(`<!---->`);
              }
              if (section.steps?.length) {
                _push(`<div class="flex flex-col"><div class="px-4 py-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold bg-background/60"> Steps </div><div class="divide-y divide-border/40"><!--[-->`);
                ssrRenderList(section.steps, (step, i) => {
                  _push(ssrRenderComponent(_component_CheckItem, {
                    key: step.key,
                    "cb-key": step.key,
                    label: `${i + 1}. ${step.text}`,
                    note: step.note
                  }, null, _parent));
                });
                _push(`<!--]--></div></div>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recipes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recipes-CxBRQH2t.mjs.map
