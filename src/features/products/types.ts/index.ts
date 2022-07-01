export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type ProductsResponse = {
  data: {
    items: number;
    total: number;
    pages: number;
    products: Product[];
  };
};
