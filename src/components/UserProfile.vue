<template>
  <div class="user-container">
    <div>user profile</div>
    <div class="user-description">
      username : {{ fetchUserInfo.id }}
      <slot name="username"></slot>
      <div class="time">
        <!-- time : {{ fetchUserInfo.created }} -->
        <slot name="time"></slot>
        <slot name="karma"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    userName() {
      return this.$route.params.id;
    },
    ...mapGetters(["fetchUserInfo"]),
  },
  created() {
    this.$store.dispatch("FETCH_USERINFO", this.userName);
  },
};
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.6rem;
}
.user-description {
  padding-left: 8px;
}
</style>
