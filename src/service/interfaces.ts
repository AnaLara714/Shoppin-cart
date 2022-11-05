export interface ProductInfo {
  id: number,
  title: string,
  description?: string,
  image: string,
  price: number,
  count?: number,
};

export interface ProductCartInfo {
  id: number,
  title: string,
  image: string,
  price: number,
  count: number,
};