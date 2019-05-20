<template>
    <div id="contact">
        <div class="contactBack"></div>
        <div class="content">
            <div class="label">Contact</div>
            <p>以下のフォームからメッセージを送信してください。</p>
            <table class="mailForm">
                <tbody>
                    <tr>
                        <th>
                            <label for="sendName">お名前</label>
                        </th>
                        <td>
                            <input id="sendName" class="textArea" type="text" size="39">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="address">メールアドレス</label>
                        </th>
                        <td>
                            <input id="address" class="textArea" type="email" size="39">
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="content">本文</label>
                        </th>
                        <td>
                            <textarea id="content"
                                class="textArea"
                                cols="40"
                                rows="8"
                            ></textarea>
                        </td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>
                            <input id="sendButton" type="button" value="送信">
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #contact{
        @import "../../style/boxShadow.scss";
        @import "../../style/labelBase.scss";

        height:30em;

        .content{
            position: relative;
            top:-29em;
        }
        .label{
            top:-25px;
            left:-20px;
            @include labelBase(rgb(254,242,218),-1deg);
            @include boxShadow(4px,4px);
        }
        .mailForm{
            margin:1em auto;

            th{
                text-align: right;
                vertical-align: top;
            }
            td{
                .textArea{
                    margin-left:1em;
                    margin-bottom:1em;
                    border:1px solid #999;
                    padding:0.5em;
                    border-radius: 0.5em;
                    resize:none;
                    background:rgb(251,251,251);
                }
                #sendButton{
                    border:none;
                    padding: 0.3em 1em;
                    font-size:1.3em;
                    color:#333;
                    background:rgb(255,248,234);
                    transition: 0.2s;
                    cursor: pointer;
                    opacity:0.8;
                    box-shadow: 0 0 2px 0;
                    &:hover{
                        opacity: 1;
                        @include boxShadow(0,2px);
                    }
                }

                &:last-child{
                    text-align: center;
                }
            }

        }
        .contactBack{
            background: linear-gradient(
                150deg,
                rgb(254,242,218),
                rgb(249,222,112)
                );
            width:110vw;
            height:29em;
            position: relative;
            transform: rotate(1.5deg);
            left:-10px;
            @include boxShadow();
        }
    }
</style>
