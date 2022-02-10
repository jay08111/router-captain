<template>
  <div>
    <section>
      <div class="user-container">
        <div>user profile</div>
        <div class="user-description">
          <router-link :to="`/user/${fetchIndividualItem.user}`">
            {{ fetchIndividualItem.user }}</router-link
          >
        </div>
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
export default {
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
