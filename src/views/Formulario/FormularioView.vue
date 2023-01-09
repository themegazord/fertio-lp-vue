<template>
  <div id="formulario-main-container">
    <div id="info-contato-formulario-main-container">
      <h1 id="titulo-info-contato">Informações de contato</h1>
      <div id="meio-info-contato">
        <div id="endereco-info-contato">
          <span id="titulo-endereco-info-container">Endereço</span>
          <p id="logradouro-endereco-info-container">
            R. Júlio Perneta, 250 Curitiba, PR 80810-110
          </p>
        </div>
        <div id="email-info-contato">
          <span id="titulo-email-info-container">E-mail</span>
          <p id="email-email-info-container">contato@fertio.com.br</p>
        </div>
        <div id="telefones-info-contato">
          <span id="titulo-telefones-info-contato">Telefones</span>
          <p class="telefones">(41) 3336-5465</p>
          <p class="telefones">(41) 9 9626-7118</p>
          <p class="telefones">(87) 9 8834-7713</p>
        </div>
      </div>
      <RedeSocial id="redes-sociais-form"/>
    </div>
    <div id="form-contato"></div>
  </div>
</template>

<script>
import RedeSocial from '../../components/RedeSocialComponent.vue';

export default {
  components: { RedeSocial },
};
</script>

<style>
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
}

#redes-sociais-form {
  color: #FFFFFF;
}
</style>
