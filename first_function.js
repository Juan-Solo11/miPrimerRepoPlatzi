function calculatedDiscountedPrice (price, discountPercentage) {
    const discount = price * discountPercentage / 100
    const priceWithDiscount = price - discount
    
    return priceWithDiscount
}

const originalPrice = 1000
const discountPercentage = 15
const finalPrice = calculatedDiscountedPrice(originalPrice, discountPercentage)

console.log(`Original Price: $` + originalPrice)
console.log(`Discount Percentage: ` + discountPercentage + `%`)
console.log(`Final Price: $` + finalPrice)