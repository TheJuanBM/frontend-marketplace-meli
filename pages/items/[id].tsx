import { ResponseItemDetail } from "../../src/interfaces";
import { DetailLayout } from "../../src/layouts";
import { Detail } from "../../src/screens";

export default function DetaildItem({ data }) {
  return (
    <DetailLayout title={data.title}>
      <Detail {...data} />
    </DetailLayout>
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
