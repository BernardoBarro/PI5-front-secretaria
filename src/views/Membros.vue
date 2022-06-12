<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentMembros />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentMembros from "../components/ComponentMembros.vue";

export default defineComponent({
  name: "MembrosVue",
  components: {
    MenuBox,
    ComponentMembros,
  },
});
</script>