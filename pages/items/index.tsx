import { useRouter } from "next/router";
import { Response } from "../../src/interfaces";
import { LayoutApp } from "../../src/layouts/layoutApp";
import { Results } from "../../src/screens";

export default function SearchPage(response: Response) {
  const { query } = useRouter();
  const { search } = query;

  return (
    <LayoutApp
      metaContent={`Resultado de busqueda para ${search}`}
      title={`${search[0].toUpperCase() + search.slice(1)} | MELI 📦`}
    >
      <Results {...response} />
    </LayoutApp>
  );
}

interface GetServerSidePropsParams {
  query: {
    search: string;
  };
}

export async function getServerSideProps({ query }: GetServerSidePropsParams) {
  const response = await fetch(
    `https://one-server-marketplace-meli.herokuapp.com/api/items?q=${query.search}`
  ).then((res) => res.json().then((res) => res as Response));

  return {
    props: {
      items: response.items,
      categories: response.categories ?? [],
    },
  };
}
