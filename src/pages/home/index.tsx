import { CardContainer, Container } from "./styles";
import React, { useState, useCallback, useEffect, useMemo } from "react";
import api from "@/services/api";
import Search from "../../components/search";
import Cards from "../../components/cardPokemon";
import Pagination from "@/components/pagination";
import Modal from "@/components/modal";

interface PokemonProps {
  id: string;
  name: string;
}

const HomePage: React.FC = () => {
  const NUMBER_POKEMONS = 9;
  const NUMBER_MAX_POKEMONS = 900;
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [itensPerPage, setItensPerPage] = useState(NUMBER_POKEMONS);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(pokemons.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = pokemons.slice(startIndex, endIndex);
  const [modalOpen, setModalOpen] = useState(false);

  const searchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS}`);
    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch)
    );
    setPokemons(pokemonsSearch);
    setCurrentPage(0);
  }, [pokemonSearch]);

  const handlePokemonListDefault = useCallback(async () => {
    const response = await api.get("/pokemon", {
      params: {
        limit: NUMBER_MAX_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) searchPokemons();
    else handlePokemonListDefault();

    handlePokemonListDefault();
    searchPokemons();
  }, [pokemonSearch, handlePokemonListDefault, searchPokemons]);

  const [pokemonName, setPokemonName] = useState("");

  const handleClickPokemon = (name: string) => {
    setPokemonName(name);
  };

  console.log(pokemonName);

  return (
    <Container>
      <Modal name={pokemonName} isOpen={modalOpen} setIsOpen={setModalOpen} />
      <Search value={pokemonSearch} onChange={setPokemonSearch} />
      <CardContainer
        onClick={() => {
          setModalOpen(true);
        }}
      >
        {currentItens.map((pokemon) => (
          <Cards
            key={pokemon.name}
            name={pokemon.name}
            onClick={handleClickPokemon}
          />
        ))}
      </CardContainer>

      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default HomePage;
