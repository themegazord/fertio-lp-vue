<template>
  <div
    :class="{
      'quem-somos': this.$route.name === 'quem-somos',
      'formulario': this.$route.name === 'formulario' || this.$route.name === 'contatos',
      'menu-lateral': MenuLateral,
      'produtos': this.$route.name === 'produtos',
      }">
    <a><font-awesome-icon icon="fa-brands fa-square-facebook" id="fb"/></a>
    <a href="https://instagram.com/fertiofertilizantes"
      target="_blank"
      rel="noopener noreferrer"
      class="ig">
      <font-awesome-icon icon="fa-brands fa-square-instagram" id= "ig"/>
    </a>
    <a><font-awesome-icon icon="fa-brands fa-telegram" id="tg"/></a>
  </div>
</template>

<script>
export default {
  props: ['MenuLateral'],
  data: () => ({

  }),
};
</script>

<style>
.quem-somos > a {
  text-decoration: none;
  color: #092E58;
}

.produtos > a {
  text-decoration: none;
  color: #092E58;
}

.formulario > a {
  text-decoration: none;
  color: #FFFFFF;
}

.menu-lateral > a {
  color: #092E58;
}
</style>
