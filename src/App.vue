<template>
  <div id="app">
    <Toolbar />
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>
<script>
import Toolbar from "./components/Toobar.vue";
export default {
  components: {
    Toolbar,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
