<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentDetalhesProjetos />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentDetalhesProjetos from "../components/ComponentDetalhesProjetos.vue";

export default defineComponent({
  name: "DetalhesProjeto",
  components: {
    MenuBox,
    ComponentDetalhesProjetos,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}
</style>