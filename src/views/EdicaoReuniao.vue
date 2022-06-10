<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoReuniao />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoReuniao from "../components/ComponentEdicaoReuniao.vue";

export default defineComponent({
  name: "EdicaoReuniao",
  components: {
    MenuBox,
    ComponentEdicaoReuniao,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>