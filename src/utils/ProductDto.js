// ProductDto.js

class ProductDto {
  constructor({
    id,
    name,
    category,
    price,
    brand,
    expiryDate,
    manufacturingDate,
    imageFile,
    imageUrl,
    stockQuantity,
    discount,
    available,
    oilType,
    ingredients,
    description,
    isCustomizable = false,
    qrCode,
    amount,
  }) {
    this.id = id;
    this.name = name;
    this.category = category; // Achar, Papad, Chutney
    this.price = price;
    this.brand = brand;
    this.expiryDate = expiryDate;
    this.manufacturingDate = manufacturingDate;
    this.imageFile = imageFile;
    this.imageUrl = imageUrl;
    this.stockQuantity = stockQuantity;
    this.discount = discount;
    this.available = available;
    this.oilType = oilType; // mustard, sesame, etc.
    this.ingredients = ingredients;
    this.description = description;
    this.isCustomizable = isCustomizable;
    this.qrCode = qrCode;
    this.amount = amount; // Weight/volume amount (e.g., 500g, 1kg)
  }

  hasDiscount() {
    return this.discount && this.discount > 0;
  }

  getDiscountedPrice() {
    if (this.hasDiscount() && this.price) {
      const discountAmount = (this.price * this.discount) / 100;
      return this.price - discountAmount;
    }
    return this.price;
  }

  isValidDateRange() {
    if (this.manufacturingDate && this.expiryDate) {
      return new Date(this.expiryDate) >= new Date(this.manufacturingDate);
    }
    return true;
  }
}

export default ProductDto;