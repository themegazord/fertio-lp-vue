<!-- eslint-disable max-len -->
<template>
  <div id="produtos">
    <Navbar />
    <div id="produtos-main-container">
      <div id="left-produtos-main-container">
        <h1 id="title-left-produtos">
          <span>Máxima qualidade</span> para você produzir <span>melhor</span>
        </h1>
        <RedesSociais id="redes-sociais-produtos"/>
      </div>
      <div id="right-produtos-main-container">
        <div id="thiosul">
          <img src="../../assets/thiosul.png" alt="Foto do Tiosulfato">
          <p><strong>Thio-Sul®</strong> é uma solução líquida transparente de tiossulfato de amônio que ajuda a aumentar os rendimentos ao satisfazer a <strong>necessidade essencial de nitrogênio e enxofre</strong> de uma cultura. Contém 12% de nitrogênio (N p/p) e 26% de enxofre (S p/p) e é o produto contendo enxofre mais popular usado na indústria de fertilizantes líquidos. Cada litro de Thio-Sul fornece 160 gramas de nitrogênio (N) e 346 gramas de enxofre (S).</p>
        </div>
        <div id="cats">
          <img src="../../assets/cats.png" alt="Foto do CaTs">
          <p><strong>CaTs®</strong> é uma solução neutra a básica, isenta de cloreto, límpida, contendo 6 % de cálcio (Ca p/p) e 10 % de enxofre (S p/p). Um litro de CaTs® contém 75 gramas de cálcio (Ca) e 125 gramas de enxofre (S) na forma de tiossulfato. Pode ser aplicado a uma <strong>grande variedade de culturas.</strong></p>
        </div>
        <div id="kts">
          <img src="../../assets/kts.png" alt="Foto do KTS">
          <p><strong>KTS®</strong> é um fertilizante transparente, sem nitrato e cloreto, que apresenta o maior teor líquido de <strong>potássio e enxofre</strong> disponível no mercado. É uma solução líquida límpida, neutra a básica, sem cloreto, contendo 25% de potássio (K2O p/p) e 17% de enxofre (S p/p). Cada litro de KTS contém 360 gramas de potássio (K2O) e 252 gramas de enxofre (S). KTS pode ser aplicado por gotejamento, aspersão ou irrigação por inundação. Pode ser misturado com outros fertilizantes ou aplicado como <strong>tratamento foliar</strong> em <strong>culturas selecionadas.</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/NavbarComponent.vue';
import RedesSociais from '../../components/RedeSocialComponent.vue';

export default {
  components: {
    Navbar,
    RedesSociais,
  },
};
</script>

<style>
  @media screen and (max-width: 2560px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8rem 11rem 0 5.35rem;
    }

    #title-left-produtos {
      font-size: 4.5rem;
      line-height: 5.2rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 4.2rem;
      gap: 2rem;
      margin-bottom: 5.35rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 5rem 6rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 2.5rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 2rem;
      line-height: 2.5rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 20.5rem;
      height: 15rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: 1.57rem;
    }
  }
  @media screen and (max-width: 1920px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 6rem 8.25rem 0 4rem;
    }

    #title-left-produtos {
      font-size: 3.375rem;
      line-height: 3.9rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 3.15rem;
      gap: 1.5rem;
      margin-bottom: 4rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 3.75rem 4.5rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1.875rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 1.5rem;
      line-height: 1.875rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 15.375rem;
      height: 11.25rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: 1.178rem;
    }
  }
  @media screen and (max-width: 1600px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 5rem 6.875rem 0 3.33rem;
    }

    #title-left-produtos {
      font-size: 2.813rem;
      line-height: 3.25rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 2.625rem;
      gap: 1.25rem;
      margin-bottom: 3.33rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 3.125rem 3.75rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1.563rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 1.25rem;
      line-height: 1.563rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 12.813rem;
      height: 9.375rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: .982rem;
    }
  }
  @media screen and (max-width: 1440px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4.5rem 6.188rem 0 3rem;
    }

    #title-left-produtos {
      font-size: 2.532rem;
      line-height: 2.925rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 2.363rem;
      gap: 1.125rem;
      margin-bottom: 3rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 2.813rem 3.375rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1.407rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 1.125rem;
      line-height: 1.407rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 11.532rem;
      height: 8.438rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: .884rem;
    }
  }
  @media screen and (max-width: 1366px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4.269rem 5.87rem 0 2.846rem;
    }

    #title-left-produtos {
      font-size: 2.402rem;
      line-height: 2.775rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 2.242rem;
      gap: 1.067rem;
      margin-bottom: 2.846rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 2.668rem 3.202rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1.335rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 1.067rem;
      line-height: 1.335rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 10.939rem;
      height: 8.004rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: .839rem;
    }
  }
  @media screen and (max-width: 1280px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 4rem 5.5rem 0 2.667rem;
    }

    #title-left-produtos {
      font-size: 2.25rem;
      line-height: 2.6rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 2.1rem;
      gap: 1rem;
      margin-bottom: 2.667rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 2rem 3rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1.25rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: 1rem;
      line-height: 1.25rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 10.25rem;
      height: 7.5rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: .786rem;
    }
  }
  @media screen and (max-width: 1024px){
    #produtos {
      width: 100%;
      height: 100vh;
      background-color: #FFFFFF;
    }

    #produtos-main-container {
      display: grid;
      grid-template-columns: 37.5% 62.5%;
      height: 100%;
    }

    #left-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3.2rem 4.4rem 0 2.135rem;
    }

    #title-left-produtos {
      font-size: 1.8rem;
      line-height: 2.1rem;
      font-weight: 700;
      color: #575757;
    }

    #title-left-produtos span {
      color: #019A34;
    }

    #redes-sociais-produtos {
      display: flex;
      font-size: 1.68rem;
      gap: .8rem;
      margin-bottom: 2.135rem;
    }

    #right-produtos-main-container {
      max-height: calc(100vh - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /* gap: 3.8rem; */
      margin: 1.6rem 2.4rem 8rem 0;
    }

    #thiosul,
    #cats,
    #kts {
      display: flex;
      gap: 1rem;
    }

    #thiosul > p,
    #cats > p,
    #kts > p {
      font-size: .8rem;
      line-height: 1rem;
      font-weight: 400;
      color: #383A47;
      opacity: .8;
      text-align: justify;
    }

    #thiosul > img,
    #cats > img,
    #kts > img {
      width: 8.2rem;
      height: 6rem;
    }

    #cats {
      flex-direction: row-reverse;
      text-align: right;
    }

    #kts > p{
      font-size: .63rem;
    }
  }
</style>
