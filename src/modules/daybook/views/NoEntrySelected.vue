<template>
    <div class="d-flex justify-content-center">
      <h1 class="align-self-center"> No hay nada seleccionado </h1>
    </div>
    <FabCom />
  
  </template>
  
  <script>
      
    import { defineAsyncComponent } from 'vue';
  
  export default {
      components: {
           FabCom: defineAsyncComponent(() => import('../components/FabCom.vue'))
      }
  }
  </script>
  
  <style lang="scss" scoped>
      div{
          height: 100%;
      }
  
      button{
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 80px;
          height: 80px;
          border-radius: 100px;
     }
  
  </style>