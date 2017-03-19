<template>
    <nav id="nav-list">
        <a :class="{active: link.isSelected}" v-for="link in links" :href="link.href" data-key="link.key" @click="changeLink(link.key)">{{link.name}}</a>
    </nav>
</template>

<script>
    export default {
        data () {
            return {
                links: [
                    {
                        key: 'sing-dance',
                        name: '唱见舞见',
                        href: '/#/sing-dance',
                        isSelected: true
                    },
                    {
                        key: 'ent-life',
                        name: '生活娱乐',
                        href: '/#/ent-life',
                        isSelected: false
                    },
                    {
                        key: 'online',
                        name: '网络游戏',
                        href: '/#/online',
                        isSelected: false
                    },
                    {
                        key: 'mobile-game',
                        name: '手游直播',
                        href: '/#/mobile-game',
                        isSelected: false
                    },
                    {
                        key: 'draw',
                        name: '绘画专区',
                        href: '/#/draw',
                        isSelected: false
                    },
                    {
                        key: 'otaku',
                        name: '御宅专区',
                        href: '/#/otaku',
                        isSelected: false
                    },
                    {
                        key: 'single',
                        name: '单机联机',
                        href: '/#/single',
                        isSelected: false
                    },
                    {
                        key: 'e-sports',
                        name: '电子竞技',
                        href: '/#/e-sports',
                        isSelected: false
                    }

                ]
            }
        },
        methods: {
            changeLink: function (link) {
                this.links.forEach(function(item) {
                    if (item.key != link) {
                        item.isSelected = false;
                    } else {
                        item.isSelected = true;
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scope>
    nav {
        position: absolute;
        top: 100px;
        bottom: 100px;
        width: 200px;
        text-align: center;
        background-color: beige;

        a {
            display: inline-block;
            width: 100%;
            height: 30px;
            line-height: 30px;

            &:visited {
                color: #2c3e50;
            }

            &.active {
                color: beige;
                background-color: cadetblue;
            }
        }
    }
</style>
