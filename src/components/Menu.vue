<template>
    <div id="menu">
        <button id="menuOpen" ref="menuOpen" v-on:click="menuOpen">
            <i class="fas fa-bars"></i>
            </button>
        <button id="menuClose" ref="menuClose" class="displayNone" v-on:click="menuClose">
            <i class="fas fa-times"></i>
            </button>
        <div id="menuList" ref="menuList" class="displayNone">
            <p class="menuTitle">MENU</p>
            <ul>
                <router-link to="/">
                    <li v-on:click="menuClose">Top</li>
                    </router-link>
                <router-link to="/about">
                    <li v-on:click="menuClose">About</li>
                    </router-link>
                <router-link to="/works">
                    <li v-on:click="menuClose">Works</li>
                    </router-link>
                <router-link to="/contact">
                    <li v-on:click="menuClose">Contact</li>
                    </router-link>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component({
})

export default class extends Vue{
    menuOpen() {
        (this.$refs.menuClose as Element).removeAttribute("class");
        (this.$refs.menuList as Element).removeAttribute("class");
        (this.$refs.menuOpen as Element).setAttribute("class","displayNone");
    }
    menuClose() {
        (this.$refs.menuOpen as Element).removeAttribute("class");
        (this.$refs.menuList as Element).setAttribute("class","displayNone");
        (this.$refs.menuClose as Element).setAttribute("class","displayNone");
    }
}
</script>


<style lang="scss" scoped>
    #menu{
        a{
            text-decoration: none;
        }
        @mixin menuFont(){
            position:fixed;
            z-index:40;
            font-size:5em;
            top:0.125em;
            opacity:0.6;
            transition:0.2s;
            padding:0;
            border:none;
            background:none;
            color:#666;
            @media screen and (max-width:400px){
                font-size:3em;
            }
            &:hover{
                opacity:1;
            }
        }
        .displayNone{
            display:none;
        }
        #menuOpen{
            @include menuFont();
            right:0.5em;
        }
        #menuClose{
            @include menuFont();
            right:0.6em;
        }
        #menuList{
            font-family: "Cambria";
            position:fixed;
            z-index:30;
            width:100vw;
            height:100vh;
            background:linear-gradient(
            rgb(255,252,234),
            rgb(247,242,210)
            );
            text-align:center;
            transition:0.2s;
            padding-top:2.5em;
            user-select:none;
            .menuTitle{
                font-size:3em;
            }

            ul{
                width:fit-content;
                margin:auto;
                margin-top:2em;
                list-style-type: none;
                padding:0;
                font-size:2em;
                li{
                    margin-bottom:0.5em;
                }
            }
        }
    }
</style>
