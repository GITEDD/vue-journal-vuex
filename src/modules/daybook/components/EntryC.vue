<template>
  <div class="entry-container mb-3 pointer p-2"
   @click="$router.push({name:'entry', params:{id:10}})"
  >

    <!--title-->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">junio</span>
        <span class="mx-2 fw-ligth">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente at accusantium aliquid error, id illum doloremque eum nobis! Distinctio quibusdam ad dignissimos suscipit, iure in enim! Impedit quia officiis molestiae.
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container{
    border-bottom:1px solid #2c3e50;
    transition:0.2s all ease-in;

    &:hover{
       background-color:lighten($color: grey, $amount: 45);
       transition:0.2s all ease-in;
    }

    .entry-description{
      font-size: 12px;
    }
  
  
  
  }
  

</style>