export interface productsBasket {
  id: number;
  productName: string;
  ingredients: string;
  price: number;
  quantity: number;
  totalProductPrice: number;
}

export interface basket {
  products: productsBasket[];
  totalQuantity: number;
  totalPrice: number;
}

export interface PayloadAddProduct {
  id: number;
  productName: string;
  ingredients: string;
  price: number;
}
