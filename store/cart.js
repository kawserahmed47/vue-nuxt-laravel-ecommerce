export const state = () => ({
    cart: []
  });
  
  export const mutations = {

    ADD_TO_CART(state, data) {

        let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));

        if(getProductsLocalStorage === null) {
            localStorage.setItem('cart', '[]');
        }else{
            state.cart = getProductsLocalStorage;
        }

            // save in localstorage

    let newProduct = true;
    getProductsLocalStorage.forEach(item => {
      if(data.product.id === item.id) {
        newProduct = false
      }
    })

    if(newProduct) {
      getProductsLocalStorage.push({
        id: data.product.id,
        name: data.product.name,
        image: data.product.image,
        quantity: 1,
        price: data.product.price,
      });
    } else {
      getProductsLocalStorage.forEach((exitingProduct, index) => {
        if(exitingProduct.id === data.product.id) {
          if(data.type === 'minus') {
            if(getProductsLocalStorage[index].quantity > 1) {
              getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity - 1;
            }
          } else {
            getProductsLocalStorage[index].quantity = getProductsLocalStorage[index].quantity + 1;
          }

        }
      })
    }



    localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))


    // save in store
    state.cart = getProductsLocalStorage;



    // save in user database




    },

    UPDATE_CART(state, localCartData){

        if(!state.cart.length){
          state.cart = localCartData;
        }
    },

    REMOVE_CART(state, product_id) {
        let getProductsLocalStorage = JSON.parse(localStorage.getItem('cart'));
    
    
        if(getProductsLocalStorage.length) {
          getProductsLocalStorage.forEach((item, index) => {
            if(item.id === product_id) {
              // remove this item
              getProductsLocalStorage.splice(index, 1);
            }
          })
        }
    
    
        localStorage.setItem('cart', JSON.stringify(getProductsLocalStorage))
    
        state.cart = getProductsLocalStorage;
    
    }

  }
  
  export const actions = {

    async nuxtServerInit ({commit}) {

        const localCartData = JSON.parse(localStorage.getItem('cart'));
        if(localCartData !== null) {
            await  commit('UPDATE_CART', localCartData)
        }
       
    },

    async addToCart({commit}, product) {

        const localCartData = JSON.parse(localStorage.getItem('cart'));
        if(localCartData !== null) {
            await  commit('UPDATE_CART', localCartData)
        }

        await  commit('ADD_TO_CART', product)
    },


    async  removeCart({commit}, product_id) {

        const localCartData = JSON.parse(localStorage.getItem('cart'));
        if(localCartData !== null) {
            await  commit('UPDATE_CART', localCartData)
        }

        await  commit('REMOVE_CART', product_id)
    },

    

  }
  
  export const getters = {
    getCart(state) {
      return state.cart
    },

    getTotal(state){
      let newTotal = 0;

      state.cart.forEach(item => {
        newTotal += (item.quantity * item.price)
      })

      return newTotal;

    },
    getCount(state){
      let countNew = 0;

      if(state.cart.length) {
        state.cart.forEach(item => {
              countNew = countNew + item.quantity;
          })
      }

      return countNew;

    }


  }
  
  
  