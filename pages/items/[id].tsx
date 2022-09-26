import { ResponseItemDetail } from "_interfaces";
import { LayoutApp } from "_layouts";
import { Detail } from "_screens";

export default function DetaildItem({ data }) {
  return (
    <LayoutApp title={data.title} metaContent="Detalle del producto">
      <Detail {...data} />
    </LayoutApp>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://one-server-marketplace-meli.herokuapp.com/api/items/${params.id}`
  );

  const data = (await response.json()) as ResponseItemDetail;

  return {
    props: {
      data: data.item,
    },
  };
}
