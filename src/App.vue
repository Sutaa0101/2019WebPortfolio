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

  #app{
    color:#666666;
    overflow: hidden;
  }
</style>
