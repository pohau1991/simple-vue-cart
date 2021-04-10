<template>
    <div id="catalogContainer">
        <div v-if="items" class='container flex'>
            <section class="filterSection">
                <div class='filterContainer'>
                    <div v-for="category in categories" v-bind:key="category" class="filter btn normal" :class="selectedCategories.includes(category)? 'active' :''" @click="setFilter($event, category)">
                        {{ category }}
                    </div>
                </div>
            </section>
            <section class="menuSection">
                <div class='menuContainer'>
                    <div v-for="item in items" v-bind:key="item.id" class="itemCard">
                        <div class = 'cardImageContainer'>
                            <img v-if="item.images.length">
                            <div class="imagePlaceholder" v-else>

                            </div>
                        </div>
                        <div class="cardInfoContainer">
                            <div class="cardInfo">
                                <p>{{item.name}}</p>
                                <p>{{item.category}}</p>
                                <p>${{item.price}}</p>
                            </div>
                            <button type="button" class="btn btn-action" @click="addToCart(item)">Add to Cart</button>
                        </div>  
                    </div>
                </div>
            </section>
        </div>
        <div v-else class="empty container">
            <h1>You have no items</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
            return{
                selectedCategories: [],
                fullItemList: this.$store.state.items.items
            }
        },
    computed:{
        items(){
            let tempItems = [];
            let categories = this.selectedCategories;
            if(categories.length){
                this.fullItemList.forEach(function(tempItem, index){
                    if(categories.includes(tempItem.category)){
                       tempItems.push(tempItem);
                    }
                })
                return tempItems;
            }
            return this.fullItemList;
        },
        categories(){
            return this.$store.state.items.categories;
        },
        
    },
    created(){
        console.log('stupid');
    },
    methods:{
        setFilter(e, category){
            let temp = this.selectedCategories.indexOf(category);
            if(temp > -1){
                this.selectedCategories.splice(temp, 1);
            }
            else{
                this.selectedCategories.push(category);
            }
        },
        addToCart(item){
            this.$store.commit('addToCart', item);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
