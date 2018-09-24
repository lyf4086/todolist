<template>
   <section class="todoapp">
        <div>
          <Myheader></Myheader>
          <Mylist></Mylist>
          <Myfooter></Myfooter>
        </div>
    </section>
</template>
<script>
  import Myheader from './components/myheader.vue'
  import Mylist from './components/mylist.vue'
  import Myfooter from './components/myfooter.vue'
  export default {
    components:{Myheader,Mylist,Myfooter}
  }
</script>
