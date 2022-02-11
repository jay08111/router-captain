<template>
  <div>
    <UserProfile>
      <div slot="username">{{ fetchUserInfo.id }}</div>
      <span slot="time">{{ fetchUserInfo.created }} , </span>
      <div slot="karma">{{ fetchUserInfo.karma }}</div>
    </UserProfile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
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
