<template>
  <section id="main-wrapper">
    <ListNav></ListNav>
    <ListMap></ListMap>
  </section>
</template>

<script>

</script>
<script setup>
import ListNav from "./components/listNav/ListNav.vue";
import ListMap from "./components/listMap/ListMap.vue";

</script>

<style scoped>
#main-wrapper{
  display: flex;
  justify-content: center;
}
</style>