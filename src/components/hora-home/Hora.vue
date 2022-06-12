<template>
  <div class="container">
    <div class="hora">
      <div id="data-hora"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HoraBox",
});

const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

const interval = setInterval(() => {
  const now = new Date();

  const dataHora =
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  document.getElementById("data-hora").innerHTML = dataHora;
}, 1000);
</script>

<style scoped>
.hora {
  text-align: center;
  font-size: 80px;
  color: var(--terceira-color);
  margin-top: 15%;
  border-radius: 10px;
}
</style>
