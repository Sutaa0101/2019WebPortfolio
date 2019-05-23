<template>
    <div id="about">
        <p class="title">About</p>
        <div class="content">
            <p>本サイトを閲覧いただき、誠にありがとうございます。</p>

            <br>

            <p>サイト作成者：</p>
            <ul>
                <li>星 綾真</li>
                <li>21歳。現在、埼玉県在住。</li>
            </ul>

            <br>
            <p>高校卒業後、ゲーム系の専門学校へ進学するも、家庭の経済事情により中退。</p>
            <p>しかし、趣味で行っていたゲーム制作、並びにサイト制作をフリーターで行いつつ継続し、此度Webコーダーとして転職を志す。</p>
            <br>
            <p>HTML5 / CSS3 / javaScript / TypeScript / jQuery / Vue.js の経験あり。</p>
            <p>短期ではあるが、アルバイトでの実務経験もあります。</p>
            <br>
            <p>Microsoft Office Specialist Master / 色彩検定2級 の2つの資格を保持。</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    #about{
        min-height:calc(100vh - 33vh);
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
            p{
                text-indent: 1em;
            }
            ul{
                list-style-type: none;
                margin:0;
            }
        }
    }
</style>
