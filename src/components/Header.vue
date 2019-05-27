<template>
    <div id="header">
        <div class="headBack"></div>
        <div class="headText">
            <router-link to="/" class="headTitle">Portfolio - Site</router-link>
            <!-- <p class="headSub">Reality</p> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #header{
        font-family: "游明朝";
        position: fixed;
        z-index:20;
    }
    .headBack{
        background: linear-gradient(
            rgb(253, 233, 193),
            rgb(236, 215, 161)
            );
        height:25vh;
        width:110vw;
        transform:rotate(-4deg);      
        position: relative;
        top:-10vh;
        left:-1em;
        @include boxShadow();
    }
    .headText{
        user-select: none;
        position: absolute;
        top:0;
        margin:1em;
        width:max-content;
        .headTitle{
            font-size:2em;
            text-decoration: none;
        }
        .headSub{
            font-size:1em;
        }
    }
</style>
