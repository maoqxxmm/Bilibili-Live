<template>
    <area-top-10 :areaKey="areaKey" :value="value"></option>></area-top-10>
</template>

<script>
    import echarts from 'echarts';
    import areaTop10 from '../../components/area_top_10'

    export default {
        data () {
            return {
                areaKey: 'single',
                value: '\"单机联机\"',
            }
        },
        components: {
            areaTop10
        },
    }
</script>

<style lang="scss">
</style>
