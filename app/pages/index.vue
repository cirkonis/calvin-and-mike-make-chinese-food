<script setup lang="ts">
definePageMeta({ layout: 'default' })
useHead({ title: 'Home' })
</script>

<template>
  <main class="mx-auto max-w-2xl px-4 py-12 flex flex-col items-center text-center gap-8">
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-foreground">
        Mike and Calvin Make American Chinese Food Family Style in France
      </h1>

      <p class="text-4xl tracking-wide select-none">
        👨🏿 👨🏻 🇺🇸 🇨🇳 🍚 👨‍👩‍👧‍👦 🇫🇷
      </p>

      <p class="text-muted-foreground text-sm max-w-sm">
        Orange Chicken · Beef & Broccoli · Kung Pao Vegetables · Jasmine Rice · Spring Rolls
        <br />
        For 8 hungry people in a French kitchen with 4 burners.
      </p>
    </div>

    <div class="w-full grid gap-3 sm:grid-cols-3">
      <NuxtLink
        href="/shopping"
        class="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      >
        <span class="text-4xl">🛒</span>
        <div>
          <div class="font-bold text-foreground group-hover:text-primary transition-colors">Shopping Mode</div>
          <div class="text-xs text-muted-foreground mt-1">Everything you need to buy</div>
        </div>
      </NuxtLink>

      <NuxtLink
        href="/gameplan"
        class="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      >
        <span class="text-4xl">📋</span>
        <div>
          <div class="font-bold text-foreground group-hover:text-primary transition-colors">Game Plan Mode</div>
          <div class="text-xs text-muted-foreground mt-1">Who does what, and when</div>
        </div>
      </NuxtLink>

      <NuxtLink
        href="/recipes"
        class="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-accent/30 transition-all group"
      >
        <span class="text-4xl">📖</span>
        <div>
          <div class="font-bold text-foreground group-hover:text-primary transition-colors">Recipe Mode</div>
          <div class="text-xs text-muted-foreground mt-1">Full ingredients and steps</div>
        </div>
      </NuxtLink>
    </div>

    <div class="text-xs text-muted-foreground">
      Checkboxes persist across devices — Mike and Calvin see the same state.
    </div>
  </main>
</template>
