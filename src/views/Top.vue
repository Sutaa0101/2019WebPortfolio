<template>
    <div id="top">
        <Title/>
        <About/>
        <Works/>
        <Contact/>
        <PageTop/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Title from '../components/Top/Title.vue';
import About from '../components/Top/About.vue';
import Works from '../components/Top/Works.vue';
import Contact from '../components/Top/Contact.vue';
import PageTop from '../components/Top/PageTop.vue';

@Component({
  components: {
    Title,
    About,
    Works,
    Contact,
    PageTop,
  },
})

export default class extends Vue {

}
</script>


<style lang="scss">
  #top{
    background:linear-gradient(
      rgb(255,252,234),
      rgb(247,242,210)
    );
    padding:23vh 0;
  }
</style>
