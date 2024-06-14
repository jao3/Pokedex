import React, { SVGProps, useEffect, useState } from "react";
import {
  Container,
  PokemonName,
  PokemonCard,
  PokemonNumber,
  PokemonType,
} from "./styles";
import api from "@/services/api";
import { useTheme } from "styled-components";
import iconTypePokemon from "../../assets/types";
import { Pokeball } from "@/assets/pokeball";

interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

interface PokemonProps {
  id: number;
  name: string;
  image: string;
  type: PokemonTypesProps[];
  backgroundColor: string;
}

interface CardPokemonProps {
  name: string;
  onClick: (pokemonName: string) => void;
}

const Cards: React.FC<CardPokemonProps> = ({ name, onClick }) => {
  const { colors } = useTheme() || {};
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then((response) => {
      const { id, name, types, sprites } = response.data;

      let backgroundColor: keyof typeof iconTypePokemon = types[0].type.name;

      if (backgroundColor == "normal" && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        backgroundColor: colors.backgroundType[backgroundColor],
        name,
        image: sprites.other["official-artwork"].front_default,
        type: types.map((pokemonType: any) => {
          const typeName = pokemonType.type
            .name as keyof typeof iconTypePokemon;
          return {
            name: typeName,
            icon: iconTypePokemon[typeName],
            color: colors.type[typeName],
          };
        }),
      });
    });
  }, [name, colors]);

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id <= 99) return `#0${id}`;
    else return `#${id}`;
  };

  const handleClick = (name: string) => {
    onClick(name);
  };

  return (
    <Container
      color={pokemon.backgroundColor}
      onClick={() => handleClick(pokemon.name)}
    >
      <PokemonCard>
        <PokemonNumber>{formatPokemonId(pokemon.id)}</PokemonNumber>
        <PokemonName>{pokemon.name}</PokemonName>
        {pokemon.type && (
          <div>
            {pokemon.type.map((pokemonType) => (
              <PokemonType color={pokemonType.color} key={pokemonType.name}>
                <>{pokemonType.icon}</>
                <span>{pokemonType.name}</span>
              </PokemonType>
            ))}
          </div>
        )}
        <Pokeball className="pokeball" />
      </PokemonCard>
      {pokemon.image && <img src={pokemon.image} />}
    </Container>
  );
};

export default Cards;
