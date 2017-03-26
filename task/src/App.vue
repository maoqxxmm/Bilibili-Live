<template>
  <div id="app">
    <my-header></my-header>
    <my-nav></my-nav>
    <transition>
      <router-view></router-view>
    </transition>
    <!-- <my-footer></my-footer> -->
  </div>
</template>

<script>
import myHeader from './components/Header'
import myNav from './components/Nav'
import myFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    myHeader,
    myNav,
    myFooter
  }
}
</script>

<style>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body,p {
  margin: 0;
  padding: 0;
}

html,body {
  height: 100%;
}

body,header,nav,footer,div {
  box-sizing: border-box;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

.main {
  height: calc(100% - 100px);
  margin: 100px 0 0 200px;
  padding: 20px;
  background-color: antiquewhite;
}
</style>
