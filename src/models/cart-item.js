export class CartItem {
    constructor(id, title, quantity, imageUrl, price, totalAmount) {
        this.id = id
        this.title = title
        this.quantity = quantity
        this["image_url"] = imageUrl
        this.price = price
        this.totalAmount = totalAmount
    }
}