<template>

  <div>

    <div class="p-8">
      <vue-slick-carousel :arrows="false" :dots="true" class="hero-slide">

        <div class="slide-bg rounded-2xl pt-8 pr-8 pl-8">
          <div class="container">
            <div class="flex">
              <div class="w-1/2 mr-6 font-size-32">
                  <p class="bs-dark-green-color font-size-32 mb-4">Save up to 20%</p>
                  <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm Organic 100%</h2>
                  <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                  <nuxt-link to="/" class="bs-button text-base bs-dark-green-bg text-white inline-block rounded-full px-6 py-2">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/slider-1.png" alt="slider-1" >
              </div>

            </div>

          </div>

        </div>

         <div class="slide-bg rounded-2xl pt-8 pr-8 pl-8">
          <div class="container">
            <div class="flex">
              <div class="w-1/2 mr-6 font-size-32">
                  <p class="bs-dark-green-color font-size-32 mb-4">Save up to 30%</p>
                  <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm Organic 100%</h2>
                  <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                  <nuxt-link to="/" class="bs-button text-base bs-dark-green-bg text-white inline-block rounded-full px-6 py-2">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/slider-1.png" alt="slider-1" >
              </div>

            </div>

          </div>

        </div>


         <div class="slide-bg rounded-2xl pt-8 pr-8 pl-8">
          <div class="container">
            <div class="flex">
              <div class="w-1/2 mr-6 font-size-32">
                  <p class="bs-dark-green-color font-size-32 mb-4">Save up to 40%</p>
                  <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm Organic 100%</h2>
                  <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                  <nuxt-link to="/" class="bs-button text-base bs-dark-green-bg text-white inline-block rounded-full px-6 py-2">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/slider-1.png" alt="slider-1" >
              </div>

            </div>

          </div>

        </div>

         <div class="slide-bg rounded-2xl pt-8 pr-8 pl-8">
          <div class="container">
            <div class="flex">
              <div class="w-1/2 mr-6 font-size-32">
                  <p class="bs-dark-green-color font-size-32 mb-4">Save up to 50%</p>
                  <h2 class="text-7xl font-bold mb-6 text-gray-800">Bengal Vegetable farm Organic 100%</h2>
                  <p class="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula faucibus massa est elit maecenas.</p>

                  <nuxt-link to="/" class="bs-button text-base bs-dark-green-bg text-white inline-block rounded-full px-6 py-2">Shop Now</nuxt-link>
              </div>
              <div class="w-1/2 flex justify-end">
                <img width="550" src="~/assets/img/slider-1.png" alt="slider-1" >
              </div>

            </div>

          </div>

        </div>

       </vue-slick-carousel>

    </div>


    <div class="container mx-auto mt-20">

      <h3 class="text-4xl mb-6">Search By Category</h3>

      <div class="flex items-center mb-10">

        <div class="w-32 bs-dark-green-bg" style="height:3px"></div>
        <div class="w-full bg-gray-200" style="height: 2px"></div>
      </div>

      <vue-slick-carousel class="category-carousel  mb-10 text-center" v-bind="categoryCarouselSettings">
       
        <div class="bg-gray-100 p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-1.png" alt="category-1">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-2.png" alt="category-2">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-3.png" alt="category-3">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-4.png" alt="category-4">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-5.png" alt="category-5">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-6.png" alt="category-6">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <div class="bg-gray-100 p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/category-4.png" alt="category-4">
          </div>
          <h4 class="text-xl text-center">Groceries</h4>
        </div>

        <template #prevArrow="arrowOption">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </template>

        <template #nextArrow="arrowOption">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </template>

      </vue-slick-carousel>

        <div class="flex -mx-6 mb-14">
          <div class="w-1/2 px-6">
            <div class="promo-bg-1 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold font-size-46 mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bg-white bs-dark-orange-color bs-button text-base inline-block rounded-full px-6 py-2">Order Now</nuxt-link>
              </div>
            </div>
          </div>

          <div class="w-1/2 px-6">
            <div class="promo-bg-2 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold font-size-46 mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bg-white bs-button bs-dark-orange-color text-base inline-block rounded-full px-6 py-2">Order Now</nuxt-link>
              </div>
            </div>
          </div>
        </div>



      <h3 class="text-4xl mb-6">Popular Brands</h3>

      <div class="flex items-center mb-10">

        <div class="w-32 bs-dark-green-bg" style="height:3px"></div>
        <div class="w-full bg-gray-200" style="height: 2px"></div>
      </div>

      <vue-slick-carousel class="category-carousel  mb-10 text-center" v-bind="categoryCarouselSettings">
       
        <div class=" p-4">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-1.png" alt="brand-1">
          </div>
        </div>

        <div class=" p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-2.png" alt="brand-2">
          </div>
        </div>

        <div class=" p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-3.png" alt="brand-3">
          </div>
        </div>

        <div class=" p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-4.png" alt="brand-4">
          </div>
        </div>

        <div class=" p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-5.png" alt="brand-5">
          </div>
        </div>

        <div class=" p-4 ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-6.png" alt="brand-6">
          </div>
        </div>

        <div class=" p-4  ">
          <div class="h-32 flex justify-center items-center">
            <img src="~/assets/img/brand-4.png" alt="brand-4">
          </div>
        </div>

        <template #prevArrow="arrowOption">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </template>

        <template #nextArrow="arrowOption">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </template>

      </vue-slick-carousel>


       <div class="flex -mx-6 mb-14">
          <div class="w-1/3 px-6">
            <div class="promo-bg-1 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold font-size-46 mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bg-white bs-dark-orange-color bs-button text-base inline-block bs-rounded-full-btn px-6 py-2"><fa :icon="['fa', 'arrow-right']"/> </nuxt-link>
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="promo-bg-2 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold font-size-46 mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bg-white bs-dark-orange-color bs-button text-base inline-block bs-rounded-full-btn px-6 py-2" > <fa :icon="['fa', 'arrow-right']"/> </nuxt-link>
              </div>
            </div>
          </div>

          <div class="w-1/3 px-6">
            <div class="promo-bg-2 bg-cover bg-gray-500 bg-center p-12 rounded">
              <div class="w-2/3">
                <p class="bs-dark-orange-color text-2xl mb-6">Buy 1 Get 1</p>
                <h3 class="font-bold font-size-46 mb-8 leading-tight">Fresh Fruits Collection</h3>
                <nuxt-link to="/" class="bg-white bs-dark-orange-color bs-button text-base inline-block bs-rounded-full-btn px-6 py-2"> <fa :icon="['fa', 'arrow-right']"/> </nuxt-link>
              </div>
            </div>
          </div>


        </div>


    </div>






    <div class="container mx-auto mt-20">
        <p><span> <fa :icon="['fa', 'home']"/> </span> This is index page</p>
    </div>

    
      
  </div>


</template>

<script>

export default {
  name: 'IndexPage',
  data (){
    return {
      categoryCarouselSettings:{
        "slidesToShow":6,
        
      }
    }
  }
}
</script>
