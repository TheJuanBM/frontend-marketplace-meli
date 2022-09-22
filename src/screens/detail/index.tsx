import Image from "next/image";

import { Header } from "_components";
import { ItemDetail } from "_interfaces";

export function Detail(data: ItemDetail) {
  return (
    <>
      <Header />
      <main>
        <section>
          <Image height={400} width={400} src={data.picture} alt={data.title} />
        </section>
      </main>
    </>
  );
}
