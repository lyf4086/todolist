<template>
   <header class="header" >
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="请输入内容"
        v-model="val"
        @keyup.13="up"
        @blur="up"
      />
  </header>
</template>
<script>
export default {
  data(){
    return{
      val:''
    }
  },
  methods:{
    up(){
      if(this.val!=''){
          this.$store.commit('addData',{
          val:this.val
          })
          this.val=''
      }

    }
  }
}
</script>

