<template>

    <div>
        <div class="container  mx-auto">
           
           <div class="mx-auto flex justify-between items-center py-6">
                <nuxt-link to="/" class="flex font-size-32 font-medium items-center">
                    <img class="mr-3" src="~/assets/img/logo.png"> Bengal shop
                </nuxt-link>

                <div class="w-96">
                    <div class=" border  border-gray-100 p-1 flex rounded-full items-center">
                        <div class="min-w-max px-3">
                            <span><fa :icon="['fa', 'search']"/></span>
                        </div>
                        <input class="w-full px-3 pxy-1 focus:outline-none" type="search" placeholder="Search here ...">
                        <button class="bg-gray-500 bs-button-bg px-6 rounded-full py-2 text-white" type="submit">Search</button>

                    </div>
                </div>

                <div class="min-w-max flex items-center">
                    <nuxt-link class="bs-icon-box hover:bg-gray-200 inline-block flex items-center justify-center" to="/">
                        <span><fa :icon="['fa', 'heart']"/></span>
                    </nuxt-link>
                    <nuxt-link class="relative mx-4" to="/cart">
                        <span class="bs-icon-box hover:bg-gray-200 inline-block flex items-center justify-center"><fa :icon="['fa', 'shopping-cart']"/></span>
                        <span class="absolute bg-red-600 w-4 h-4 top-0 right-0 rounded-full text-xs flex justify-center items-center text-white">{{count}}</span>
                    </nuxt-link>
                    <nuxt-link class="flex items-center" to="/">
                        <span class="bs-icon-box hover:bg-gray-200 inline-block flex items-center justify-center"><fa :icon="['fa', 'user']"/></span>
                        <span>Account</span>
                    </nuxt-link>
                </div>
           </div>

           <div class="flex items-center">


               <div v-click-outside="menuClose" class="w-96 relative">


                   <div @click.prevent="menuClick" class="bs-dark-green-bg relative z-20 flex rounded-full px-4 py-2 cursor-pointer">
                       <div class="min-w-max text-white">
                            <span><fa :icon="['fa', 'list']"/></span>
                       </div>
                       <div class="w-full text-white text-center px-6">
                           All Categories
                       </div>
                       <div class="min-w-max text-white">
                            <span><fa :icon="['fa', 'angle-down']"/></span>
                       </div>
                   </div>

                   <div v-bind:class="allCategoryMenu ? 'block visible' : 'hidden invisible'" class="absolute bs-dark-green-bg z-10 w-full -mt-5 pt-6 pb-4 rounded-b-2xl">
                        <ul>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Fruits</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Vegetables</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        <li><nuxt-link class="block text-white py-2 px-4 hover:text-black" to="/">Lorem ispum category</nuxt-link></li>
                        </ul>
                    </div>


               </div>



               <div class="w-full">
                   <ul class="flex justify-center">
                        <li><nuxt-link class="p-4" to="/">Home</nuxt-link></li>
                        <li><nuxt-link class="p-4" to="/">Shop</nuxt-link></li>
                        <li><nuxt-link class="p-4" to="/">About</nuxt-link></li>
                        <li><nuxt-link class="p-4" to="/">Contact</nuxt-link></li>
                        <li><nuxt-link class="p-4" to="/">FAQs</nuxt-link></li>
                        <li><nuxt-link class="p-4" to="/">Offers</nuxt-link></li>
                   </ul>
               </div>

               <div class="min-w-max bs-dark-orange-color flex">
                   <nuxt-link to="/"> 
                        <span class="mr-3"><fa :icon="['fa', 'percent']"/></span>
                        Special Offers
                   </nuxt-link>
               </div>

           </div>
            

        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
        allCategoryMenu: false,
        count: 0
        }
    },

    methods: {
        menuClick() {
            this.allCategoryMenu = !this.allCategoryMenu;
        },
        menuClose() {
            this.allCategoryMenu = false
        },



     async   updateData(){
           this.count = await this.$store.getters["cart/getCount"]; 
    }


    },

    mounted(){

        this.$store.dispatch("cart/nuxtServerInit")
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