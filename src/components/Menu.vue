<template>
    <div id="menu">
        <div class="menuButton">
            <i class="fas fa-bars"></i>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>


<style lang="scss" scoped>
    #menu{
        .menuButton{
            position:fixed;
            z-index:40;
            font-size:5em;
            top:0.125em;
            right:0.5em;
            opacity:0.6;
            cursor: pointer;
            transition:0.2s;
            user-select: none;
            @media screen and (max-width:400px){
                font-size:3em;
            }

            &:hover{
                opacity:1;
            }
        }
    }
</style>
