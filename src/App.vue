<template>
  <div id="app">
    <Toolbar />
    <transition name="page">
      <router-view />
    </transition>
    <Spinner :loading="loading" />
  </div>
</template>
<script>
import Toolbar from "./components/Toobar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";
export default {
  components: {
    Toolbar,
    Spinner,
  },
  data() {
    return { loading: false };
  },
  methods: {
    startSpinner() {
      this.loading = true;
    },
    endSpinner() {
      this.loading = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
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
