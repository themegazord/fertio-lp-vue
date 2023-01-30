<template>
  <div id="formulario-main-container">
    <div id="info-contato-formulario-main-container">
      <h1 id="titulo-info-contato">Informações de contato</h1>
      <div id="meio-info-contato">
        <div id="endereco-info-contato">
          <span id="titulo-endereco-info-container">
            <i class="fa-solid fa-location-dot"></i> Endereço
          </span>
          <p id="logradouro-endereco-info-container">
            R. Júlio Perneta, 250 Curitiba, PR 80810-110
          </p>
        </div>
        <div id="email-info-contato">
          <span id="titulo-email-info-container">
            <i class="fa-regular fa-envelope"></i> E-mail
          </span>
          <p id="email-email-info-container">contato@fertio.com.br</p>
        </div>
        <div id="telefones-info-contato">
          <span id="titulo-telefones-info-contato">
            <i class="fa-brands fa-whatsapp"></i> Telefones
          </span>
          <p class="telefones">(41) 3336-5465</p>
          <p class="telefones">(41) 9 9626-7118</p>
          <p class="telefones pe">(87) 9 8119-8493</p>
        </div>
      </div>
      <RedeSocial id="redes-sociais-form" />
    </div>
    <div id="form-contato">
      <div id="form-contato-content">
        <h1 id="titulo-form-contato">Torne-se um produtor de sucesso!</h1>
        <h3 id="sub-titulo-form-contato">
          Preencha o formulário abaixo e inicie a nova era da sua agricultura.
        </h3>
        <v-form id="form-form-contato" v-model="valid" @submit.prevent="submit">
          <v-text-field
            v-model="nome"
            class="nome-completo"
            label="Nome Completo"
            placeholder="Nome Completo"
            :error-messages="nomeErros"
            :error="!!nomeErros.length"
            :style="{ color: !!nomeErros.length ? 'red' : 'initial' }"
            solo></v-text-field>
          <div id="email-telefone-form-contato">
            <v-text-field
              v-model="email"
              class="email"
              label="E-mail"
              :error-messages="emailErros"
              :error="!!emailErros.length"
              :style="{ color: !!emailErros.length ? 'red' : 'initial' }"
              placeholder="E-mail" solo>
            </v-text-field>
            <v-text-field
              v-model="telefone"
              class="telefone"
              label="Telefone"
              :error-messages="telefoneErros"
              :error="!!telefoneErros.length"
              :style="{ color: !!telefoneErros.length ? 'red' : 'initial' }"
              placeholder="Telefone" solo></v-text-field>
          </div>
          <v-text-field
            v-model="assunto"
            class="assunto"
            label="Assunto"
            :error-messages="assuntoErros"
            :error="!!assuntoErros.length"
            :style="{ color: !!assuntoErros.length ? 'red' : 'initial' }"
            placeholder="Assunto" solo>
          </v-text-field>
          <v-textarea
            v-model="mensagem"
            rows="7"
            :error-messages="mensagemErros"
            :error="!!mensagemErros.length"
            :style="{ color: !!mensagemErros.length ? 'red' : 'initial' }"
            label="Mensagem" solo></v-textarea>
          <div id="div-button">
            <button type="submit" id="submit-enviar">Enviar</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import RedeSocial from '../../components/RedeSocialComponent.vue';

