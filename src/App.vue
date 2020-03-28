<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <app-home></app-home>
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <app-home></app-home>
    </router-view>
  </div>
</template>
