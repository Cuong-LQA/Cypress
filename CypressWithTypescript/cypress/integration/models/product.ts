export class Product {
    name: string;
    originPrice: number;
    discountPrice: number;
    promotion: number;

    constructor(name, originPrice, discountPrice, promotion) {
        this.name = name
        this.originPrice = originPrice
        this.discountPrice = discountPrice
        this.promotion = promotion
    }
}