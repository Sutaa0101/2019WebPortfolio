<template>
    <div id="header">
        <div class="headBack"></div>
        <div class="headText">
            <p class="headTitle">Portfolio - Site</p>
            <p class="headSub">Reality</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #header{
        p{
            margin:0;
        }
        font-family: "游明朝";
    }
    .headBack{
        background: linear-gradient(
            rgb(253, 233, 193),
            rgb(236, 215, 161)
            );
        height:25vh;
        width:calc(100vw + 10%);
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
        .headTitle{
            font-size:2em;
        }
        .headSub{
            font-size:1em;
        }
    }
</style>
