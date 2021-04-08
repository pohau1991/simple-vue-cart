<template>
  <div id="app">
    <nav>
      <div class="navigationContainer">
        <div class="linkContainer">
          <router-link :to="{ name: 'hello' }">Hello</router-link>
          <router-link :to="{ name: 'catalog' }">Catalog</router-link>
        </div>
        <div class="cartContainer">
          <div class="cart" @click="toggleCart()">
            <i class="fa fa-shopping-cart"></i>
            {{ cart.itemCount }}
          </div>
        </div>
      </div>
    </nav>
    <div class="viewContainer">
      <div class="routedView">
        <router-view></router-view>
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
              <button type="button" class="btn remove-btn" @click="removeLineItem(index)">X</button>
            </div>         
          </div>
          <div class="cartInfoContainer">
            <p>Subtotal: {{currencyFormatter.format(cart.subtotal)}}</p>
          </div>
        </div>
        <h3 v-else>Empty Cart</h3>
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
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>