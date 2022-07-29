import Book from "src/app/shared/backend/book/book.model";

class CartItem {

    constructor(public book: Book, public quantity: number) { }

    get totalPrice(): number {
        return this.book.price * this.quantity;
    }

}

export default CartItem