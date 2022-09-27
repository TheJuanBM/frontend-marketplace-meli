import { SearchIcon } from "_assets";
import { BoxMessage } from "_components";
import { useSearch } from "_hooks";

export function HomeScreen() {
  const { handleSearch } = useSearch();

  return (
    <BoxMessage
      Icon={SearchIcon}
      titleBox="Busca lo que deseas"
      buttonText="Comenzar a buscar"
      description="Escribe lo que quieres encontrar en el buscador"
      buttonAction={handleSearch}
    />
  );
}
