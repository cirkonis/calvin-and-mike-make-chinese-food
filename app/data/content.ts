// ─── Shopping List ───────────────────────────────────────────────────────────

export interface ShoppingItem {
  key: string
  label: string
  note?: string
}

export interface ShoppingCategory {
  title: string
  items: ShoppingItem[]
}

export const shoppingList: ShoppingCategory[] = [
  {
    title: '🥩 Meat',
    items: [
      { key: 'shop:meat:chicken', label: '1.5 kg chicken thighs (boneless, skinless)' },
      { key: 'shop:meat:beef', label: '1.0 kg flank steak or sirloin' },
    ],
  },
  {
    title: '🥦 Produce',
    items: [
      { key: 'shop:veg:broccoli', label: '800g–1kg broccoli' },
      { key: 'shop:veg:peppers', label: '4 bell peppers' },
      { key: 'shop:veg:onions', label: '2 onions' },
      { key: 'shop:veg:zucchini', label: '2 zucchini' },
      { key: 'shop:veg:oranges', label: '2 oranges (for zest; juice is bottled)' },
      { key: 'shop:veg:ginger', label: '1 large knob of ginger' },
      { key: 'shop:veg:garlic', label: '2 heads of garlic' },
    ],
  },
  {
    title: '🥚 Eggs',
    items: [
      { key: 'shop:eggs', label: '2 eggs', note: 'Chicken marinade needs 1; grab a spare' },
    ],
  },
  {
    title: '🏺 Dry Goods',
    items: [
      { key: 'shop:dry:rice', label: '900g jasmine rice' },
      { key: 'shop:dry:peanuts', label: '150g peanuts (roasted, unsalted)' },
      { key: 'shop:dry:cornstarch', label: 'Cornstarch — big bag (~500g)', note: 'Used for coating + slurries across all dishes' },
      { key: 'shop:dry:flour', label: 'Plain flour (~300g)' },
      { key: 'shop:dry:baking-powder', label: 'Baking powder (small; only 1 tsp needed)' },
      { key: 'shop:dry:sugar', label: 'Sugar (~200g)', note: 'Orange chicken + Kung Pao both need it' },
      { key: 'shop:dry:dried-chilies', label: 'Dried red chilies (Kung Pao)' },
      { key: 'shop:dry:msg', label: 'MSG — buy it, use it, never apologize' },
    ],
  },
  {
    title: '🫙 Sauces & Condiments',
    items: [
      { key: 'shop:sauce:soy', label: 'Soy sauce — big bottle (~1L)', note: 'Used in literally every dish' },
      { key: 'shop:sauce:dark-soy', label: 'Dark soy sauce (small bottle, ~150ml)' },
      { key: 'shop:sauce:oyster', label: 'Oyster sauce (Beef & Broccoli)' },
      { key: 'shop:sauce:rice-vinegar', label: 'Rice vinegar (~250ml)' },
      { key: 'shop:sauce:sesame-oil', label: 'Sesame oil (small bottle, goes a long way)' },
      { key: 'shop:sauce:oj', label: 'Bottled orange juice (~500ml)' },
    ],
  },
  {
    title: '🧊 Frozen',
    items: [
      { key: 'shop:frozen:spring-rolls', label: '24 frozen spring rolls' },
    ],
  },
  {
    title: '🛢️ Misc',
    items: [
      { key: 'shop:misc:oil', label: 'Huile de tournesol (sunflower oil) — large bottle, 3L+'},
    ],
  },
]

// ─── Game Plan ────────────────────────────────────────────────────────────────

export interface GameStep {
  key: string
  task: string
  who?: 'Mike' | 'Calvin' | 'Both'
  note?: string
  recipeLink?: { label: string; href: string }
}

export interface GamePhase {
  id: string
  title: string
  subtitle?: string
  steps: GameStep[]
}

