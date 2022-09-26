import styled from "styled-components";
import { colors } from "_assets";

export function Search() {
  return (
    <Search.Element action="/items/">
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
      />
    </Search.Element>
  );
}

Search.Element = styled.form`
  input {
    width: 100%;
    height: 32px;
    border: none;
    font-size: 14px;
    padding: 0 10px;
    border-radius: 2px;
    font-family: inherit;
    width: -webkit-fill-available;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.GRAYS[300]};
    }
  }
`;
