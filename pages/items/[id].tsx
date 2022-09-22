import { useRouter } from "next/router";

export default function DetaildItem() {
  const { query } = useRouter();

  const { id } = query;

  return <div>{id}</div>;
}
