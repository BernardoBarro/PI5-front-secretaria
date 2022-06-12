<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoConvidado />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoConvidado from "../components/ComponentEdicaoConvidado.vue";

export default defineComponent({
  name: "EdicaoConvidado",
  components: {
    MenuBox,
    ComponentEdicaoConvidado,
  },
});
</script>
