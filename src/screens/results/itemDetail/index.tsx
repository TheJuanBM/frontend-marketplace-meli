import Image from "next/image";

import { FreeShippingIcon } from "_assets";
import { WrapperLink } from "_components";
import { Item } from "_interfaces";

import { priceFormat } from "_helpers";
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
            <span>{priceFormat(item.price.amount).format}</span>
            {item.free_shipping && (
              <span title="Envío gratis">
                <FreeShippingIcon />
              </span>
            )}
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
