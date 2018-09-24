<template>
  <li :class="{completed:option.checked,editing:edit}">
      <div class="view">
          <input class="toggle" type="checkbox" v-model="isChecked"/>
          <label
            @dblclick="dbl(option)"
          >{{option.text}}</label>
          <button class="destroy" @click="del(option)"></button>
      </div>
      <input class="edit" v-model="val" ref="put" @blur="blur(option)" @keyup.esc="putEsc"/>
  </li>
</template>
<script>
  export default {
    props:{
      option:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
         val:this.option.text,
          edit:false,
          oldV:this.option.text
      }
    },
    methods:{
      del(option){
        this.$store.commit('deleteOne',{
          obj:option
        })
      },
      dbl(option){
        this.edit=true
        this.$nextTick(()=>{
          this.$refs.put.focus()
        })
      },
      blur(option){
        this.edit=false
        this.$store.commit('changeOneVlue',{
          obj:option,
          val:this.val
        })
        this.oldV=this.val
      },
      putEsc(){
        this.val=this.oldV
      }
    },
    computed:{
      isChecked:{
        get(){
          return this.option.checked
        },
        set(newV){
          this.$store.commit('changeOne',{
            obj:this.option
          })
        }
      }
    },
  }
</script>
