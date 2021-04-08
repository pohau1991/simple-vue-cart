export default class Cart{
    constructor(){
        this.lineItems = [];
    
        this.shipping = 0;
        this.tax = 0;
        this.subtotal = 0;
        this.total = 0;
        this.itemCount = 0;
        
        this.tax_rate = .08;
        this.ship_rate = 10;
    }
    calcTotal(){
        let tempShip = 0;
        let tempSub = 0;
        let tempTax = 0;
        let tempCount = 0;

        this.lineItems.forEach(function(lineItem, index){
            tempSub += (lineItem.item.price*lineItem.qty);
            tempCount +=lineItem.qty;
        });

        if(tempSub > 0){
            tempShip = this.ship_rate;
        }
        tempTax = (tempSub + tempShip) * this.tax_rate;
        this.itemCount = tempCount;
        this.subtotal = tempSub;
        this.shipping = tempShip;
        this.tax = tempTax;

        this.total = this.subtotal+this.shipping+this.tax;
    }
    itemExist(item){
        for(let i = 0; i < this.lineItems.length; i++){
            if(this.lineItems[i].item.id == item.id){
                return i;
            }
        }
        return false;
    }
    addItem(item, qty){
        let exists = this.itemExist(item);
        if(exists === false){
            let temp = {'qty': qty, 'item': item};
            this.lineItems.push(temp);
        }
        else{
            this.lineItems[exists].qty += qty;
        }
        this.calcTotal();
    }
    removeLineItem(index){
        this.lineItems.splice(index, 1);
        this.calcTotal();
    }
}