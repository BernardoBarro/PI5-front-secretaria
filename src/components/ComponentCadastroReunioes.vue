
<template>
  <h1 class="titulo-cad-reu">CADASTRO DE REUNIÕES</h1>
  <div class="circulo-cad-reu"></div>

  <div class="box-1-cad-reu">
    <div class="circulo-2-cad-reu"></div>
    <form class="form-cad-reu" method="get" action="">
      <input
        class="nome-reuniao-cad-reu"
        type="text"
        name="cidade"
        ref="nome_reuniao"
        placeholder="Nome da Reunião"
      /><br />
      <img class="img-cad-reu" src="../assets/icon-reuniao.png" />
      <input
        class="data-inicio-cad-reu"
        type="text"
        ref="datareuniao"
        placeholder="Data Reunião"
      /><br />
      <input
        class="local-cad-reu"
        type="text"
        placeholder="Local"
        ref="local"
      /><br />
      <textarea
        id="textarea"
        name="assunto"
        placeholder="Observações da Reunião"
        ref="assunto"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-cad-reu">
    <router-link :to="{ name: 'home' }">
      <input
        class="botao-cad-reu"
        type="submit"
        name="salvar"
        value="Salvar"
        @click="postData"
      />
    </router-link>
  </div>
</template>


<script >
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentCadastroReunioes",
  data() {
    return {
      postResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData() {
      const postData = {
        nome: this.$refs.nome_reuniao.value,
        assunto: this.$refs.assunto.value,
        dataReuniao: this.$refs.datareuniao.value,
        local: this.$refs.local.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/reuniao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
          },
          body: JSON.stringify(postData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.postResult = err.message;
      }
    },
  },
});
</script>
<style scoped>
input[type="text"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

.img-cad-reu {
  width: 218px;
  position: absolute;
  margin-left: -13%;
  margin-top: 2%;
  margin-left: -29%;
}

.container-botao-cad-reu {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-cad-reu {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

.nome-reuniao-cad-reu {
  width: 79%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0px 0px 0px 10px;
}

.pontos-cad-reu {
  position: absolute;
  font-size: 25px;
  color: #f970a4;
  margin-left: 10.5%;
  margin-top: -1%;
}

.data-inicio-cad-reu {
  width: 41.8%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  margin-left: -10%;
  position: absolute;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 0px 0px 0px 10px;
}

.local-cad-reu {
  width: 53.4%;
  height: 40px;
  margin-top: 40px;
  margin-left: 28%;
  outline: none;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
}

#textarea {
  margin-top: 18px;
  margin-left: 27.8%;
  width: 53.5%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: #f970a4;
  outline: none;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 9px 0px 108px 10px;
}

#textarea::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

.box-1-cad-reu {
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.form-cad-reu {
  margin-top: 35px;
}

.titulo-cad-reu {
  font-size: 40px;
  position: absolute;
  margin-left: 46%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-cad-reu {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-reu {
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


