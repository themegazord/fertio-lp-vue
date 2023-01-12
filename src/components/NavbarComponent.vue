<template>
  <nav id="navbar">
    <img src="./../assets/logo.png" alt="Logo da Fertio Fertilizantes" id="logo">
    <div id="container-navbar">
      <div id="links-navbar">
        <router-link class="link-navbar" to="/" :class="{ 'active': $route.name === 'home' }">Home
        </router-link>
        <router-link
          class="link-navbar"
          to="/quem-somos"
          :class="{ 'active': $route.name === 'quem-somos' }">
          Quem Somos</router-link>
        <router-link class="link-navbar" to="/produtos">Produtos</router-link>
        <router-link class="link-navbar" to="/parceiros">Parceiros</router-link>
        <router-link class="link-navbar" to="/contatos">Contatos</router-link>
      </div>
      <button id="button-navbar" @click="vaiProFormulario">Fale com o especialista</button>
      <input v-model="open" type="checkbox" id="checkbox" class="checkbox">
      <label for="checkbox" class="label-menu">
        <a id="hamburger"><i class="fa-solid fa-bars"></i></a>
      </label>
        <div id="menu-lateral" @click.stop>
          <div id="container-logo__menu-lateral">
            <img
              src="./../assets/logo.png"
              alt="Logo da Fertio Fertilizantes"
              id="logo__menu-lateral" />
          </div>
          <div id="container-links__menu-lateral">
            <router-link class="link__menu-lateral" v-for="link, i in links" :key="i" :to="link.to">
              <a>
                <span>
                  <i :class="link.icone"></i>
                  {{ link.titulo }}
                </span>
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </router-link>
          </div>
          <div id="container-rs__menu-lateral">
            <RedeSocial MenuLateral="true" class="rede-social__menu-lateral" />
          </div>
      </div>
    </div>
  </nav>
</template>

<script>
import RedeSocial from './RedeSocialComponent.vue';

export default {
  components: { RedeSocial },
  data: () => ({
    open: false,
    links: [
      {
        icone: 'fa-solid fa-leaf',
        titulo: 'Inicio',
        to: '/',
      },
      {
        icone: 'fa-regular fa-star',
        titulo: 'Quem Somos',
        to: '/quem-somos',
      },
      {
        icone: 'fa-solid fa-box',
        titulo: 'Produtos',
        to: '/produtos',
      },
      {
        icone: 'fa-solid fa-user-group',
        titulo: 'Parceiros',
        to: '/parceiros',
      },
      {
        icone: 'fa-solid fa-user-plus',
        titulo: 'Contato',
        to: '/contato',
      },
    ],
  }),
  methods: {
    vaiProFormulario() {
      this.$router.push({ path: '/formulario' });
    },
    fechaMenuLateral() {
      this.open = false;
    },
  },
  created() {
    window.addEventListener('click', this.fechaMenuLateral);
  },
  destroy() {
    window.removeEventListener('click', this.fechaMenuLateral);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
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

.label-menu,
.checkbox,
#menu-lateral {
  display: none;
}

.active {
  color: #CFFD00;
}

@media screen and (max-width: 1440px) {

  #links-navbar,
  #container-navbar {
    gap: 35px;
  }
}

@media screen and (max-width: 1366px) {

  #links-navbar,
  #container-navbar {
    gap: 25px;
  }

  #navbar {
    padding: 0 110px 0 75px;
  }
}

@media screen and (max-width: 1280px) {
  #links-navbar {
    gap: 15px;
  }

  #navbar {
    padding: 0 70px 0 35px;
  }
}

/* Mobile Navbar */

@media screen and (max-width: 768px) {
  #navbar {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #092E58;
    width: 100%;
    height: 75px;
    border-radius: 0 0 50px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 90px 0 60px;
  }

  #logo {
    height: 75px;
  }

  #container-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  #links-navbar {
    display: none;
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
    display: none;
  }

  .label-menu {
    display: block;
  }
  .checkbox:checked~#wrapper__menu-lateral {
    width: 100vw;
  }

  .checkbox:checked~#menu-lateral {
    width: calc(100vw / 2);
  }

  #wrapper__menu-lateral{
    height: 100vh;
    width: 0;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 19;
  }

  #menu-lateral {
    display: flex;
    flex-direction: column;
    width: 0;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #FFFFFF;
    z-index: 20;
    gap: 5.625rem;
    transition: .5s;
    overflow-x: hidden;
  }

  #container-logo__menu-lateral {
    background-color: #092E58;
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #logo__menu-lateral {
    width: 70%;
    height: 80%;
  }

  .link__menu-lateral {
    display: flex;
    width: 100%;
  }

  .link__menu-lateral a {
    margin-inline: 1rem;
    border-bottom: 0.0625rem solid #4E4E4E;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #092E58;
    padding: 1rem;
    font-family: Inter;
    font-size: 1rem;
    font-weight: 700;
  }

  .link__menu-lateral a>span {
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
  }

  #container-rs__menu-lateral {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .rede-social__menu-lateral {
    position: absolute;
    bottom: 2rem;
    display: flex;
    gap: .5rem;
  }

  #hamburger,
  #close {
    font-size: 26px;
    color: #FFFFFF;
  }

  .active {
    color: #CFFD00;
  }
}
</style>
