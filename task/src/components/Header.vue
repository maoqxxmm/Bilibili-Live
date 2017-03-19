<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
    export default {
        data () {
            return {
                title: 'Bilibili Live Demo'
            }
        }
    }
</script>

<style lang="scss" scope>
header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: floralwhite;
    padding: 0 20px;
    text-align: center;

    h1 {
        height: 100px;
        line-height: 100px;
        margin: 0;
    }
}
</style>
