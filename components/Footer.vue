<template>

    <div>
       <div class="container mx-auto py-20">
           <div class="flex -mx-4">
               <div class="w-1/4 px-4 flex items-center">

                    <div class="min-w-max mr-4">
                        <img width="80" src="~/assets/img/call_center.png">
                    </div>
                    <div class="w-full">
                        <h3>24/7 Customer Support</h3>
                       <small>Contact us 24 hours</small> 
                    </div>

               </div>
               <div class="w-1/4 px-4 flex items-center">

                    <div class="min-w-max mr-4">
                        <img width="80" src="~/assets/img/fashion.png">
                    </div>
                    <div class="w-full">
                        <h3>Authentic Products</h3>
                        <small> Buy our products</small>
                       
                    </div>

               </div>

               <div class="w-1/4 px-4 flex items-center">

                    <div class="min-w-max mr-4">
                        <img width="80" src="~/assets/img/pay.png">
                    </div>
                    <div class="w-full">
                        <h3>Secure Payments</h3>
                       <small>Pay us 24 hours</small>
                    </div>

               </div>

               <div class="w-1/4 px-4 flex items-center">

                    <div class="min-w-max mr-4">
                        <img width="80" src="~/assets/img/best_price.png">
                    </div>
                    <div class="w-full">
                        <h3>Best Prices & Offers</h3>
                        <small>Choose your offers </small>
                    </div>

               </div>
           </div>
       </div>

        <div class="bg-gray-200 py-20">
            <div class="container  mx-auto">
                <div class="flex">

                    <div class="w-3/5 pr-10">
                        <nuxt-link to="/" class="flex font-size-32 font-medium items-center">
                            <img class="mr-3" src="~/assets/img/logo.png"> Bengal shop
                        </nuxt-link>
                        <p class="my-6"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam ornare nam est gravida. Netus viverra rhoncus sit magna sapien ac eget parturient id. Est luctus dapibus quam aliquam in nisl turpis. Elit et dictum lacus morbi nec accumsan a in.</p>
                    <div class="flex">
                        <a href="#" class="mr-5" target="_blank"> <img src="~/assets/img/playstore.png" alt="playstore"> </a>
                        <a href="#" target="_blank"> <img src="~/assets/img/appstore.png" alt="appstore"> </a>
                    </div>
                       

                    </div>

                    <div class="w-1/5 pl-6">
                        <h3 class="text-2xl mb-6">About Us</h3>
                        <ul class="leading-loose">
                            <li> <nuxt-link to="/">Cart</nuxt-link> </li>
                            <li> <nuxt-link to="/">Contact</nuxt-link> </li>
                            <li> <nuxt-link to="/">Career</nuxt-link> </li>
                            <li> <nuxt-link to="/">Terms & Conditions</nuxt-link> </li>
                            <li> <nuxt-link to="/">Category</nuxt-link> </li>


                        </ul>
                    </div>
                    <div class="w-1/5 pl-6">
                        <h3 class="text-2xl mb-6">Informations</h3>
                        <ul  class="leading-loose">
                            <li> <nuxt-link to="/">Info</nuxt-link> </li>
                            <li> <nuxt-link to="/">Shipping</nuxt-link> </li>
                            <li> <nuxt-link to="/">Payment</nuxt-link> </li>
                            <li> <nuxt-link to="/">Return</nuxt-link> </li>
                            <li> <nuxt-link to="/">Blog</nuxt-link> </li>

                        </ul>
                    </div>

                </div>

                <div class="flex mt-16">

                    <div class="w-1/3">

                        <ul class="flex">
                            <li> <a href="/" class="p-4"> <span><fa :icon="['fab', 'instagram']"/></span> </a> </li>
                            <li> <a href="/" class="p-4"> <span><fa :icon="['fab', 'facebook']"/></span> </a> </li>
                            <li> <a href="/" class="p-4"> <span><fa :icon="['fab', 'twitter']"/></span> </a> </li>
                            <li> <a href="/" class="p-4"> <span><fa :icon="['fab', 'youtube']"/></span> </a> </li>
                        </ul>

                    </div>

                    <div class="w-1/3">
                        <small>	Copyright &#169; 2022. All Right Reserved by Bengal Shop.</small>
                    </div>

                    <div class="w-1/3">
                        <img src="~/assets/img/payment_method.png" alt="payment_method" >
                    </div>

                </div>
            </div>
        </div>

    </div>
  
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>

</style>