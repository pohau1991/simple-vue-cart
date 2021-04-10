<template>
  <div id="app">
    <nav>
      <div class = 'container flex'>
        <img src="#" class="logo"/>
        <div class="linkContainer">
          <router-link :to="{ name: 'welcome' }" class="navLink">Welcome</router-link>
          <router-link :to="{ name: 'catalog' }" class="navLink">Catalog</router-link>
        </div>
        <div class="cartContainer">
          <div class="cart" @click="toggleCart()">
            <div class="cartText">Cart<i class="fa fa-shopping-cart"></i>{{ cart.itemCount }}</div>
          </div>
          <div class="cartView" :class="showCart ? 'active' : ''">
            <div v-if="cart.itemCount" class="cartViewContainer">
              <div class="cartLineItemContainer">
                <div v-for="(lineItem,index) in cart.lineItems" :key="lineItem.item.id" class="lineItem">
                  <div class="lineItemInfo">
                    <p>{{lineItem.item.name}}</p>
                    <p><label>Qty: </label>{{lineItem.qty}}</p>
                  </div>
                  <div class="lineItemPrice">
                    <p>{{currencyFormatter.format(lineItem.item.price)}}</p>
                  </div>
                  <button type="button" class="btn btn-remove" @click="removeLineItem(index)">X</button>
                </div>         
              </div>
              <div class="cartInfoContainer">
                <p>Subtotal: {{currencyFormatter.format(cart.subtotal)}}</p>
                <button type="button" class="btn btn-action">Checkout</button>
              </div>
            </div>
            <h3 v-else>Empty Cart</h3>
          </div>
        </div>
      </div>
    </nav>
    <div class="viewContainer">
      <div class="routedView">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      cart: this.$store.state.cart,
      currencyFormatter: '',
      showCart: false,
    }
  },
  created(){
    this.currencyFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    })
  },
  methods:{
    toggleCart(){
      this.showCart = !this.showCart;
    },
    removeLineItem(index){
      this.$store.commit('removeLineItem', index);
    }
  }
}
</script>