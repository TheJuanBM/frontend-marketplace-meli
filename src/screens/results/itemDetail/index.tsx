import Image from "next/image";

import { WrapperLink } from "_components";
import { Item } from "_interfaces";

import * as ItemDetailStyles from "./styles";

interface ItemDetailProps {
  item: Item;
}

export function ItemDetail({ item }: ItemDetailProps) {
  const aroundMoney = Math.round(item.price.amount);

  return (
    <ItemDetailStyles.Container>
      <div>
        <div>
          <WrapperLink href={`items/${item.id}`} title={item.title}>
            <Image
              width={200}
              height={200}
              alt={item.title}
              src={item.picture}
            />
          </WrapperLink>
        </div>
        <div>
          <div>
            <span>{`$${aroundMoney.toLocaleString("en-IN")}`}</span>
            {item.free_shipping && <span title="Envío gratis"></span>}
          </div>
          <ItemDetailStyles.TitleItem>
            <WrapperLink href={`items/${item.id}`} title={item.title}>
              <h2>{item.title}</h2>
            </WrapperLink>
          </ItemDetailStyles.TitleItem>
        </div>
      </div>
      <span>{item.address}</span>
    </ItemDetailStyles.Container>
  );
}
