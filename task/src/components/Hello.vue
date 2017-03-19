<template>
  <div class="hello">
    <h1 v-text="title"></h1>
    <input type="text" v-model="newItem" v-on:keyup="listenKeyup" @keyup.enter="addNew">
    <p :class="{hide: warn.hide}" v-text="warn.text"></p>
    <ul>
      <li v-for="item in items" :class="{finished: item.isFinished}" @click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from '../store'

export default {
  name: 'hello',
  data () {
    return {
      title: 'Welcome to Bilibili Live',
      items: Store.fetch(),
      newItem: '',
      warn: {
        text: '请不要添加空字符',
        hide: true
      }
    }
  },
  methods: {
    toggleFinish: function (item) {
      item.isFinished = !item.isFinished;
    },
    listenKeyup: function () {
      this.warn.hide = true;
    },
    addNew: function () {
      if (this.newItem.trim() == '') {
        this.warn.hide = false;
        this.newItem = '';
        return;
      }
      this.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = '';
    }
  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
  user-select: none;
  cursor: pointer;
}

a {
  color: #42b983;
}

.finished {
  text-decoration: line-through;
}

.hide {
  visibility: hidden;
}
</style>
