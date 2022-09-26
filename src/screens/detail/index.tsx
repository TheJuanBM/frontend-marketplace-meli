import Image from "next/image";

import { Breadcrumb, Button, WrapperSection } from "_components";
import { currentStatus, priceFormat } from "_helpers";
import { ItemDetail } from "_interfaces";

import { StylesSectionDetail } from "./styles";

export function Detail(data: ItemDetail) {
  const { format, aroundMoney } = priceFormat(data.price.amount);

  return (
    <>
      <Breadcrumb items={data.categories} />
      <WrapperSection styles={StylesSectionDetail}>
        <div>
          <Image width={400} height={400} alt={data.title} src={data.picture} />
        </div>
        <div>
          <span>
            {currentStatus(data.condition)} - {data.sold_quantity} vendidos
          </span>
          <h1>{data.title}</h1>
          <meta itemProp="price" content={String(aroundMoney)} />
          <div>
            <span>{format}</span>
          </div>
          <Button>Comprar</Button>
        </div>
        <div>
          <h2>Descripción del producto</h2>
          <p>{data.description}</p>
        </div>
      </WrapperSection>
    </>
  );
}
