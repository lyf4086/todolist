import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let list=JSON.parse(localStorage.getItem('todo8-18'))||[]


let store=new Vuex.Store({
  strict:true,
  state:{
    list:list
  },
  mutations:{
    changeOne(state,payload){
      let obj=payload.obj
      list.find(e=>{
        if(e==obj){
          e.checked=!e.checked
        }
      })
    },
    deleteOne(state,payload){
      let index=state.list.findIndex(e=>e==payload.obj)
      state.list.splice(index,1)
    },
    changeOneVlue(state,payload){
      let obj=payload.obj
      let index=state.list.findIndex(e=>e==obj)
      let val=payload.val
      if(val==''){
        state.list.splice(index,1)
      }else{
        state.list.find(e=>{
          if(e==obj){
            e.text=val
          }
        })
      }

    },
    addData(state,payload){
      let val=payload.val
      state.list.push({
        text:val,
        checked:false,
        id:Date.now()
      })
    },
    changeAll(state,payload){
      state.list.forEach(e=>e.checked=payload.newV)
    }
  }
})

store.subscribe((mutation,state)=>{
    // console.log(mutation)
    localStorage.setItem('todo8-18',JSON.stringify(state.list))

})




export default store
