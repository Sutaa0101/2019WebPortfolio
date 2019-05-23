<template>
    <div id="works">
        <p class="title">Works</p>
        <div class="content">
            <div class="siteData">
                <a class="siteImage" href="https://sutaa0101.github.io/home/" target="_blank">
                    <img src="../assets/digi_site.png" alt="DIGITAL GAMES">
                    </a>
                <div class="siteContent">
                    <p class="siteTitle">DIGITAL GAMES</p>
                    <p class="siteDate">更新日：2019/4/27</p>
                    <p>自分の制作活動のホームページです。</p>
                    <p>現在は3回目のリメイクです。</p>
                    <p>jsonファイルを読み込ませて、ゲームリストとリンクリストを動的に生成しています。</p>
                </div>
            </div>
            <div class="siteData">
                <a class="siteImage" href="https://trans-humanist.github.io/" target="_blank">
                    <img src="../assets/trans_site.png" alt="トランスヒューマニスト">
                    </a>
                <div class="siteContent">
                    <p class="siteTitle">トランスヒューマニスト</p>
                    <p class="siteDate">更新日：2019/2/24</p>
                    <p>ブラウザで遊べるオンラインボードゲームです。</p>
                    <p>企画、コーディング、UI/UXデザインなどを自分が担当し、友達にサーバーサイドやインフラを担当してもらいました。</p>
                    <p>create.jsを使用し、フロントエンドの開発を初めて行いました。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #works{
        min-height:100vh;
        background:linear-gradient(
        rgb(255,252,234),
        rgb(247,242,210)
        );
        padding-top:23vh;
        padding-bottom:10vh;

        .title{
            text-align: center;
            font-size: 3em;
            font-family: "Cambria";
            margin-bottom:1em;
            user-select: none;
        }

        .content{
            .siteData{
                display:flex;
                flex-wrap: wrap;
                margin-bottom:1em;
                
                .siteImage{
                    margin:auto;
                }
                .siteContent{
                    .siteTitle{
                        text-align: center;
                        font-size:1.3em;
                    }
                    .siteDate{
                        text-align: center;
                        font-size: 0.8em;
                        margin-bottom:0.5em;
                    }

                }
            }

            p{
                text-indent: 1em;
            }
            ul{
                list-style-type: none;
                margin:0;
            }
            img{
                display:inline-block;
                max-width:300px;
                width:100%;
                transition: 0.2s;
                @include buttonShadow();
                opacity:0.8;
                &:hover{
                    opacity:1;
                    @include boxShadow(4px,4px);
                }

            }
        }
    }
</style>