export default {
  components: { RedeSocial },
  data: () => ({
    valid: false,
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  }),
  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        const fullMessage = encodeURI(`Olá 😊.$Meu nome é *${this.nome
        }* e fiquei interessado no seu produto.$✉️ = *${this.email}*.$📱 = *${
          this.telefone}*.$🤔 = *${this.assunto}*.$💬 = *${this.mensagem}*`);

        window.open(`https://api.whatsapp.com/send?phone=5541996267118&text=${fullMessage.replaceAll('$', '%0D')}`);
      }
    },
  },
  mixins: [validationMixin],
  validations: {
    nome: {
      required,
    },
    email: {
      required,
      email,
    },
    telefone: {
      required,
    },
    assunto: {
      required,
    },
    mensagem: {
      required,
    },
  },
  computed: {
    nomeErros() {
      const erros = [];
      if (!this.$v.nome.$dirty) return erros;
      if (!this.$v.nome.required) erros.push('Por favor, insira seu nome');
      return erros;
    },
    emailErros() {
      const erros = [];
      if (!this.$v.email.$dirty) return erros;
      if (!this.$v.email.email) erros.push('E-mail inválido');
      if (!this.$v.email.required) erros.push('Por favor, insira seu email');
      return erros;
    },
    telefoneErros() {
      const erros = [];
      if (!this.$v.telefone.$dirty) return erros;
      if (!this.$v.telefone.required) erros.push('Por favor, insira seu telefone');
      return erros;
    },
    assuntoErros() {
      const erros = [];
      if (!this.$v.assunto.$dirty) return erros;
      if (!this.$v.assunto.required) erros.push('Por favor, insira seu assunto');
      return erros;
    },
    mensagemErros() {
      const erros = [];
      if (!this.$v.mensagem.$dirty) return erros;
      if (!this.$v.mensagem.required) erros.push('Por favor, insira sua mensagem');
      return erros;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

/* Media Width */
@media screen and (max-width: 2560px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 3.1rem;
    margin-top: 4.5rem;
    color: #FFFFFF;
    gap: 3.7rem;
    height: 100%;
  }
  #titulo-info-contato {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5.2rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    width: 75%;
    height: 100%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3.2rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 2rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #redes-sociais-form {
    display: flex;
    justify-content: center;
    font-size: 4.2rem;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 5rem 20rem 5rem 12rem;
  }

  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 4rem;
    font-weight: 700;
    line-height: 3rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: 1rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 5rem;
    font-size: 1.2rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 17.5rem;
    height: 5.4rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 2.8rem;
    line-height: 3.52rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1920px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 2.325rem;
    margin-top: 3.375rem;
    color: #FFFFFF;
    gap: 2.275rem;
  }
  #titulo-info-contato {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.9rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 2.625rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.725rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.650rem;
    font-weight: 400;
    line-height: 2.4rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.5rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 3.15rem;
    gap: 1.5rem;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 3.75rem 15rem 3.75rem 9rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.25rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.5rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 2.25rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .75rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 3.75rem;
    font-size: .9rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .975rem;
    line-height: 1.350rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 13.125rem;
    height: 4.05rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 2.1rem;
    line-height: 2.64rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1600px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.938rem;
    margin-top: 2.813rem;
    color: #FFFFFF;
    gap: 1.896rem;
  }
  #titulo-info-contato {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.667rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.823rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.438rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1.25rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 2rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.25rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2.625rem;
    gap: 1.25rem;
    height: 55%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 3.125rem 12.5rem 3.125rem 7.5rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.875rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.25rem;
    font-size: 1.563rem;
    font-weight: 400;
    line-height: 1.875rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .625rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 3.125rem;
    font-size: .75rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .813rem;
    line-height: 1.125rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 10.938rem;
    height: 3.375rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.75rem;
    line-height: 2.2rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}

