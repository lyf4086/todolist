<template>
    <footer class="footer" v-show="this.$store.state.list.length">
      <span class="todo-count">
        <strong>{{noCheckedNum}}</strong>
        <span>条未选中</span>
      </span>
      <ul class="filters">
        <router-link to="/all" tag="li">
          <a>all</a>
        </router-link>
        <router-link to="/active" tag="li">
          <a>active</a>
        </router-link>
        <router-link to="/computed" tag="li">
          <a>computed</a>
        </router-link>
      </ul>
    </footer>
</template>
<script>
export default {
  computed:{
    noCheckedNum(){
      return this.$store.state.list.filter(e=>!e.checked).length
    }
  }
}
</script>

