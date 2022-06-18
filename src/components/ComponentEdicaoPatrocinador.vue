
<template>
  <h1 class="titulo-edi-pat">EDIÇÃO DE PATROCINADOR</h1>
  <div class="circulo-edi-pat"></div>

  <div class="box-1-edi-pat">
    <div class="circulo-2-edi-pat"></div>
    <form>
      <input
        id="input-edi-pat"
        type="text"
        name="nome"
        ref="nome"
        placeholder=" Nome do Patrocinador"
        v-bind:value="nome"
      /><br />
      <input
        id="input-edi-pat"
        type="number"
        name="valorDecimal"
        ref="valorDecimal"
        placeholder=" R$ 0.00"
        v-bind:value="valorDecimal"
      /><br />
      <textarea
        id="textareaedi"
        name="descricao"
        placeholder="Observações da Reunião"
        ref="descricao"
        v-bind:value="descricao"
      ></textarea>
    </form>
  </div>
  <div class="container-botao-edi-pat">
    <router-link :to="{ name: 'patrocinador' }">
      <input
        class="botao-editar-edi-pat"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'patrocinador' }">
      <input
        class="botao-excluir-edi-pat"
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
  name: "ComponentEdicaoPatrocinador",
  data() {
    return {
      putResult: null,
      data: {},
      nome: {},
      valorDecimal: {},
      descricao: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const token = localStorage.getItem("@Auth");
      const res = await fetch(
        "http://localhost:8080/patrocinador/" +
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
      this.valorDecimal = data.valorDecimal;
      this.descricao = data.descricao;
    },
    async putData() {
      const { nome, valorDecimal, descricao } = this.$refs;
      const putData = {
        nome: nome.value,
        valorDecimal: valorDecimal.value,
        descricao: descricao.value,
      };
      const token = localStorage.getItem("@Auth");
      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/patrocinador/" +
            router.currentRoute.value.params.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
              Authorization: token,
            },
            body: JSON.stringify(putData),
            Authorization: "Bearer ${token}",
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
      const token = localStorage.getItem("@Auth");
      const id = router.currentRoute.value.params.id;
      if (id) {
        console.log(id);
        try {
          const res = await fetch(
            "http://localhost:8080/patrocinador/" +
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

<style>
.container-botao-edi-pat {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-edi-pat {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -275px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

.botao-editar-edi-pat {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -125px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

#textareaedi {
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

#textareaedi::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

#input-edi-pat {
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

#input-edi-pat::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-pat {
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
.form-edi-pat {
  margin-top: 33px;
}

.titulo-edi-pat {
  font-size: 40px;
  position: absolute;
  margin-left: 41%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}
.circulo-edi-pat {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-edi-pat {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>