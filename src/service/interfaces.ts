export interface ProductInfo {
  id: number,
  title: string,
  description?: string,
  image: string,
  price: number,
  rating?: {
    count?: number,
    rate?: number,
  },

};

export interface ProductCartInfo {
  id: number,
  title: string,
  image: string,
  price: number,
  count: number,
};