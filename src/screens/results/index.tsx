import { Breadcrumb, WrapperSection } from "_components";
import { Response } from "_interfaces";

import { ItemDetail } from "./itemDetail";
import * as ResultsStyles from "./styles";

export function Results({ items, categories }: Response) {
  if (!items.length) return null;

  return (
    <>
      <Breadcrumb items={categories} />
      <WrapperSection>
        <ResultsStyles.OrderedLlistResult>
          {items.map((item) => (
            <ItemDetail item={item} key={item.id} />
          ))}
        </ResultsStyles.OrderedLlistResult>
      </WrapperSection>
    </>
  );
}
