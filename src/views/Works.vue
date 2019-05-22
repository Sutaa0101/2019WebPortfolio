<template>
    <div id="works">
        <p class="title">Works</p>
        <div class="content">
            <div class="siteList">
                <a href="https://sutaa0101.github.io/home/" target="_blank">
                    <img src="../assets/digi_site.png" alt="DIGITAL GAMES">
                    </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #works{
        height:calc(100vh - 23vh);
        background:linear-gradient(
        rgb(255,252,234),
        rgb(247,242,210)
        );
        padding-top:23vh;

        .title{
            text-align: center;
            font-size: 3em;
            font-family: "Cambria";
            margin-bottom:1em;
            user-select: none;
        }

        .content{
            p{
                text-indent: 1em;
            }
            ul{
                list-style-type: none;
                margin:0;
            }
            img{
                display:inline-block;
                max-width:225px;
                width:35%;
                transition: 0.2s;
                @include buttonShadow();
                opacity:0.8;

                &:first-child{
                    margin-right:1em;
                }
                &:hover{
                    opacity:1;
                    @include boxShadow(4px,4px);
                }

            }
        }
    }
</style>
