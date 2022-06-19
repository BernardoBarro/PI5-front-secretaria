<template>
  <h1 class="titulo-edi-inst">EDIÇÃO INSTITUIÇÃO</h1>
  <div class="circulo-edi-inst"></div>

  <div class="box-1-edi-inst">
    <div class="circulo-2-edi-inst"></div>
    <form class="form-edi-inst" method="get" action="">
      <input
        id="input-edi-inst"
        type="text"
        name="nome"
        ref="nome"
        placeholder=" Nome"
        v-bind:value="nome"
      /><br />
      <input
        id="input-edi-inst"
        type="text"
        name="telefone"
        ref="contato"
        placeholder=" Telefone"
        v-bind:value="contato"
      /><br />
      <textarea
        id="textarea-edi-inst"
        name="restricao-medica"
        ref="detalhes"
        placeholder=" Descrição"
        v-bind:value="detalhes"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-edi-inst">
    <router-link :to="{ name: 'instituicoes' }">
      <input
        class="botao-editar-edi-inst"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'instituicoes' }">
      <input
        class="botao-excluir-edi-inst"
        type="submit"
        name="excluir"
        value="Excluir"
        @click="deleteDataById"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "ComponentEdicaoInstituicao",
  data() {
    return {
      putResult: null,
      data: {},
      nome: {},
      contato: {},
      detalhes: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const token = localStorage.getItem("@Auth");
      const res = await fetch(
        "http://localhost:8080/instituicao/" +
          router.currentRoute.value.params.id,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await res.json();
      this.data = data;
      this.nome = data.nome;
      this.contato = data.contato;
      this.detalhes = data.detalhes;
    },
    async putData() {
      const { nome, contato, detalhes } = this.$refs;
      const putData = {
        nome: nome.value,
        contato: contato.value,
        detalhes: detalhes.value,
      };
      const token = localStorage.getItem("@Auth");
      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/instituicao/" +
            router.currentRoute.value.params.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
              Authorization: token,
            },
            body: JSON.stringify(putData),
          }
        );
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.putResult = err.message;
      }
    },
    async deleteDataById() {
      const id = router.currentRoute.value.params.id;
      if (id) {
        const token = localStorage.getItem("@Auth");
        console.log(id);
        try {
          const res = await fetch(
            "http://localhost:8080/instituicao/" +
              router.currentRoute.value.params.id,
            {
              method: "DELETE",
              headers: {
                Authorization: token,
              },
            }
          );
          const data = await res.json();
          const result = {
            status: res.status + "-" + res.statusText,
            headers: { "Content-Type": res.headers.get("Content-Type") },
            data: data,
          };
          this.deleteResult = this.fortmatResponse(result);
        } catch (err) {
          this.deleteResult = err.message;
        }
      }
    },
  },
});
</script>

<style scoped>
.container-botao-edi-inst {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-edi-inst {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -231px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 120px;
  cursor: pointer;
}

.botao-editar-edi-inst {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -6.9%;
  position: absolute;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 120px;
  cursor: pointer;
}

#input-edi-inst {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  padding-left: 11px;
  font-weight: 600;
}

#input-edi-inst::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

#textarea-edi-inst {
  margin-top: 14px;
  margin-left: 29px;
  width: 77%;
  padding-bottom: 122px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  padding-left: 11px;
  padding-top: 10px;
  font-weight: 600;
  outline: none;
}

#textarea-edi-inst::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-inst {
  background-color: var(--segunda-color);
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.form-edi-inst {
  margin-top: 58px;
}

.titulo-edi-inst {
  font-size: 40px;
  position: absolute;
  margin-left: 52.3%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-edi-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-edi-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -36.5%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>