/* @media screen and (max-width: 2560px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 145.6px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 64px;
    line-height: 83.2px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.064em;
    color: #FFFFFF;
    margin-left: 50px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 56px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 91.2px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 36.8px;
    line-height: 51.2px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 24px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 36.8px;
    line-height: 51.2px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 60px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 68.8px;
    left: 204.8px;
    display: flex;
    gap: 28px;
  }

  #titulo-form-contato {
    font-size: 64px;
    line-height: 48px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 44.8px;
  }

  #sub-titulo-form-contato {
    font-size: 40px;
    line-height: 48px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 1200px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 86.4px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 50px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 91.2px;
    font-size: 32px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 28px;
    line-height: 28.8px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 56px;
  }

  #submit-enviar {
    width: 280px;
    height: 104px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 48px;
    line-height: 35.2px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1920px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 109.2px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 48px;
    line-height: 62.4px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.048em;
    color: #FFFFFF;
    margin-left: 37.5px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 42px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 68.4px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 27.6px;
    line-height: 38.4px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 18px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 27.6px;
    line-height: 38.4px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 45px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 51.6px;
    left: 153.6px;
    display: flex;
    gap: 21px;
  }

  #titulo-form-contato {
    font-size: 48px;
    line-height: 36px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 33.6px;
  }

  #sub-titulo-form-contato {
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 900px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 64.8px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 37.5px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 68.4px;
    font-size: 24px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 21px;
    line-height: 21.6px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 42px;
  }

  #submit-enviar {
    width: 210px;
    height: 78px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 36px;
    line-height: 26.4px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1600px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 91px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 40px;
    line-height: 52px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.040em;
    color: #FFFFFF;
    margin-left: 31.25px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 35px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 57px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 23px;
    line-height: 32px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 23px;
    line-height: 32px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 37.5px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 43px;
    left: 128px;
    display: flex;
    gap: 17.5px;
  }

  #titulo-form-contato {
    font-size: 40px;
    line-height: 30px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 28px;
  }

  #sub-titulo-form-contato {
    font-size: 25px;
    line-height: 30px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 750px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 54px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 31.25px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 57px;
    font-size: 20px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 17.5px;
    line-height: 18px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  #submit-enviar {
    width: 175px;
    height: 65px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 30px;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1440px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 91px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 36px;
    line-height: 46.8px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.040em;
    color: #FFFFFF;
    margin-left: 28.125px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 35px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 57px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 20.7px;
    line-height: 28.8px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 15px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 20.7px;
    line-height: 28.8px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 37.5px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 43px;
    left: 115.2px;
    display: flex;
    gap: 15.75px;
  }

  #titulo-form-contato {
    font-size: 36px;
    line-height: 27px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 28px;
  }

  #sub-titulo-form-contato {
    font-size: 22.5px;
    line-height: 27px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 675px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 54px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 28.125px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 57px;
    font-size: 18px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 15.75px;
    line-height: 16.2px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 35px;
  }

  #submit-enviar {
    width: 157.5px;
    height: 65px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 27px;
    line-height: 19.8px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1366px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 77.653px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 34.15px;
    line-height: 44.395px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.038em;
    color: #FFFFFF;
    margin-left: 26.68px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 29.867px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 48.64px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 19.636px;
    line-height: 27.32px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 12.8px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 19.636px;
    line-height: 27.32px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 32px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 40.79px;
    left: 109.28px;
    display: flex;
    gap: 14.941px;
  }

  #titulo-form-contato {
    font-size: 34.15px;
    line-height: 25.613px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 23.893px;
  }

  #sub-titulo-form-contato {
    font-size: 21.344px;
    line-height: 25.613px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 640.313px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 46.080px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 26.68px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 48.64px;
    font-size: 17.075px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 14.941px;
    line-height: 15.368px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 29.867px;
  }

  #submit-enviar {
    width: 149.406px;
    height: 55.467px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 25.613px;
    line-height: 18.783px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1280px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 80.889px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 32px;
    line-height: 41.6px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.036em;
    color: #FFFFFF;
    margin-left: 25px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 31.111px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 50.667px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 18.4px;
    line-height: 25.6px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 13.333px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 18.4px;
    line-height: 20px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 33.333px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 42.49px;
    left: 102.4px;
    display: flex;
    gap: 14px;
  }

  #titulo-form-contato {
    font-size: 32px;
    line-height: 24px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 24.889px;
  }

  #sub-titulo-form-contato {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 600px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 48px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 25px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 50.667px;
    font-size: 16px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 14px;
    line-height: 14.4px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 31.111px;
  }

  #submit-enviar {
    width: 140px;
    height: 57.778px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 24px;
    line-height: 17.6px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1024px) {
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-top: 77.653px;
  }

  #formulario-main-container {
    background-color: #092E58;
    display: grid;
    grid-template-columns: 25% 75%;
    width: 100vw;
    height: 100vh;
  }

  #form-contato {
    background-color: #FFFFFF;
    border-radius: 58px 0 0 58px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titulo-info-contato {
    font-size: 25.6px;
    line-height: 33.28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    letter-spacing: 0.029em;
    color: #FFFFFF;
    margin-left: 20px;
  }

  #meio-info-contato {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    gap: 29.867px;
  }

  #email-info-contato,
  #endereco-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  #endereco-info-contato {
    margin-top: 48.64px;
  }

  #titulo-endereco-info-container,
  #titulo-email-info-container,
  #titulo-telefones-info-contato {
    font-size: 14.72px;
    line-height: 24px;
    font-weight: 700;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 12.8px;
  }

  #logradouro-endereco-info-container,
  #email-email-info-container,
  .telefones {
    font-size: 14.72px;
    line-height: 19.2px;
    font-weight: 400;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .pe {
    padding-top: 32px;
  }

  #redes-sociais-form {
    position: absolute;
    bottom: 40.79px;
    left: 81.92px;
    display: flex;
    gap: 11.2px;
  }

  #titulo-form-contato {
    font-size: 25.6px;
    line-height: 23.04px;
    font-weight: 700;
    color: #019A34;
    margin-bottom: 23.893px;
  }

  #sub-titulo-form-contato {
    font-size: 16px;
    line-height: 23.04px;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
    width: 480px;
  }

  #form-contato-content {
    width: 80%
  }

  #form-form-contato {
    width: 100%;
    margin-top: 46.08px;
  }

  #email-telefone-form-contato {
    display: flex;
    gap: 20px;
  }

  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 48.61px;
    font-size: 12.8px;
  }

  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }

  .v-label {
    font-family: 'Mulish';
    font-size: 11.2px;
    line-height: 13.824px;
  }

  #div-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 29.867px;
  }

  #submit-enviar {
    width: 112px;
    height: 55.467px;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 19.2px;
    line-height: 16.896px;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}

/* Media Height */
</style>
