<template>
  <div class="box">
    <h1 class="box-texto">
      Os Rotaract Clubs administram suas operações, gerenciam<br />
      seus fundos e planejam atividades e projetos alinhados a<br />
      causas relevantes para a comunidade. Os Rotary Clubs<br />
      patrocinadores oferecem orientação e apoio, e trabalham<br />
      em parceria com o Rotaract.<br />
    </h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DescricaoBox",
});
</script>

<style scoped>
.box {
  background-color: var(--segunda-color);
  margin-top: 7%;
}
</style>