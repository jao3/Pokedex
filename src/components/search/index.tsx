import { useState, SyntheticEvent, SVGProps, useEffect } from "react";
import { Container, InputText, SearchButton } from "./styles";
import { FaSearch } from "react-icons/fa";

interface InputSearchProps {
  value: string;
  onChange(value: string): void;
}
interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

const Search: React.FC<InputSearchProps> = ({ value, onChange }) => {
  return (
    <Container>
      <SearchButton>
        <FaSearch />
      </SearchButton>
      <InputText
        placeholder={"Qual Pokémon você está procurando?"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default Search;
