<template>
  <ListItem />
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";
export default {
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(["fetchAsk"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style></style>
