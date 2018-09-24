<template >
   <ul class="todo-list">
      <Item
        v-for="item,index in this.$store.state.list.filter(e=>e.checked)"
        :key="item.id"
        :option="item"
      ></Item>
  </ul>
</template>
<script >
import Item from '../item'
export default {
  components:{Item}
}
</script>

