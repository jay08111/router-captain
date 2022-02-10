<template>
  <div>
    <p>name : {{ fetchUserInfo.id }}</p>
    <p>karama :{{ fetchUserInfo.karma }}</p>
    <p>created : {{ fetchUserInfo.created }}</p>
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

<style></style>
