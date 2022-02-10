<template>
  <div>
    <ul>
      <li v-for="item in info" :key="item.id" class="item-list">
        <template v-if="item.domain">
          <a :href="item.url" link="a-link">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </template>
        <small class="time-ago"
          >{{ item.time_ago }} by
          <router-link :to="`/user/${item.user}`" v-if="item.user" class="link">
            {{ item.user }}
          </router-link>
          <a :href="item.url">{{ item.domain }}</a>
        </small>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsView",
  computed: {
    info() {
      const name = this.$route.name;
      if (name === "news") {
        return this.$store.state.news;
      } else if (name === "ask") {
        return this.$store.state.ask;
      } else if (name === "jobs") {
        return this.$store.state.jobs;
      }
    },
  },
  created() {
    const name = this.$route.name;
    if (name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item-list {
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.26);
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.26);
}

small {
  margin-right: 10px;
  margin-left: 15px;
}
.time-ago .link {
  color: #fff;
}
</style>
