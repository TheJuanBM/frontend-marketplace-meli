import { Header } from "_components";
import { Response } from "_interfaces";

import Breadcrumb from "./breadcrumb";
import { ItemDetail } from "./itemDetail";
import * as ResultsStyles from "./styles";

export function Results({ items, categories }: Response) {
  return (
    <>
      <Header />
      <main>
        <ResultsStyles.WrapperResult>
          <Breadcrumb categories={categories} />
          <ResultsStyles.SectionItems>
            <ol>
              {items.map((item) => (
                <ItemDetail item={item} key={item.id} />
              ))}
            </ol>
          </ResultsStyles.SectionItems>
        </ResultsStyles.WrapperResult>
      </main>
    </>
  );
}
