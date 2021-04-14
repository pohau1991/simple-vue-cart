import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

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
   actions: {
      loadItems(){
         axios.get('http://api.cart.local/api/items').then( res =>{
            if(res.data.code == 200){
               let items = res.data.data;
               this.commit('fillItems', items);
            }
            console.log(res.data);
            
         })
         .catch(e =>{
            console.log(e)
         })
      }
   },
   mutations: {
      fillItems(state, items){
         state.items.setItems(items);
      },
      addToCart({state}, item, qty=1){
        this.state.cart.addItem(item, qty);
      },
      removeLineItem({state}, index){
         this.state.cart.removeLineItem(index);
      }
   }
})