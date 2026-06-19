import { u as useCheckboxes, a as useAsyncData, s as shoppingList, _ as __nuxt_component_0 } from './asyncData-DduKAYyv.mjs';
import { defineComponent, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
  __name: "shopping",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Shopping" });
    const { load, state } = useCheckboxes();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("checkboxes", () => load(), { server: false })), await __temp, __restore();
    const allKeys = shoppingList.flatMap((cat) => cat.items.map((i) => i.key));
    const checkedCount = computed(() => allKeys.filter((k) => state.value[k]).length);
    const total = allKeys.length;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckItem = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6" }, _attrs))}><div class="flex items-end justify-between gap-4"><div><h1 class="text-2xl font-black tracking-tight">🛒 Shopping Mode</h1><p class="text-muted-foreground text-sm mt-0.5">Check things off as you grab them</p></div><div class="shrink-0 text-right"><div class="${ssrRenderClass([unref(checkedCount) === unref(total) ? "text-green-600" : "text-primary", "text-2xl font-black tabular-nums"])}">${ssrInterpolate(unref(checkedCount))}<span class="text-muted-foreground font-normal text-lg">/${ssrInterpolate(unref(total))}</span></div><div class="text-xs text-muted-foreground">items got</div></div></div><div class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(shoppingList), (category) => {
        _push(`<div class="border border-border rounded-xl overflow-hidden bg-card"><div class="px-4 py-2.5 bg-secondary/60 border-b border-border"><span class="font-semibold text-sm">${ssrInterpolate(category.title)}</span></div><div class="divide-y divide-border/60"><!--[-->`);
        ssrRenderList(category.items, (item) => {
          _push(ssrRenderComponent(_component_CheckItem, {
            key: item.key,
            "cb-key": item.key,
            label: item.label,
            note: item.note
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shopping.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=shopping-CUpfQIHO.mjs.map
