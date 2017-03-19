<template>
    <footer>
        <p v-text="webInfo"></p>
    </footer>
</template>

<script>
    export default {
        data () {
            return {
                webInfo: 'Support By MaoQ'
            }
        }
    }
</script>

<style lang="scss" scope>
footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: floralwhite;
    padding: 0 20px;

    p {
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
}
</style>
