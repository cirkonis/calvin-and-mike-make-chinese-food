import { _ as __nuxt_component_0 } from './nuxt-link-B1kaawHq.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Home" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-12 flex flex-col items-center text-center gap-8" }, _attrs))}><div class="flex flex-col items-center gap-4"><h1 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-foreground"> Mike and Calvin Make American Chinese Food Family Style in France </h1><p class="text-4xl tracking-wide select-none"> 👨🏿 👨🏻 🇺🇸 🇨🇳 🍚 👨‍👩‍👧‍👦 🇫🇷 </p><p class="text-muted-foreground text-sm max-w-sm"> Orange Chicken · Beef &amp; Broccoli · Kung Pao Vegetables · Jasmine Rice · Spring Rolls <br> For 8 hungry people in a French kitchen with 4 burners. </p></div><div class="w-full grid gap-3 sm:grid-cols-3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/shopping",
        class: "flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-4xl"${_scopeId}>🛒</span><div${_scopeId}><div class="font-bold text-foreground group-hover:text-primary transition-colors"${_scopeId}>Shopping Mode</div><div class="text-xs text-muted-foreground mt-1"${_scopeId}>Everything you need to buy</div></div>`);
          } else {
            return [
              createVNode("span", { class: "text-4xl" }, "🛒"),
              createVNode("div", null, [
                createVNode("div", { class: "font-bold text-foreground group-hover:text-primary transition-colors" }, "Shopping Mode"),
                createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, "Everything you need to buy")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/gameplan",
        class: "flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-4xl"${_scopeId}>📋</span><div${_scopeId}><div class="font-bold text-foreground group-hover:text-primary transition-colors"${_scopeId}>Game Plan Mode</div><div class="text-xs text-muted-foreground mt-1"${_scopeId}>Who does what, and when</div></div>`);
          } else {
            return [
              createVNode("span", { class: "text-4xl" }, "📋"),
              createVNode("div", null, [
                createVNode("div", { class: "font-bold text-foreground group-hover:text-primary transition-colors" }, "Game Plan Mode"),
                createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, "Who does what, and when")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/recipes",
        class: "flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-4xl"${_scopeId}>📖</span><div${_scopeId}><div class="font-bold text-foreground group-hover:text-primary transition-colors"${_scopeId}>Recipe Mode</div><div class="text-xs text-muted-foreground mt-1"${_scopeId}>Full ingredients and steps</div></div>`);
          } else {
            return [
              createVNode("span", { class: "text-4xl" }, "📖"),
              createVNode("div", null, [
                createVNode("div", { class: "font-bold text-foreground group-hover:text-primary transition-colors" }, "Recipe Mode"),
                createVNode("div", { class: "text-xs text-muted-foreground mt-1" }, "Full ingredients and steps")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-xs text-muted-foreground"> Checkboxes persist across devices — Mike and Calvin see the same state. </div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CKff5GzI.mjs.map
