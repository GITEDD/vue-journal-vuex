<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span classs="text-success fs-3 fw-bold"> 15</span>
            <span classs="mx-1 fs-3 "> Junio </span>
            <span classs="mx-2 fs-4 fw-ligth"> 2021, jueves </span>
        </div>
        <div>
            <button class="btn btn-danger mx-2"> 
                Borrar 
                <i class="fa fa-trash-alt"> </i>
            </button>
            <button class="btn btn-primary mx-2"> 
                subir foto 
                <i class="fa fa-upload"> </i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-colum px-3 h-75">
        <textarea name="" id="" cols="30" rows="10" placeholder="que sucedio hoy"></textarea>

    </div>
    <FabCom icon="fa-save"/>
    <img
        src="http://www.snut.fr/wp-content/uploads/2015/08/image-de-paysage.jpg"
        alt="entry-picture"
        class="img-Thumbnail"
    >
</template>

<script>
    import { defineAsyncComponent } from 'vue';
    
    export default {
    
        components:{
            FabCom: defineAsyncComponent(()=> import('../components/FabCom.vue'))
        }
    }
    </script>
    
    <style lang="scss" scoped>
    
        textarea{
            font-size: 20px;
            border: none;
            height:100%;
    
            &:focus{
                outline: none;
            }
        }
        img{
            width: 200px;
            position:fixed;
            bottom: 150px;
            right: 20px;
            box-shadow: 0px 5px 10px rgba(#000000,$alpha:0.2);
        }
    
    </style>