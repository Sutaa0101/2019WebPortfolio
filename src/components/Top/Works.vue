<template>
    <div id="works_top">
        <div class="worksBack"></div>
        <div class="content">
            <div class="label">Works</div>
            <div class="worksText">
                <p>過去に作ったウェブサイトです。</p>
                <p>サムネイルをクリックすると、該当ページを開きます。</p>
            </div>
            <div class="worksLink">
                <a href="https://sutaa0101.github.io/home/" target="_blank">
                    <img src="../../assets/digi_site.png" alt="DIGITAL GAMES">
                    </a>
                <a href="https://trans-humanist.github.io/index.html" target="_blank">
                    <img src="../../assets/trans_site.png" alt="トランスヒューマニスト">
                    </a>
            </div>
            <router-link to="/works">
                <div class="button">詳細へ</div>
            </router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #works_top{
        @import "../../style/boxShadow.scss";
        @import "../../style/labelBase.scss";

        height:27em;

        .content{
            position: relative;
            top: -26em;
        }
        .label{
            top:-25px;
            left:-20px;
            @include labelBase(rgb(254,230,237),2deg);
            @include boxShadow(4px,4px);
        }
        .button{
            user-select: none;
            background:rgb(253,230,238);
            border-right:1em solid rgb(253,161,191);
            font-size:2em;
            width:4em;
            padding:0.1em 0.5em;
            display:inline-block;
            position: absolute;
            right:0;

            transition: 0.25s;

            @include buttonShadow();
            opacity:0.6;

            &:hover{
                opacity: 1;
                @include boxShadow(0,4px);
            }
        }
        .worksBack{
            background: linear-gradient(
                150deg,
                rgb(255,201,232),
                rgb(255,151,196)
                );
            width:110vw;
            height:27em;
            position: relative;
            transform: rotate(-2.5deg);
            left:-10px;
            @include boxShadow();
        }
        .worksText{
            font-size:1.2em;
            text-indent: 1em;
            margin:auto;
            position:relative;
            top:0em;
        }
        .worksLink{
            margin-top:1em;
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
