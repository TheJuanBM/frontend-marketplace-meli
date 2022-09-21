import * as SearchStyles from "./styles";

export function Search() {
  return (
    <SearchStyles.Container action="/items/">
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
        placeholder="Nunca dejes de buscar"
        aria-label="Ingresa lo que quieras encontrar"
      />
    </SearchStyles.Container>
  );
}
