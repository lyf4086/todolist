<template>
  <section class="main">
      <input class="toggle-all" type="checkbox"  v-model="all"/>
      <router-view></router-view>
  </section>
</template>
<script>

import Item from './item'
export default {
  components:{Item},
  computed:{
    all:{
      get(){
        return this.$store.state.list.length?this.$store.state.list.every(e=>e.checked):false
      },
      set(newV){
        this.$store.commit('changeAll',{
          newV
        })
      }
    }
  }
}
</script>

