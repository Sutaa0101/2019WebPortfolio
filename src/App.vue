<template>
  <div id="app">
    <Header/>
    <Menu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Menu from './components/Menu.vue';

@Component({
  components: {
    Header,
    Menu,
    Footer,
  },
})

export default class extends Vue {

}
</script>


<style lang="scss">
  body{
    margin:0;
  }
  p{
    margin:0;
  }
  a{
    color:#666;
  }
  #app{
    color:#666;
    overflow: hidden;

    .content{
      margin:0 10vw;
      @media screen and (min-width:1200px){
        margin:0 20vw;
      }
    }
  }
</style>
