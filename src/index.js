import Vuex from 'vuex';
import Vue from 'vue';

import ItemList from './class/itemList';
import Cart from './class/cart';
//import axios from 'axios';



// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
   modules: {
     
   },
   state: {
      items: new ItemList(),
      cart: new Cart()
   },
   mutations: {
      addToCart({state}, item, qty=1){
        this.state.cart.addItem(item, qty);
      },
      removeLineItem({state}, index){
         this.state.cart.removeLineItem(index);
      }
   }
})