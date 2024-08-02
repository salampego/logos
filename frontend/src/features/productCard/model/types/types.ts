import { product } from "entities/products/types/types";

export interface IProductCardProps {
  id: number;
}

export interface IRecommendedItemProps {
  recommended: product[];
}