export const gamePlan: GamePhase[] = [
  {
    id: 'pre-prep',
    title: '🍳 Pre-Prep',
    subtitle: 'Can be done the night before or morning of dinner',
    steps: [
      {
        key: 'gp:pre:sauce-orange',
        who: 'Mike',
        task: 'Make orange chicken sauce',
        note: 'OJ + zest + soy + vinegar + sugar + garlic + ginger + MSG. Stir, refrigerate.',
        recipeLink: { label: 'Orange Chicken → Sauce', href: '/recipes#orange-chicken-sauce' },
      },
      {
        key: 'gp:pre:sauce-beef',
        who: 'Calvin',
        task: 'Make beef & broccoli sauce',
        note: 'Soy + oyster + dark soy + garlic + ginger + sesame oil + MSG. Refrigerate.',
        recipeLink: { label: 'Beef & Broccoli → Sauce', href: '/recipes#beef-broccoli-sauce' },
      },
      {
        key: 'gp:pre:sauce-kungpao',
        who: 'Mike',
        task: 'Make kung pao sauce',
        note: 'Soy + rice vinegar + sugar + garlic + ginger + chilies + MSG. Refrigerate.',
        recipeLink: { label: 'Kung Pao → Sauce', href: '/recipes#kung-pao-sauce' },
      },
      {
        key: 'gp:pre:dry-coating',
        who: 'Mike',
        task: 'Mix dry coating for the chicken',
        note: '250g cornstarch + 150g flour + 1 tsp baking powder. Cover and set aside.',
      },
      {
        key: 'gp:pre:label-sauces',
        who: 'Both',
        task: 'Label all sauce containers',
      },
    ],
  },
  {
    id: '3-4-hours',
    title: '⏰ 3–4 Hours Before',
    subtitle: 'All the chopping',
    steps: [
      { key: 'gp:3h:cube-chicken', who: 'Mike', task: 'Cube chicken into ~3cm bite-size pieces' },
      { key: 'gp:3h:slice-beef', who: 'Calvin', task: 'Slice beef THINLY against the grain (~3mm slices)' },
      { key: 'gp:3h:broccoli', who: 'Calvin', task: 'Cut broccoli into florets' },
      { key: 'gp:3h:onions', who: 'Calvin', task: 'Cut onions into large chunks' },
      { key: 'gp:3h:peppers', who: 'Mike', task: 'Cut bell peppers into large chunks (~4cm)' },
      { key: 'gp:3h:zucchini', who: 'Mike', task: 'Cut zucchini into large chunks' },
    ],
  },
  {
    id: '2-hours',
    title: '⏰ 2 Hours Before',
    subtitle: 'Marinating — 30 min minimum for both, more is fine',
    steps: [
      {
        key: 'gp:2h:marinate-chicken',
        who: 'Mike',
        task: 'Marinate chicken: salt + soy sauce + egg, mix well',
        recipeLink: { label: 'Orange Chicken → Marinade', href: '/recipes#orange-chicken-marinade' },
      },
      {
        key: 'gp:2h:marinate-beef',
        who: 'Calvin',
        task: 'Marinate beef: soy sauce + cornstarch + oil, mix well',
        recipeLink: { label: 'Beef & Broccoli → Marinade', href: '/recipes#beef-broccoli-marinade' },
      },
    ],
  },
  {
    id: '90-min',
    title: '⏰ 90 Minutes Before',
    subtitle: 'Frying time — do ALL the chicken now, not later',
    steps: [
      { key: 'gp:90:heat-oil', who: 'Mike', task: 'Heat neutral oil to 175°C / 350°F in a large deep pot' },
      { key: 'gp:90:coat-chicken', who: 'Mike', task: 'Toss marinated chicken in dry coating until well covered, shake off excess' },
      {
        key: 'gp:90:fry-chicken',
        who: 'Mike',
        task: 'Fry ALL the chicken in batches — 6–8 min per batch until golden',
      },
      {
        key: 'gp:90:tray-chicken',
        who: 'Mike',
        task: 'Place fried chicken on sheet trays UNCOVERED',
      },
    ],
  },
  {
    id: '60-min',
    title: '⏰ 60 Minutes Before',
    subtitle: 'Rice goes on — then you leave it completely alone',
    steps: [
      { key: 'gp:60:rinse-rice', who: 'Calvin', task: 'Rinse 900g jasmine rice until water runs clear (2–3 rinses)' },
      {
        key: 'gp:60:start-rice',
        who: 'Calvin',
        task: 'Add rice + 1.1L water to a pot, bring to boil, then lowest heat, lid on, 18 min',
        recipeLink: { label: 'Rice → full instructions', href: '/recipes#rice-main' },
      },
      {
        key: 'gp:60:rice-rest',
        who: 'Calvin',
        task: 'After 18 min: off the heat, keep lid on, let steam 5 more min, then fluff',
      },
    ],
  },
  {
    id: '35-min',
    title: '⏰ 35 Minutes Before Serving',
    subtitle: 'Four burners, go!',
    steps: [
      {
        key: 'gp:35:blanch-broccoli',
        who: 'Calvin',
        task: 'Stove 1 — Blanch broccoli in boiling salted water, exactly 3 minutes, drain',
      },
      {
        key: 'gp:35:stir-fry-beef',
        who: 'Calvin',
        task: 'Stove 2 — Stir fry beef in batches over HIGH heat, remove when just cooked',
      },
      {
        key: 'gp:35:preheat-oven',
        who: 'Both',
        task: 'Stove 3 — Reserve for Kung Pao Stir fry',
      },
      {
        key: 'gp:35:beer',
        who: 'Both',
        task: 'Stove 4 — Open beer. Look at it and drink beer. Quality control.',
      },
      {
        key: 'gp:35:preheat-oven',
        who: 'Both',
        task: 'Oven — Preheat to 200°C / 400°F for spring rolls',
      },
    ],
  },
  {
    id: '25-min',
    title: '⏰ 25 Minutes Before Serving',
    steps: [
      {
        key: 'gp:25:beef-broccoli',
        who: 'Calvin',
        task: 'Combine beef + broccoli + beef sauce in pan, heat through until glossy',
      },
      {
        key: 'gp:25:beef-dish',
        who: 'Calvin',
        task: 'Move Beef & Broccoli to serving dish',
      },
    ],
  },
  {
    id: '20-min',
    title: '⏰ 20 Minutes Before Serving',
    steps: [
      {
        key: 'gp:20:spring-rolls',
        who: 'Calvin',
        task: 'Spring rolls into the oven! (15–20 min, flip halfway at the 10-min mark)',
        note: '⚠️ Start them NOW — they take 15-20 min. Starting at 10 min means undercooked rolls.',
      },
      {
        key: 'gp:20:kung-pao-veg',
        who: 'Mike',
        task: 'Stir fry kung pao vegetables: peppers first (2 min), then onions (2 min), then zucchini (1 min)',
      },
      {
        key: 'gp:20:kung-pao-sauce',
        who: 'Mike',
        task: 'Add kung pao sauce + peanuts, toss everything together',
      },
      {
        key: 'gp:20:kung-pao-dish',
        who: 'Mike',
        task: 'Move Kung Pao Vegetables to serving dish',
      },
    ],
  },
  {
    id: '10-min',
    title: '⏰ 10 Minutes Before Serving',
    steps: [
      {
        key: 'gp:10:flip-rolls',
        who: 'Calvin',
        task: 'Flip spring rolls in oven',
      },
      {
        key: 'gp:10:recrisp-chicken',
        who: 'Mike',
        task: 'Chicken tray into oven to re-crisp (5–8 min)',
        note: 'Goal is reheating and re-crisping — not cooking.',
      },
    ],
  },
  {
    id: '5-min',
    title: '⏰ Final 5 Minutes',
    subtitle: 'Orange chicken is last and timing is everything',
    steps: [
      { key: 'gp:5:pull-rolls', who: 'Calvin', task: 'Pull golden spring rolls out of oven to serving plate' },
      { key: 'gp:5:pull-chicken', who: 'Mike', task: 'Pull chicken out of oven, stand by' },
      { key: 'gp:5:heat-sauce', who: 'Mike', task: 'Orange chicken sauce into a large skillet, bring to a boil' },
      {
        key: 'gp:5:thicken',
        who: 'Mike',
        task: 'Stir in cornstarch slurry (1 tbsp cornstarch + 2 tbsp cold water) — cook until glossy',
      },
      { key: 'gp:5:add-chicken', who: 'Mike', task: 'Add ALL the fried chicken, toss quickly until fully coated' },
      {
        key: 'gp:5:serve',
        who: 'Both',
        task: 'Eat Food',
      },
    ],
  },
]

