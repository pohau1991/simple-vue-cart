import {Item} from './item';
export default class ItemList{
    constructor(){
        this.items = [];
        this.categories = [];
        this.initItems();
    }
    getFood(){
        return [
            {'id': 1, 'name': 'ice cream', 
            'description': 'sweet dessert made from cold cream','price': 5, 'category': 'dessert'},
            {'id': 2, 'name': 'cake', 'description': 'sweet dessert made from egg and flour','price': 6, 'category': 'dessert'},
            {'id': 3, 'name': 'Ramen', 'description': 'Noodles in hot savory soup','price': 10, 'category': 'entree'},
            {'id': 4, 'name': 'Okonomiyaki', 'description': 'Savory pancake with cabbages','price': 6, 'category': 'snack'},
            {'id': 5, 'name': 'Fruit salad', 'description': 'Assortment of fruits','price': 4, 'category': 'dessert'},
        ]
    }
    initItems(){
        let foods = this.getFood();
        let items = [];
        let cat = [];
        foods.forEach(function(food, index){
            let item = new Item(food.id, food.name, food.description, food.price, food.category);
            console.log('hi');
            items.push(item);
            if(!cat.includes(food.category)){
                cat.push(food.category);
            }
        })
        this.items = items;
        this.categories = cat;
    }
    setItems(tempItems){
        let items = [];
        let cat = [];
        tempItems.forEach(function(tempItem, index){
            let item = new Item(tempItem.id, tempItem.name, tempItem.description, tempItem.price, tempItem.category);
            items.push(item);
            if(!cat.includes(tempItem.category)){
                cat.push(tempItem.category);
            }
        })
        this.items = items;
        this.categories = cat;
    }
}