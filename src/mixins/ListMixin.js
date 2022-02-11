import bus from "../utils/bus";

export default {
  created() {
    bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_NEWS")
      .then(() => {
        console.log("fetched!");
        bus.$emit("end:spinner");
      })
      .catch((err) => console.log(err));
  },
};
