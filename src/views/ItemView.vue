<template>
  <div>
    <section>
      <div class="user-container">
        <UserProfile>
          <div slot="username">{{ fetchIndividualItem.user }}</div>
          <router-link slot="username" :to="`/user/${userInfo.user}`">{{
            fetchIndividualItem.user
          }}</router-link>
          <template slot="time">{{ fetchIndividualItem.time_ago }}</template>
        </UserProfile>
      </div>
      <h2>{{ fetchIndividualItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchIndividualItem.content"></div>
    </section>
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
    ...mapGetters(["fetchIndividualItem"]),
    id() {
      return this.$route.params.id;
    },
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_INDIVIDUAL_ITEM", this.id);
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
