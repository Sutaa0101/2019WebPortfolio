<template>
    <div id="title">
        <h1 class="logo">Portfolio</h1>
        <p class="author">2019.5.19 - Ryoma Hoshi</p>
    </div>
</template>

<style lang="scss" scoped>
    #title{
        font-family: "游明朝";
        text-align: center;
        text-shadow: 0 4px 5px;
        user-select: none;
        margin-bottom:8em;

        .logo{
            font-weight: normal;
            font-size:10em;
            margin:0;
            @media screen and (max-width:630px){
                font-size:5em;
            }
        }
        .author{
            font-size: 1em;
        }
    }
</style>
