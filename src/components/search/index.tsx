import { MagnifyingGlassIcon } from "_assets";
import { useSearch } from "_hooks";
import { useSearchFormController } from "./hooks";
import * as SearchStyles from "./styles";

export function Search() {
  const search = useSearch();
  const form = useSearchFormController(search.handleSearch);

  return (
    <SearchStyles.Container onSubmit={form.handleSubmit}>
      <input
        autoFocus
        type="text"
        id="search"
        name="search"
        tabIndex={2}
        maxLength={120}
        autoCorrect="off"
        spellCheck="false"
        autoComplete="off"
        autoCapitalize="off"
        aria-activedescendant=""
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresa lo que quieras encontrar"
        onChange={form.handleChange}
      />
      <button title="Buscar" type="submit" tabIndex={2}>
        <MagnifyingGlassIcon />
      </button>
    </SearchStyles.Container>
  );
}
