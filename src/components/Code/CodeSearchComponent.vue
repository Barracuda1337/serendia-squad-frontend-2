<template>
  <div class="search-box flex items-center">
    <input @input="handleInput" class="search-txt" type="text" name placeholder="Arama..." />
    <router-link to="/codes" class="search-btn">
      <i class="fas fa-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["search"],
  methods: {
    handleInput(e) {
      this.$emit("update:search", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  background: #352f44;
  height: 3rem;
  border-radius: 40px;
  padding: 10px;

  width: min-content;
}
.search-btn {
  color: #5c5470;
  float: right;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #352f44;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: 0.4s;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: #fff;
  font-size: 16px;
  transition: 0.4s;
  line-height: 3rem;
  width: 0px;
}
.search-box:hover > .search-txt {
  width: 300px;
  padding: 0 6px;
}
.search-box:hover > .search-btn {
  background: #352f44;
}
</style>
