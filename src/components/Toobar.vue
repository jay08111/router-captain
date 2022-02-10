<template>
  <div class="header">
    <router-link to="/news" class="link">News</router-link> |
    <router-link to="/ask" class="link">Ask</router-link> |
    <router-link to="/jobs" class="link">Jobs</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
  margin-bottom: 10px;
}
.header .link:active {
  color: #35495e;
}
.header .link {
  color: #fff;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 3px;
  text-decoration: none;
}
.header .link:hover {
  color: #000;
}
</style>
