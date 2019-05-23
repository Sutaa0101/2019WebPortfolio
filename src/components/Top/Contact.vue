<template>
    <div id="contact_top">
        <div class="contactBack"></div>
        <div class="content">
            <div class="label">Contact</div>
            <!-- <p>以下のフォームからメッセージを送信してください。</p>
            <table class="mailForm">
                <tbody>
                    <tr>
                        <th>
                            <label for="sendName">お名前</label>
                        </th>
                        <td>
                            <input id="sendName"
                                class="textArea"
                                type="text"
                                size="39"
                                v-model="sendName"
                                >
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="address">メールアドレス</label>
                        </th>
                        <td>
                            <input id="address"
                                class="textArea"
                                type="email"
                                size="39"
                                v-model="address"
                                >
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="content">本文</label>
                        </th>
                        <td>
                            <textarea id="message"
                                class="textArea"
                                cols="40"
                                rows="8"
                                v-model="message"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <input id="sendButton" v-on:click="sendMail" type="button" value="送信">
                        </td>
                    </tr>
                </tbody>
            </table> -->
            <p>お気軽にお問い合わせください。</p>
            <a class="mailButton" href="mailto:sutaahbts@yahoo.co.jp">メールはこちらから</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #contact_top{
        @import "../../style/boxShadow.scss";
        @import "../../style/labelBase.scss";

        height:12em;

        .content{
            position: relative;
            top:-12em;
            
            p{
                text-align:center;
            }
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
        .label{
            top:-25px;
            left:-20px;
            @include labelBase(rgb(254,242,218),-1deg);
            @include boxShadow(4px,4px);
        }
        .contactBack{
            background: linear-gradient(
                150deg,
                rgb(254,242,218),
                rgb(249,222,112)
                );
            width:110vw;
            height:12em;
            position: relative;
            transform: rotate(1.5deg);
            left:-10px;
            @include boxShadow();
        }
    }
</style>
