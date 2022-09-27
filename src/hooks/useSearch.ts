import { useRouter } from "next/router";

export function useSearch() {
  const { push } = useRouter();

  function handleSearch() {
    const inputSearch = document.getElementById("search") as HTMLInputElement;

    if (inputSearch.value) return push(`/items?search=${inputSearch.value}`);

    return inputSearch.focus();
  }

  return { handleSearch };
}
