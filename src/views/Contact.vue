<template>
    <div id="contact">
        <p class="title">Contact</p>
        <div class="content">
            <p>ポートフォリオを閲覧していただき、ありがとうございます。</p>
            <p>お気軽にご連絡、お問い合わせください。</p>
            <a class="mailButton" href="mailto:sutaahbts@protonmail.com">メールはこちらから</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #contact{
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

        .mailButton{
            display: block;
            text-align:center;
            width:max-content;
            margin:1em auto;
            background:rgb(255,248,234);
            padding:0.5em 1em;
            text-decoration: none;
            font-size:1.2em;
            transition: 0.2s;
            cursor: pointer;
            opacity:0.6;
            @include buttonShadow();
            &:hover{
                opacity: 1;
                @include boxShadow(0,2px);
            }
        }
    }
</style>
