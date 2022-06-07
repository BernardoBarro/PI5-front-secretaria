<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoProjetos />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoProjetos from "../components/ComponentEdicaoProjetos.vue";

export default defineComponent({
  name: "EdicaoProjeto",
  components: {
    MenuBox,
    ComponentEdicaoProjetos,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>