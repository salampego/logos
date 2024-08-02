export interface product {
  id: number;
  productName: string;
  weight: string;
  price: number;
  ingredients: string;
  proteins: string;
  fats: string;
  carbohydrates: string;
  calories: string;
}

export interface productsState {
  id: number;
  productType: string;
  products: product[];
}
