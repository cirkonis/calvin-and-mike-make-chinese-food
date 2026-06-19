import { u as useCheckboxes, a as useAsyncData, g as gamePlan, _ as __nuxt_component_0 } from './asyncData-DduKAYyv.mjs';
import { defineComponent, withAsyncContext, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
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
  __name: "gameplan",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({ title: "Game Plan" });
    const { load, state } = useCheckboxes();
    [__temp, __restore] = withAsyncContext(() => useAsyncData("checkboxes", () => load(), { server: false })), await __temp, __restore();
    const allKeys = gamePlan.flatMap((p) => p.steps.map((s) => s.key));
    const checkedCount = computed(() => allKeys.filter((k) => state.value[k]).length);
    const total = allKeys.length;
    const openPhases = ref(/* @__PURE__ */ new Set(["pre-prep"]));
    function phaseCheckedCount(phase) {
      return phase.steps.filter((s) => state.value[s.key]).length;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CheckItem = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "mx-auto max-w-2xl px-4 py-6 flex flex-col gap-6" }, _attrs))}><div class="flex items-end justify-between gap-4"><div><h1 class="text-2xl font-black tracking-tight">📋 Game Plan Mode</h1><p class="text-muted-foreground text-sm mt-0.5">Who does what, and when — tap to check off</p></div><div class="shrink-0 text-right"><div class="${ssrRenderClass([unref(checkedCount) === unref(total) ? "text-green-600" : "text-primary", "text-2xl font-black tabular-nums"])}">${ssrInterpolate(unref(checkedCount))}<span class="text-muted-foreground font-normal text-lg">/${ssrInterpolate(unref(total))}</span></div><div class="text-xs text-muted-foreground">steps done</div></div></div><div class="flex gap-3 text-xs flex-wrap"><span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-blue-100 border border-blue-200 inline-block"></span><span class="text-muted-foreground">Mike</span></span><span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-amber-100 border border-amber-200 inline-block"></span><span class="text-muted-foreground">Calvin</span></span><span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-purple-100 border border-purple-200 inline-block"></span><span class="text-muted-foreground">Both</span></span></div><div class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(gamePlan), (phase) => {
        _push(`<div class="border border-border rounded-xl overflow-hidden bg-card"><button type="button" class="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-accent/40 transition-colors"><div class="min-w-0"><div class="font-semibold text-foreground leading-snug">${ssrInterpolate(phase.title)}</div>`);
        if (phase.subtitle) {
          _push(`<div class="text-xs text-muted-foreground mt-0.5">${ssrInterpolate(phase.subtitle)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="flex items-center gap-2 shrink-0"><span class="text-xs tabular-nums text-muted-foreground">${ssrInterpolate(phaseCheckedCount(phase))}/${ssrInterpolate(phase.steps.length)}</span><svg class="${ssrRenderClass([unref(openPhases).has(phase.id) && "rotate-180", "size-4 text-muted-foreground transition-transform"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg></div></button>`);
        if (unref(openPhases).has(phase.id)) {
          _push(`<div class="border-t border-border divide-y divide-border/60"><!--[-->`);
          ssrRenderList(phase.steps, (step) => {
            _push(ssrRenderComponent(_component_CheckItem, {
              key: step.key,
              "cb-key": step.key,
              label: step.task,
              note: step.note,
              who: step.who,
              "recipe-link": step.recipeLink
            }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gameplan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gameplan-BFA_rVgT.mjs.map
