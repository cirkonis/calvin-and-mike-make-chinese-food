import { _ as __nuxt_component_0$1 } from './nuxt-link-B1kaawHq.mjs';
import { toRef, isRef, computed, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, toValue, onServerPrefetch, ref, nextTick } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { Check } from 'lucide-vue-next';
import { b as useNuxtApp, c as asyncDataDefaults, d as createError } from './server.mjs';
import { debounce } from 'perfect-debounce';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (init) {
    nuxtApp._state[key] ??= { _default: init };
  }
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useCheckboxes() {
  const state = useState("checkboxes", () => ({}));
  const loaded = useState("checkboxes:loaded", () => false);
  async function load() {
    if (loaded.value) return;
    try {
      const data = await $fetch("/api/checkboxes");
      state.value = data;
    } catch {
    }
    loaded.value = true;
  }
  async function toggle(key) {
    const next = !state.value[key];
    state.value = { ...state.value, [key]: next };
    try {
      await $fetch("/api/checkboxes", { method: "PUT", body: { key, checked: next } });
    } catch {
      state.value = { ...state.value, [key]: !next };
    }
  }
  function isChecked(key) {
    return computed(() => state.value[key] ?? false);
  }
  return { state, load, toggle, isChecked };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CheckItem",
  __ssrInlineRender: true,
  props: {
    cbKey: {},
    label: {},
    note: {},
    who: {},
    recipeLink: {},
    emphasis: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const { isChecked } = useCheckboxes();
    const checked = isChecked(props.cbKey);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-start gap-3 px-4 py-3 hover:bg-accent/40 transition-colors group" }, _attrs))}><button type="button" class="${ssrRenderClass([unref(checked).value ? "bg-primary border-primary" : "border-border bg-background", "mt-0.5 shrink-0 size-6 rounded border-2 flex items-center justify-center transition-colors cursor-pointer"])}"${ssrRenderAttr("aria-label", `Toggle: ${__props.label}`)}>`);
      if (unref(checked).value) {
        _push(ssrRenderComponent(unref(Check), { class: "size-3.5 text-primary-foreground" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</button><div class="min-w-0 flex-1 pt-0.5"><div class="flex items-center gap-2 flex-wrap"><span class="${ssrRenderClass([[
        unref(checked).value ? "line-through text-muted-foreground" : "text-foreground",
        __props.emphasis && !unref(checked).value ? "font-semibold" : ""
      ], "text-sm leading-snug"])}">${ssrInterpolate(__props.label)}</span>`);
      if (__props.who) {
        _push(`<span class="${ssrRenderClass([{
          "bg-blue-100 text-blue-700": __props.who === "Mike",
          "bg-amber-100 text-amber-700": __props.who === "Calvin",
          "bg-purple-100 text-purple-700": __props.who === "Both"
        }, "shrink-0 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"])}">${ssrInterpolate(__props.who)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (__props.note) {
        _push(`<p class="text-xs text-muted-foreground mt-1 leading-snug">${ssrInterpolate(__props.note)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.recipeLink) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          href: __props.recipeLink.href,
          class: "inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` → ${ssrInterpolate(__props.recipeLink.label)}`);
            } else {
              return [
                createTextVNode(" → " + toDisplayString(__props.recipeLink.label), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main, { __name: "CheckItem" });
const shoppingList = [
  {
    title: "🥩 Meat",
    items: [
      { key: "shop:meat:chicken", label: "1.5 kg chicken thighs (boneless, skinless)" },
      { key: "shop:meat:beef", label: "1.0 kg flank steak or sirloin" }
    ]
  },
  {
    title: "🥦 Produce",
    items: [
      { key: "shop:veg:broccoli", label: "800g–1kg broccoli" },
      { key: "shop:veg:peppers", label: "4 bell peppers" },
      { key: "shop:veg:onions", label: "2 onions" },
      { key: "shop:veg:zucchini", label: "2 zucchini" },
      { key: "shop:veg:oranges", label: "2 oranges (for zest; juice is bottled)" },
      { key: "shop:veg:ginger", label: "1 large knob of ginger" },
      { key: "shop:veg:garlic", label: "2 heads of garlic" }
    ]
  },
  {
    title: "🥚 Eggs",
    items: [
      { key: "shop:eggs", label: "2 eggs", note: "Chicken marinade needs 1; grab a spare" }
    ]
  },
  {
    title: "🏺 Dry Goods",
    items: [
      { key: "shop:dry:rice", label: "900g jasmine rice" },
      { key: "shop:dry:peanuts", label: "150g peanuts (roasted, unsalted)" },
      { key: "shop:dry:cornstarch", label: "Cornstarch — big bag (~500g)", note: "Used for coating + slurries across all dishes" },
      { key: "shop:dry:flour", label: "Plain flour (~300g)" },
      { key: "shop:dry:baking-powder", label: "Baking powder (small; only 1 tsp needed)" },
      { key: "shop:dry:sugar", label: "Sugar (~200g)", note: "Orange chicken + Kung Pao both need it" },
      { key: "shop:dry:dried-chilies", label: "Dried red chilies (Kung Pao)" },
      { key: "shop:dry:msg", label: "MSG — buy it, use it, never apologize" }
    ]
  },
  {
    title: "🫙 Sauces & Condiments",
    items: [
      { key: "shop:sauce:soy", label: "Soy sauce — big bottle (~1L)", note: "Used in literally every dish" },
      { key: "shop:sauce:dark-soy", label: "Dark soy sauce (small bottle, ~150ml)" },
      { key: "shop:sauce:oyster", label: "Oyster sauce (Beef & Broccoli)" },
      { key: "shop:sauce:rice-vinegar", label: "Rice vinegar (~250ml)" },
      { key: "shop:sauce:sesame-oil", label: "Sesame oil (small bottle, goes a long way)" },
      { key: "shop:sauce:oj", label: "Bottled orange juice (~500ml)" }
    ]
  },
  {
    title: "🧊 Frozen",
    items: [
      { key: "shop:frozen:spring-rolls", label: "24 frozen spring rolls" }
    ]
  },
  {
    title: "🛢️ Misc",
    items: [
      { key: "shop:misc:oil", label: "Neutral frying oil — large bottle (~2L)", note: "Deep frying the chicken chews through oil fast" }
    ]
  }
];
const gamePlan = [
  {
    id: "pre-prep",
    title: "🍳 Pre-Prep",
    subtitle: "Can be done the night before or morning of dinner",
    steps: [
      {
        key: "gp:pre:sauce-orange",
        who: "Mike",
        task: "Make orange chicken sauce",
        note: "OJ + zest + soy + vinegar + sugar + garlic + ginger + MSG. Stir, refrigerate.",
        recipeLink: { label: "Orange Chicken → Sauce", href: "/recipes#orange-chicken-sauce" }
      },
      {
        key: "gp:pre:sauce-beef",
        who: "Calvin",
        task: "Make beef & broccoli sauce",
        note: "Soy + oyster + dark soy + garlic + ginger + sesame oil + MSG. Refrigerate.",
        recipeLink: { label: "Beef & Broccoli → Sauce", href: "/recipes#beef-broccoli-sauce" }
      },
      {
        key: "gp:pre:sauce-kungpao",
        who: "Mike",
        task: "Make kung pao sauce",
        note: "Soy + rice vinegar + sugar + garlic + ginger + chilies + MSG. Refrigerate.",
        recipeLink: { label: "Kung Pao → Sauce", href: "/recipes#kung-pao-sauce" }
      },
      {
        key: "gp:pre:dry-coating",
        who: "Calvin",
        task: "Mix dry coating for the chicken",
        note: "250g cornstarch + 150g flour + 1 tsp baking powder. Cover and set aside."
      },
      {
        key: "gp:pre:label-sauces",
        who: "Both",
        task: "Label all sauce containers",
        note: "Orange / Beef / Kung Pao — you want to grab and dump, not guess and sniff."
      }
    ]
  },
  {
    id: "3-4-hours",
    title: "⏰ 3–4 Hours Before",
    subtitle: "All the chopping — this is the bulk of the labor",
    steps: [
      { key: "gp:3h:cube-chicken", who: "Mike", task: "Cube chicken into ~3cm bite-size pieces" },
      { key: "gp:3h:slice-beef", who: "Calvin", task: "Slice beef THINLY against the grain (~3mm slices)" },
      { key: "gp:3h:broccoli", who: "Mike", task: "Cut broccoli into florets" },
      { key: "gp:3h:peppers", who: "Calvin", task: "Cut bell peppers into large chunks (~4cm)" },
      { key: "gp:3h:onions", who: "Mike", task: "Cut onions into large chunks" },
      { key: "gp:3h:zucchini", who: "Calvin", task: "Cut zucchini into large chunks" }
    ]
  },
  {
    id: "2-hours",
    title: "⏰ 2 Hours Before",
    subtitle: "Marinating — 30 min minimum for both, more is fine",
    steps: [
      {
        key: "gp:2h:marinate-chicken",
        who: "Mike",
        task: "Marinate chicken: salt + soy sauce + egg, mix well",
        recipeLink: { label: "Orange Chicken → Marinade", href: "/recipes#orange-chicken-marinade" }
      },
      {
        key: "gp:2h:marinate-beef",
        who: "Calvin",
        task: "Marinate beef: soy sauce + cornstarch + oil, mix well",
        recipeLink: { label: "Beef & Broccoli → Marinade", href: "/recipes#beef-broccoli-marinade" }
      }
    ]
  },
  {
    id: "90-min",
    title: "⏰ 90 Minutes Before",
    subtitle: "Frying time — do ALL the chicken now, not later",
    steps: [
      { key: "gp:90:heat-oil", who: "Mike", task: "Heat neutral oil to 175°C / 350°F in a large deep pot" },
      { key: "gp:90:coat-chicken", who: "Mike", task: "Toss marinated chicken in dry coating until well covered, shake off excess" },
      {
        key: "gp:90:fry-chicken",
        who: "Mike",
        task: "Fry ALL the chicken in batches — 6–8 min per batch until golden",
        note: "Do NOT crowd the pot. Golden brown = done. Not some — ALL OF IT."
      },
      {
        key: "gp:90:tray-chicken",
        who: "Mike",
        task: "Place fried chicken on sheet trays UNCOVERED",
        note: "Uncovered = stays crispy. Covered = steam = soggy. Do not cover."
      }
    ]
  },
  {
    id: "60-min",
    title: "⏰ 60 Minutes Before",
    subtitle: "Rice goes on — then you leave it completely alone",
    steps: [
      { key: "gp:60:rinse-rice", who: "Calvin", task: "Rinse 900g jasmine rice until water runs clear (2–3 rinses)" },
      {
        key: "gp:60:start-rice",
        who: "Calvin",
        task: "Add rice + 1.1L water to a pot, bring to boil, then lowest heat, lid on, 18 min",
        note: "DO NOT open the lid. The steam is cooking the rice. Touch it and you ruin it.",
        recipeLink: { label: "Rice → full instructions", href: "/recipes#rice-main" }
      },
      {
        key: "gp:60:rice-rest",
        who: "Calvin",
        task: "After 18 min: off the heat, keep lid on, let steam 5 more min, then fluff",
        note: "Treat it like a sleeping dragon."
      }
    ]
  },
  {
    id: "35-min",
    title: "⏰ 35 Minutes Before Serving",
    subtitle: "Four burners, go!",
    steps: [
      {
        key: "gp:35:blanch-broccoli",
        who: "Calvin",
        task: "Stove 1 — Blanch broccoli in boiling salted water, exactly 3 minutes, drain",
        note: "Bright green, tender-crisp. More than 3 min = mushy."
      },
      {
        key: "gp:35:stir-fry-beef",
        who: "Mike",
        task: "Stove 2 — Stir fry beef in batches over HIGH heat, remove when just cooked",
        note: "Don't crowd the pan or it steams instead of sears."
      },
      {
        key: "gp:35:preheat-oven",
        who: "Both",
        task: "Stove 3 (Oven) — Preheat to 200°C / 400°F for spring rolls"
      },
      {
        key: "gp:35:beer",
        who: "Both",
        task: "Stove 4 — Open beer. Quality control."
      }
    ]
  },
  {
    id: "25-min",
    title: "⏰ 25 Minutes Before Serving",
    steps: [
      {
        key: "gp:25:beef-broccoli",
        who: "Calvin",
        task: "Combine beef + broccoli + beef sauce in pan, heat through until glossy"
      },
      {
        key: "gp:25:beef-dish",
        who: "Calvin",
        task: "Move Beef & Broccoli to serving dish"
      }
    ]
  },
  {
    id: "20-min",
    title: "⏰ 20 Minutes Before Serving",
    steps: [
      {
        key: "gp:20:spring-rolls",
        who: "Calvin",
        task: "Spring rolls into the oven! (15–20 min, flip halfway at the 10-min mark)",
        note: "⚠️ Start them NOW — they take 15-20 min. Starting at 10 min means undercooked rolls."
      },
      {
        key: "gp:20:kung-pao-veg",
        who: "Mike",
        task: "Stir fry kung pao vegetables: peppers first (2 min), then onions (2 min), then zucchini (1 min)"
      },
      {
        key: "gp:20:kung-pao-sauce",
        who: "Mike",
        task: "Add kung pao sauce + peanuts, toss everything together"
      },
      {
        key: "gp:20:kung-pao-dish",
        who: "Mike",
        task: "Move Kung Pao Vegetables to serving dish"
      }
    ]
  },
  {
    id: "10-min",
    title: "⏰ 10 Minutes Before Serving",
    steps: [
      {
        key: "gp:10:flip-rolls",
        who: "Calvin",
        task: "Flip spring rolls in oven"
      },
      {
        key: "gp:10:recrisp-chicken",
        who: "Calvin",
        task: "Chicken tray into oven to re-crisp (5–8 min)",
        note: "Goal is reheating and re-crisping — not cooking. It cooked at 90 min."
      }
    ]
  },
  {
    id: "5-min",
    title: "⏰ Final 5 Minutes",
    subtitle: "Orange chicken is last and timing is everything",
    steps: [
      { key: "gp:5:pull-rolls", who: "Calvin", task: "Pull golden spring rolls out of oven to serving plate" },
      { key: "gp:5:pull-chicken", who: "Calvin", task: "Pull chicken out of oven, stand by" },
      { key: "gp:5:heat-sauce", who: "Mike", task: "Orange chicken sauce into a large skillet, bring to a boil" },
      {
        key: "gp:5:thicken",
        who: "Mike",
        task: "Stir in cornstarch slurry (1 tbsp cornstarch + 2 tbsp cold water) — cook until glossy"
      },
      { key: "gp:5:add-chicken", who: "Mike", task: "Add ALL the fried chicken, toss quickly until fully coated" },
      {
        key: "gp:5:serve",
        who: "Both",
        task: "🚨 IMMEDIATELY dump into serving dish — then call everyone to the table",
        note: "Every minute it sits in the sauce is a minute of crunch you lose. Do not let it sit."
      }
    ]
  }
];
const recipes = [
  {
    id: "orange-chicken",
    title: "Orange Chicken",
    emoji: "🍊🍗",
    sections: [
      {
        id: "orange-chicken-marinade",
        title: "Chicken Marinade",
        ingredients: [
          { key: "r:oc:m:chicken", item: "1.5 kg boneless skinless chicken thighs" },
          { key: "r:oc:m:salt", item: "1 tsp salt" },
          { key: "r:oc:m:soy", item: "1 tbsp soy sauce" },
          { key: "r:oc:m:egg", item: "1 egg" }
        ],
        steps: [
          { key: "r:oc:m:s1", text: "Cut chicken into ~3cm bite-size cubes." },
          { key: "r:oc:m:s2", text: "Combine chicken with salt, soy sauce, and egg. Mix well." },
          { key: "r:oc:m:s3", text: "Let sit 30 minutes minimum." }
        ]
      },
      {
        id: "orange-chicken-coating",
        title: "Coating",
        ingredients: [
          { key: "r:oc:c:cornstarch", item: "250g cornstarch" },
          { key: "r:oc:c:flour", item: "150g plain flour" },
          { key: "r:oc:c:baking-powder", item: "1 tsp baking powder" }
        ],
        steps: [
          { key: "r:oc:c:s1", text: "Combine cornstarch, flour, and baking powder in a large bowl." },
          { key: "r:oc:c:s2", text: "Toss marinated chicken in the coating until fully covered." },
          { key: "r:oc:c:s3", text: "Shake off excess before dropping in the oil." }
        ]
      },
      {
        id: "orange-chicken-frying",
        title: "Frying",
        steps: [
          { key: "r:oc:f:s1", text: "Heat neutral oil in a large deep pot to 175°C / 350°F." },
          { key: "r:oc:f:s2", text: "Fry chicken in batches — do NOT crowd. 6–8 minutes per batch until golden brown." },
          { key: "r:oc:f:s3", text: "Remove to sheet trays and leave UNCOVERED. Covering it steams = soggy." },
          { key: "r:oc:f:s4", text: "Do ALL the chicken at 90 min — it will be re-crisped in the oven at the end." }
        ]
      },
      {
        id: "orange-chicken-sauce",
        title: "Sauce",
        ingredients: [
          { key: "r:oc:s:oj", item: "350ml orange juice" },
          { key: "r:oc:s:zest", item: "Zest of 2 oranges" },
          { key: "r:oc:s:soy", item: "100ml soy sauce" },
          { key: "r:oc:s:vinegar", item: "75ml rice vinegar" },
          { key: "r:oc:s:sugar", item: "100g sugar" },
          { key: "r:oc:s:garlic", item: "4 garlic cloves, minced" },
          { key: "r:oc:s:ginger", item: "1 tbsp fresh ginger, grated" },
          { key: "r:oc:s:msg", item: "1 tsp MSG" },
          { key: "r:oc:s:slurry", item: "Cornstarch slurry: 1 tbsp cornstarch + 2 tbsp cold water, mixed" }
        ],
        steps: [
          { key: "r:oc:s:s1", text: "Combine all sauce ingredients (except slurry). Stir until sugar dissolves. Refrigerate until needed." },
          { key: "r:oc:s:s2", text: "When ready to serve: pour sauce into a large skillet over medium-high heat." },
          { key: "r:oc:s:s3", text: "Bring to a boil. Stir in cornstarch slurry and cook until thickened and glossy (~1–2 min)." },
          { key: "r:oc:s:s4", text: "Add ALL the fried chicken, toss quickly until coated." },
          {
            key: "r:oc:s:s5",
            text: "🚨 SERVE IMMEDIATELY. Every minute in the sauce = less crunch.",
            note: "This is the most time-sensitive step of the night. Do not start the sauce until everything else is on the table."
          }
        ]
      }
    ]
  },
  {
    id: "beef-broccoli",
    title: "Beef & Broccoli",
    emoji: "🥩🥦",
    sections: [
      {
        id: "beef-broccoli-marinade",
        title: "Beef Marinade",
        ingredients: [
          { key: "r:bb:m:beef", item: "1 kg flank steak or sirloin" },
          { key: "r:bb:m:soy", item: "2 tbsp soy sauce" },
          { key: "r:bb:m:cornstarch", item: "1 tbsp cornstarch" },
          { key: "r:bb:m:oil", item: "1 tbsp neutral oil" }
        ],
        steps: [
          { key: "r:bb:m:s1", text: "Slice beef THINLY against the grain — about 3mm slices. This is critical for tenderness." },
          { key: "r:bb:m:s2", text: "Combine with soy sauce, cornstarch, and oil. Mix until the cornstarch is absorbed." },
          { key: "r:bb:m:s3", text: "Marinate 30 minutes minimum." }
        ]
      },
      {
        id: "beef-broccoli-sauce",
        title: "Sauce",
        ingredients: [
          { key: "r:bb:s:soy", item: "150ml soy sauce" },
          { key: "r:bb:s:oyster", item: "60ml oyster sauce" },
          { key: "r:bb:s:dark-soy", item: "30ml dark soy sauce" },
          { key: "r:bb:s:garlic", item: "3 garlic cloves, minced" },
          { key: "r:bb:s:ginger", item: "1 tbsp fresh ginger, grated" },
          { key: "r:bb:s:sesame", item: "1 tsp sesame oil" },
          { key: "r:bb:s:msg", item: "1 tsp MSG" },
          { key: "r:bb:s:slurry", item: "Cornstarch slurry to thicken at the end" }
        ],
        steps: [
          { key: "r:bb:s:s1", text: "Combine all ingredients. Stir well. Can be made ahead and refrigerated." }
        ]
      },
      {
        id: "beef-broccoli-cooking",
        title: "Cooking",
        ingredients: [
          { key: "r:bb:cook:broccoli", item: "800g–1kg broccoli, cut into florets" }
        ],
        steps: [
          { key: "r:bb:cook:s1", text: "Blanch broccoli in boiling salted water for exactly 3 minutes. Drain immediately." },
          { key: "r:bb:cook:s2", text: "Stir fry beef in batches over HIGH heat. Do not crowd the pan — it will steam instead of sear. Remove when just done." },
          { key: "r:bb:cook:s3", text: "Pour sauce into the pan, bring to a boil, add slurry, stir until thickened." },
          { key: "r:bb:cook:s4", text: "Return beef and broccoli, toss to coat, move to serving dish." }
        ]
      }
    ]
  },
  {
    id: "kung-pao",
    title: "Kung Pao Vegetables",
    emoji: "🌶️🥜",
    sections: [
      {
        id: "kung-pao-sauce",
        title: "Sauce",
        ingredients: [
          { key: "r:kp:s:soy", item: "100ml soy sauce" },
          { key: "r:kp:s:vinegar", item: "50ml rice vinegar" },
          { key: "r:kp:s:sugar", item: "50g sugar" },
          { key: "r:kp:s:garlic", item: "3 garlic cloves, minced" },
          { key: "r:kp:s:ginger", item: "1 tbsp fresh ginger, grated" },
          { key: "r:kp:s:chilies", item: "4–6 dried red chilies (adjust for heat preference)" },
          { key: "r:kp:s:msg", item: "1 tsp MSG" }
        ],
        steps: [
          { key: "r:kp:s:s1", text: "Combine all ingredients. Stir to dissolve sugar. Can be made ahead and refrigerated." }
        ]
      },
      {
        id: "kung-pao-cooking",
        title: "Cooking",
        ingredients: [
          { key: "r:kp:cook:peppers", item: "4 bell peppers, large chunks (~4cm)" },
          { key: "r:kp:cook:onions", item: "2 onions, large chunks" },
          { key: "r:kp:cook:zucchini", item: "2 zucchini, large chunks" },
          { key: "r:kp:cook:peanuts", item: "150g peanuts — added at the very end" }
        ],
        steps: [
          { key: "r:kp:cook:s1", text: "Heat oil in a large wok or skillet over HIGH heat until it shimmers." },
          { key: "r:kp:cook:s2", text: "Add peppers — stir fry 2 minutes." },
          { key: "r:kp:cook:s3", text: "Add onions — 2 more minutes." },
          { key: "r:kp:cook:s4", text: "Add zucchini — 1 more minute. Vegetables should have some char and still have bite." },
          { key: "r:kp:cook:s5", text: "Pour in sauce, toss everything together." },
          { key: "r:kp:cook:s6", text: "Add peanuts last, toss once, move to serving dish." }
        ]
      }
    ]
  },
  {
    id: "rice",
    title: "Jasmine Rice",
    emoji: "🍚",
    sections: [
      {
        id: "rice-main",
        title: "The Rice",
        ingredients: [
          { key: "r:rice:water", item: "~1.1L cold water (ratio 1:1.2 by weight)" },
          { key: "r:rice:rice", item: "900g jasmine rice" }
        ],
        steps: [
          { key: "r:rice:s1", text: "Rinse rice in cold water until water runs mostly clear — 2 to 3 rinses." },
          { key: "r:rice:s2", text: "Add rice + 1.1L water to a large pot with a tight-fitting lid." },
          { key: "r:rice:s3", text: "Bring to a full boil over high heat, uncovered." },
          { key: "r:rice:s4", text: "Immediately reduce to the LOWEST heat. Put the lid on tightly." },
          {
            key: "r:rice:s5",
            text: "Cook 18 minutes. DO NOT LIFT THE LID.",
            note: "Every time you lift the lid you lose steam = uneven cooking = sad rice."
          },
          { key: "r:rice:s6", text: "Remove from heat. Keep lid on. Steam for 5 more minutes." },
          { key: "r:rice:s7", text: "Fluff with a fork. Serve." }
        ]
      }
    ]
  },
  {
    id: "spring-rolls",
    title: "Spring Rolls",
    emoji: "🥢",
    sections: [
      {
        id: "spring-rolls-main",
        title: "Frozen Spring Rolls",
        ingredients: [
          { key: "r:sr:rolls", item: "24 frozen spring rolls" }
        ],
        steps: [
          { key: "r:sr:s1", text: "Preheat oven to 200°C / 400°F." },
          { key: "r:sr:s2", text: "Place spring rolls on a lined baking sheet — do not crowd them." },
          { key: "r:sr:s3", text: "Bake 15–20 minutes, flipping halfway, until golden and crispy." },
          {
            key: "r:sr:s4",
            text: "⚠️ Start these at 20 min before serving — NOT 10 min. They take 15–20 min.",
            note: "If you put them in at 10 min they will be undercooked. Set a timer."
          }
        ]
      }
    ]
  }
];
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function defineKeyedFunctionFactory(factory) {
  const placeholder = function() {
    throw new Error(`[nuxt] \`${factory.name}\` is a compiler macro and cannot be called at runtime.`);
  };
  return Object.defineProperty(placeholder, "__nuxt_factory", {
    enumerable: false,
    get: () => factory.factory
  });
}
const createUseAsyncData = defineKeyedFunctionFactory({
  name: "createUseAsyncData",
  factory(options = {}) {
    function useAsyncData2(...args) {
      const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
      if (_isAutoKeyNeeded(args[0], args[1])) {
        args.unshift(autoKey);
      }
      let [_key, _handler, opts = {}] = args;
      const isKeyReactive = isRef(_key) || typeof _key === "function";
      const key = isKeyReactive ? computed(() => toValue(_key)) : { value: _key };
      if (!key.value || typeof key.value !== "string") {
        throw new TypeError("[nuxt] [useAsyncData] key must be a non-empty string.");
      }
      if (typeof _handler !== "function") {
        throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
      }
      const shouldFactoryOptionsOverride = typeof options === "function";
      const nuxtApp = useNuxtApp();
      const factoryOptions = shouldFactoryOptionsOverride ? options(opts) : options;
      if (!shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          if (opts[key2] !== void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      opts.server ??= true;
      opts.default ??= getDefault;
      opts.getCachedData ??= getDefaultCachedData;
      opts.lazy ??= false;
      opts.immediate ??= true;
      opts.deep ??= asyncDataDefaults.deep;
      opts.dedupe ??= "cancel";
      if (shouldFactoryOptionsOverride) {
        for (const key2 in factoryOptions) {
          if (factoryOptions[key2] === void 0) {
            continue;
          }
          opts[key2] = factoryOptions[key2];
        }
      }
      nuxtApp._asyncData[key.value];
      function createInitialFetch() {
        const initialFetchOptions = { cause: "initial", dedupe: opts.dedupe };
        const existing = nuxtApp._asyncData[key.value];
        if (!existing?._init) {
          initialFetchOptions.cachedData = opts.getCachedData(key.value, nuxtApp, { cause: "initial" });
          nuxtApp._asyncData[key.value] = buildAsyncData(nuxtApp, key.value, _handler, opts, initialFetchOptions.cachedData);
          nuxtApp._asyncData[key.value]._initialCachedData = initialFetchOptions.cachedData;
        } else if (nuxtApp._asyncDataPromises[key.value]) {
          initialFetchOptions.cachedData = existing._initialCachedData;
        }
        return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
      }
      const initialFetch = createInitialFetch();
      const asyncData = nuxtApp._asyncData[key.value];
      asyncData._deps++;
      const fetchOnServer = opts.server !== false && nuxtApp.payload.serverRendered;
      if (fetchOnServer && opts.immediate) {
        const promise = initialFetch();
        if (getCurrentInstance()) {
          onServerPrefetch(() => promise);
        } else {
          nuxtApp.hook("app:created", async () => {
            await promise;
          });
        }
      }
      const asyncReturn = {
        data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
        pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
        status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
        error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
        refresh: (...args2) => {
          if (!nuxtApp._asyncData[key.value]?._init) {
            const initialFetch2 = createInitialFetch();
            return initialFetch2();
          }
          return nuxtApp._asyncData[key.value].execute(...args2);
        },
        execute: (...args2) => asyncReturn.refresh(...args2),
        clear: () => {
          const entry = nuxtApp._asyncData[key.value];
          if (entry?._abortController) {
            try {
              entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
            } finally {
              entry._abortController = void 0;
            }
          }
          clearNuxtDataByKey(nuxtApp, key.value);
        }
      };
      const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
      Object.assign(asyncDataPromise, asyncReturn);
      Object.defineProperties(asyncDataPromise, {
        then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
        catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
        finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
      });
      return asyncDataPromise;
    }
    return useAsyncData2;
  }
});
const useAsyncData = createUseAsyncData.__nuxt_factory();
createUseAsyncData.__nuxt_factory({
  lazy: true,
  // @ts-expect-error private property
  _functionName: "useLazyAsyncData"
});
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
    nuxtApp._asyncData[key]._initialCachedData = void 0;
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function buildAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}

export { __nuxt_component_0 as _, useAsyncData as a, gamePlan as g, recipes as r, shoppingList as s, useCheckboxes as u };
//# sourceMappingURL=asyncData-DduKAYyv.mjs.map
