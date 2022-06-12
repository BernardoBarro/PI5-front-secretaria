<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <ComponentEdicaoMembro />
  </main>
</template>

<script>
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";
import ComponentEdicaoMembro from "../components/ComponentEdicaoMembro.vue";

export default defineComponent({
  name: "EdicaoMembro",
  components: {
    MenuBox,
    ComponentEdicaoMembro,
  },
});
</script>