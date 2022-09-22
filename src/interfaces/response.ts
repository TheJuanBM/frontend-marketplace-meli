export type Price = {
  amount: number;
  currency: string;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  address: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export interface Response {
  items: Item[];
  categories?: string[];
}

export type ItemDetail = {
  id: string;
  title: string;
  price: Price;
  address: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type ResponseItemDetail = {
  item: ItemDetail;
};
