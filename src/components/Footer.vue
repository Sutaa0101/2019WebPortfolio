<template>
    <div id="footer">
        Copyright 2019 Ryoma Hoshi
    </div>
</template>

<style lang="scss" scoped>
    @import "../style/boxShadow.scss";

    #footer{
        background:rgb(223,223,223);
        position:fixed;
        bottom:0;
        right:0;
        width:100vw;
        text-align: right;
        padding:0.5em 1em;
        z-index:20;
        @include boxShadow();
    }
</style>
