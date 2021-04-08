export class Item{
    constructor(id, name, description='', price=0, category='general', images = []){
        this.id = id,
        this.name = name,
        this.description = description,
        this.price = price,
        this.images = images,
        this.category = category
    }
}
