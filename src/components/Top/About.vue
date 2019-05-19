<template>
    <div id="about">
        <div class="aboutBack"></div>
        <div class="content">
            <div class="label">About</div>
            <div class="aboutText">
                <p>このサイトは、星綾真のポートファリオサイトです。</p>
                <p>高校から独学でサイト制作を学び、現在 Webコーダー として転職を希望中。</p>
                <p>html / css / javascript / typescript / jQuery etc..</p>
            </div>
            
            <router-link to="/about">
                <div class="button">詳細へ</div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../style/boxShadow.scss";
    @import "../../style/labelBase.scss";

    #about{
        .content{
            position: relative;
            top: -16em;
        }
        .label{
            top:-25px;
            left:-20px;
            @include labelBase(rgb(230,238,254),-5deg);
            @include boxShadow(4px,4px);
        }
        .button{
            user-select: none;
            background:rgb(230,238,254);
            border-right:1em solid rgb(126,168,254);
            font-size:2em;
            width:4em;
            padding:0.1em 0.5em;
            display:inline-block;
            position: absolute;
            right:0;

            transition: 0.25s;
            @include boxShadow(0,4px);
            &:hover{
                @include boxShadow(0,3px);
                opacity:0.8;
            }
        }
        .aboutBack{
            background: linear-gradient(
                150deg,
                rgb(193,213,253),
                rgb(126,168,254)
                );
            width:110vw;
            height:16em;
            position: relative;
            transform: rotate(2deg);
            left:-10px;
            @include boxShadow();
        }
        .aboutText{
            font-size:1.2em;
            text-indent: 1em;
            margin:auto;
            position:relative;
            top:0em;
        }
    }
</style>
