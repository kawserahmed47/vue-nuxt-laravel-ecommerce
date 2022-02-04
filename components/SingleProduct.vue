<template>


   <div class="single-bs-product">
    <div class="h-80 relative mb-6">
      <div class="h-full bg-gray-50 flex justify-center items-center p-4">
        <!-- <img :src="getImgUrl(product.image)" > -->
                <img :src="product.image" >

      </div>
      <div class="product-img-hover absolute h-full w-full top-0 left-0 flex justify-center items-center">
        <div class="bg-black absolute h-full w-full opacity-60"></div>


        <div class="">
         

            <div v-if="inCart"  class="relative z-10">
              <div class="flex justify-center items-center text-4xl text-white mb-8">
                <button @click.prevent="addToCart(product,  'minus')" class="h-9 w-9 border border-white rounded-full">-</button>
                <span class="mx-6">{{quantity}}</span>
                <button @click.prevent="addToCart(product,  'plus')" class="h-9 w-9 border border-white rounded-full">+</button>
              </div>
              <div>
                <nuxt-link class="text-white text-2xl" to="/cart">View in cart</nuxt-link>
              </div>
            </div>

            <div v-else class="relative z-10">
              <button @click.prevent="addToCart(product,  'plus')" class="text-white text-2xl" >Add to cart</button>
            </div>


        </div>
        


        <button @click.prevent="productDetails" class="absolute left-0 bottom-0 bg-gray-200 p-2 w-full flex items-center justify-center">Details <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg></button>


      </div>
    </div>

    <h4 class="text-xl mb-3">Product {{product.name}}</h4>
    <p><span class="font-medium bs-dark-orange-color">$ {{product.sale}}</span> <del class="text-gray-400">${{product.price}}</del></p>
  </div>
</template>

<script>
export default {
 name: 'SingleProduct',

  data() {
    return {
      inCart: false,
      quantity: ''
    }
  },

 props: ["product"],
 methods: {


  productDetails(){
    this.$store.dispatch("product-details-modal/triggerModal", this.product)
  },

async  addToCart(product, type){

  try {
   await this.$store.dispatch("cart/addToCart", {
          product: product,
          type: type
        })


  } catch (error) {

    this.$toast.error("Failed! Try again...");

  }
  
    
  },




  updateData(){
      const cart =   this.$store.getters["cart/getCart"];

       if(cart.length) {
          cart.forEach(item => {
            if(item.id === this.product.id) {
              this.inCart = true;
              this.quantity = item.quantity
            }
          })
      }
  },

  getImgUrl(pic) {
      try {
        return require('../assets/img/product-'+pic+'.png');
      } catch (ex) {
        return require('../assets/img/product-1.png');
      }
  }


 },


  mounted(){

    this.updateData();

    this.$store.watch(
      () => {
        return  this.$store.getters["cart/getCart"]
      },
      (val) => {
       
        this.updateData();
        
      },
      {
        deep:true
      }
    );
  
  }

}
</script>

<style>

</style>