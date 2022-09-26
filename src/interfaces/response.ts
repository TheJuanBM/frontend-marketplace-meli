export type Status = {
  new: string;
  used: string;
  not_specified: string;
};

export type Price = {
  amount: number;
  currency: string;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  status: Status;
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
  status: Status;
  categories: string[];
  address: string;
  picture: string;
  condition: string;
  description: string;
  sold_quantity: number;
  free_shipping: boolean;
};

export type ResponseItemDetail = {
  item: ItemDetail;
};
