<template>
    <div id="header">
        <div class="headBack"></div>
        <div class="headText">
            <p class="headTitle">Portfolio - Site</p>
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
        }
        .headSub{
            font-size:1em;
        }
    }
</style>
