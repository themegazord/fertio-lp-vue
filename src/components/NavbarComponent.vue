<template>
  <nav id="navbar">
    <img src="./../assets/logo.png" alt="Logo da Fertio Fertilizantes">
    <div id="container-navbar">
      <div id="links-navbar">
        <router-link
          class="link-navbar"
          to="/"
          :class="{ 'active': $route.name === 'home' }">Home
        </router-link>
        <router-link class="link-navbar" to="/quem-somos">Quem Somos</router-link>
        <router-link class="link-navbar" to="/produtos">Produtos</router-link>
        <router-link class="link-navbar" to="/parceiros">Parceiros</router-link>
        <router-link class="link-navbar" to="/contatos">Contatos</router-link>
      </div>
      <button id="button-navbar">Fale com o especialista</button>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style>
#navbar {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #092E58;
  width: 100%;
  height: 90px;
  border-radius: 0 0 50px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px 0 110px;
}

#container-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

#links-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.link-navbar {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;
  transition: .5s;
}

.link-navbar:hover {
  color: #CFFD00;
}

#button-navbar {
  width: 220px;
  height: 45px;
  background-color: #CFFD00;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 24px;
  text-transform: uppercase;
  color: #092E58;
  border-radius: 20px;
}

.active {
  color: #CFFD00;
}
</style>