// ─── Recipes ─────────────────────────────────────────────────────────────────

export interface RecipeIngredient {
  key: string
  item: string
}

export interface RecipeStep {
  key: string
  text: string
  note?: string
}

export interface RecipeSection {
  id: string
  title: string
  ingredients?: RecipeIngredient[]
  steps: RecipeStep[]
}

export interface Recipe {
  id: string
  title: string
  emoji: string
  sections: RecipeSection[]
}

export const recipes: Recipe[] = [
  {
    id: 'orange-chicken',
    title: 'Orange Chicken',
    emoji: '🍊🍗',
    sections: [
      {
        id: 'orange-chicken-marinade',
        title: 'Chicken Marinade',
        ingredients: [
          { key: 'r:oc:m:chicken', item: '1.5 kg boneless skinless chicken thighs' },
          { key: 'r:oc:m:salt', item: '1 tsp salt' },
          { key: 'r:oc:m:soy', item: '1 tbsp soy sauce' },
          { key: 'r:oc:m:egg', item: '1 egg' },
        ],
        steps: [
          { key: 'r:oc:m:s1', text: 'Cut chicken into ~3cm bite-size cubes.' },
          { key: 'r:oc:m:s2', text: 'Combine chicken with salt, soy sauce, and egg. Mix well.' },
          { key: 'r:oc:m:s3', text: 'Let sit 30 minutes minimum.' },
        ],
      },
      {
        id: 'orange-chicken-coating',
        title: 'Coating',
        ingredients: [
          { key: 'r:oc:c:cornstarch', item: '250g cornstarch' },
          { key: 'r:oc:c:flour', item: '150g plain flour' },
          { key: 'r:oc:c:baking-powder', item: '1 tsp baking powder' },
        ],
        steps: [
          { key: 'r:oc:c:s1', text: 'Combine cornstarch, flour, and baking powder in a large bowl.' },
          { key: 'r:oc:c:s2', text: 'Toss marinated chicken in the coating until fully covered.' },
          { key: 'r:oc:c:s3', text: 'Shake off excess before dropping in the oil.' },
        ],
      },
      {
        id: 'orange-chicken-frying',
        title: 'Frying',
        steps: [
          { key: 'r:oc:f:s1', text: 'Heat neutral oil in a large deep pot to 175°C / 350°F.' },
          { key: 'r:oc:f:s2', text: 'Fry chicken in batches — do NOT crowd. 6–8 minutes per batch until golden brown.' },
          { key: 'r:oc:f:s3', text: 'Remove to sheet trays and leave UNCOVERED. Covering it steams = soggy.' },
          { key: 'r:oc:f:s4', text: 'Do ALL the chicken at 90 min — it will be re-crisped in the oven at the end.' },
        ],
      },
      {
        id: 'orange-chicken-sauce',
        title: 'Sauce',
        ingredients: [
          { key: 'r:oc:s:oj', item: '350ml orange juice' },
          { key: 'r:oc:s:zest', item: 'Zest of 2 oranges' },
          { key: 'r:oc:s:soy', item: '100ml soy sauce' },
          { key: 'r:oc:s:vinegar', item: '75ml rice vinegar' },
          { key: 'r:oc:s:sugar', item: '100g sugar' },
          { key: 'r:oc:s:garlic', item: '4 garlic cloves, minced' },
          { key: 'r:oc:s:ginger', item: '1 tbsp fresh ginger, grated' },
          { key: 'r:oc:s:msg', item: '1 tsp MSG' },
          { key: 'r:oc:s:slurry', item: 'Cornstarch slurry: 1 tbsp cornstarch + 2 tbsp cold water, mixed' },
        ],
        steps: [
          { key: 'r:oc:s:s1', text: 'Combine all sauce ingredients (except slurry). Stir until sugar dissolves. Refrigerate until needed.' },
          { key: 'r:oc:s:s2', text: 'When ready to serve: pour sauce into a large skillet over medium-high heat.' },
          { key: 'r:oc:s:s3', text: 'Bring to a boil. Stir in cornstarch slurry and cook until thickened and glossy (~1–2 min).' },
          { key: 'r:oc:s:s4', text: 'Add ALL the fried chicken, toss quickly until coated.' },
          {
            key: 'r:oc:s:s5',
            text: '🚨 SERVE IMMEDIATELY. Every minute in the sauce = less crunch.',
            note: 'This is the most time-sensitive step of the night. Do not start the sauce until everything else is on the table.',
          },
        ],
      },
    ],
  },
  {
    id: 'beef-broccoli',
    title: 'Beef & Broccoli',
    emoji: '🥩🥦',
    sections: [
      {
        id: 'beef-broccoli-marinade',
        title: 'Beef Marinade',
        ingredients: [
          { key: 'r:bb:m:beef', item: '1 kg flank steak or sirloin' },
          { key: 'r:bb:m:soy', item: '2 tbsp soy sauce' },
          { key: 'r:bb:m:cornstarch', item: '1 tbsp cornstarch' },
          { key: 'r:bb:m:oil', item: '1 tbsp neutral oil' },
        ],
        steps: [
          { key: 'r:bb:m:s1', text: 'Slice beef THINLY against the grain — about 3mm slices. This is critical for tenderness.' },
          { key: 'r:bb:m:s2', text: 'Combine with soy sauce, cornstarch, and oil. Mix until the cornstarch is absorbed.' },
          { key: 'r:bb:m:s3', text: 'Marinate 30 minutes minimum.' },
        ],
      },
      {
        id: 'beef-broccoli-sauce',
        title: 'Sauce',
        ingredients: [
          { key: 'r:bb:s:soy', item: '150ml soy sauce' },
          { key: 'r:bb:s:oyster', item: '60ml oyster sauce' },
          { key: 'r:bb:s:dark-soy', item: '30ml dark soy sauce' },
          { key: 'r:bb:s:garlic', item: '3 garlic cloves, minced' },
          { key: 'r:bb:s:ginger', item: '1 tbsp fresh ginger, grated' },
          { key: 'r:bb:s:sesame', item: '1 tsp sesame oil' },
          { key: 'r:bb:s:msg', item: '1 tsp MSG' },
          { key: 'r:bb:s:slurry', item: 'Cornstarch slurry to thicken at the end' },
        ],
        steps: [
          { key: 'r:bb:s:s1', text: 'Combine all ingredients. Stir well. Can be made ahead and refrigerated.' },
        ],
      },
      {
        id: 'beef-broccoli-cooking',
        title: 'Cooking',
        ingredients: [
          { key: 'r:bb:cook:broccoli', item: '800g–1kg broccoli, cut into florets' },
        ],
        steps: [
          { key: 'r:bb:cook:s1', text: 'Blanch broccoli in boiling salted water for exactly 3 minutes. Drain immediately.' },
          { key: 'r:bb:cook:s2', text: 'Stir fry beef in batches over HIGH heat. Do not crowd the pan — it will steam instead of sear. Remove when just done.' },
          { key: 'r:bb:cook:s3', text: 'Pour sauce into the pan, bring to a boil, add slurry, stir until thickened.' },
          { key: 'r:bb:cook:s4', text: 'Return beef and broccoli, toss to coat, move to serving dish.' },
        ],
      },
    ],
  },
  {
    id: 'kung-pao',
    title: 'Kung Pao Vegetables',
    emoji: '🌶️🥜',
    sections: [
      {
        id: 'kung-pao-sauce',
        title: 'Sauce',
        ingredients: [
          { key: 'r:kp:s:soy', item: '100ml soy sauce' },
          { key: 'r:kp:s:vinegar', item: '50ml rice vinegar' },
          { key: 'r:kp:s:sugar', item: '50g sugar' },
          { key: 'r:kp:s:garlic', item: '3 garlic cloves, minced' },
          { key: 'r:kp:s:ginger', item: '1 tbsp fresh ginger, grated' },
          { key: 'r:kp:s:chilies', item: '4–6 dried red chilies (adjust for heat preference)' },
          { key: 'r:kp:s:msg', item: '1 tsp MSG' },
        ],
        steps: [
          { key: 'r:kp:s:s1', text: 'Combine all ingredients. Stir to dissolve sugar. Can be made ahead and refrigerated.' },
        ],
      },
      {
        id: 'kung-pao-cooking',
        title: 'Cooking',
        ingredients: [
          { key: 'r:kp:cook:peppers', item: '4 bell peppers, large chunks (~4cm)' },
          { key: 'r:kp:cook:onions', item: '2 onions, large chunks' },
          { key: 'r:kp:cook:zucchini', item: '2 zucchini, large chunks' },
          { key: 'r:kp:cook:peanuts', item: '150g peanuts — added at the very end' },
        ],
        steps: [
          { key: 'r:kp:cook:s1', text: 'Heat oil in a large wok or skillet over HIGH heat until it shimmers.' },
          { key: 'r:kp:cook:s2', text: 'Add peppers — stir fry 2 minutes.' },
          { key: 'r:kp:cook:s3', text: 'Add onions — 2 more minutes.' },
          { key: 'r:kp:cook:s4', text: 'Add zucchini — 1 more minute. Vegetables should have some char and still have bite.' },
          { key: 'r:kp:cook:s5', text: 'Pour in sauce, toss everything together.' },
          { key: 'r:kp:cook:s6', text: 'Add peanuts last, toss once, move to serving dish.' },
        ],
      },
    ],
  },
  {
    id: 'rice',
    title: 'Jasmine Rice',
    emoji: '🍚',
    sections: [
      {
        id: 'rice-main',
        title: 'The Rice',
        ingredients: [
          { key: 'r:rice:water', item: '~1.1L cold water (ratio 1:1.2 by weight)' },
          { key: 'r:rice:rice', item: '900g jasmine rice' },
        ],
        steps: [
          { key: 'r:rice:s1', text: 'Rinse rice in cold water until water runs mostly clear — 2 to 3 rinses.' },
          { key: 'r:rice:s2', text: 'Add rice + 1.1L water to a large pot with a tight-fitting lid.' },
          { key: 'r:rice:s3', text: 'Bring to a full boil over high heat, uncovered.' },
          { key: 'r:rice:s4', text: 'Immediately reduce to the LOWEST heat. Put the lid on tightly.' },
          {
            key: 'r:rice:s5',
            text: 'Cook 18 minutes. DO NOT LIFT THE LID.',
            note: 'Every time you lift the lid you lose steam = uneven cooking = sad rice.',
          },
          { key: 'r:rice:s6', text: 'Remove from heat. Keep lid on. Steam for 5 more minutes.' },
          { key: 'r:rice:s7', text: 'Fluff with a fork. Serve.' },
        ],
      },
    ],
  },
  {
    id: 'spring-rolls',
    title: 'Spring Rolls',
    emoji: '🥢',
    sections: [
      {
        id: 'spring-rolls-main',
        title: 'Frozen Spring Rolls',
        ingredients: [
          { key: 'r:sr:rolls', item: '24 frozen spring rolls' },
        ],
        steps: [
          { key: 'r:sr:s1', text: 'Preheat oven to 200°C / 400°F.' },
          { key: 'r:sr:s2', text: 'Place spring rolls on a lined baking sheet — do not crowd them.' },
          { key: 'r:sr:s3', text: 'Bake 15–20 minutes, flipping halfway, until golden and crispy.' },
          {
            key: 'r:sr:s4',
            text: '⚠️ Start these at 20 min before serving — NOT 10 min. They take 15–20 min.',
            note: 'If you put them in at 10 min they will be undercooked. Set a timer.',
          },
        ],
      },
    ],
  },
]
