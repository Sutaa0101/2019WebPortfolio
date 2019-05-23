<template>
    <div id="pageTop">
        <a href="#top">＞</a>
    </div>
</template>

<style lang="scss" scoped>
    #pageTop{
        position:fixed;
        display: block;
        font-size:3em;
        bottom:1.5em;
        right:0.5em;
        transform: rotate(-90deg);
        opacity: 0.6;
        user-select: none;
        transition: 0.2s;
        cursor: pointer;
        a{text-decoration: none;}
        &:hover{
            opacity: 1;
        }
    }
</style>
