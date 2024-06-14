import { SVGProps, useEffect, useState } from "react";
import {
  Wrapper,
  ModalContainer,
  ModalContent,
  PokeName,
  PokeNumber,
  PokeType,
  Divider,
  PokemonWeight,
  PokemonHeight,
  PokemonFeatures,
} from "./styles";
import Stats from "./stats";
import { PokemonType } from "../cardPokemon/styles";
import { FaArrowLeft, FaWeightHanging, FaRulerCombined } from "react-icons/fa";
import api from "@/services/api";
import { useTheme } from "styled-components";
import pokemonTypes from "@/assets/types";
import { DividerPokeball } from "@/assets/pokeball";

export interface PokemonTypesProps {
  name?: String;
  icon: SVGProps<SVGSVGElement>;
  color: String;
}

interface TypePokemonResponse {
  type: {
    name: keyof typeof pokemonTypes;
  };
}

interface PokemonProps {
  id: number;
  name: string;
  number: string;
  image: string;
  specie: string;
  height: string;
  weight: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
  };
  type: PokemonTypesProps[];
}

interface PokemonModalProps {
  name: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Modal: React.FC<PokemonModalProps> = ({ name, isOpen, setIsOpen }) => {
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  const { colors } = useTheme();
  const [backgroundColor, setBackgroundColor] =
    useState<keyof typeof pokemonTypes>("normal");

  const handleClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    api.get(`pokemon/${name}`).then((response) => {
      const { id, name, weight, height, stats, sprites, types, species } =
        response.data;

      if (
        types &&
        types.length >= 0 &&
        types[0].type.name === "normal" &&
        types.lenght > 1
      ) {
        setBackgroundColor(types[1].type.name);
      }

      setBackgroundColor(types && types.lenght >= 0 && types[0].type.name);

      //const image = sprites?.other.["official-artwork"]?.front_default || 'default_image_url';

      const hp = stats?.[0]?.base_stat ?? 0;
      const attack = stats?.[1]?.base_stat ?? 0;
      const defense = stats?.[2]?.base_stat ?? 0;
      const specialAttack = stats?.[3]?.base_stat ?? 0;
      const specialDefense = stats?.[4]?.base_stat ?? 0;
      const speed = stats?.[5]?.base_stat ?? 0;

      setPokemon({
        id,
        number: `${id}`,
        name,
        image: sprites?.other["official-artwork"]?.front_default,
        weight: `${weight / 10} kg`,
        height: `${height / 10} M`,
        specie: species?.name,
        stats: {
          hp,
          attack,
          defense,
          specialAttack,
          specialDefense,
          speed,
        },
        type: types?.map((pokemonType: TypePokemonResponse) => ({
          name: pokemonType.type.name,
          icon: pokemonTypes[pokemonType.type.name],
          color: colors.type[pokemonType.type.name],
        })),
      });
    });
  }, [name, colors]);

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id <= 99) return `#0${id}`;
    else return `#${id}`;
  };

  if (!isOpen) return null;
  console.log(backgroundColor);

  return (
    <Wrapper onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}>
      <div className="close-icon">
        <FaArrowLeft onClick={handleClick} />
      </div>

      <ModalContainer>
        <ModalContent>
          {pokemon.image && <img src={pokemon.image} />}
          <PokeNumber>{formatPokemonId(pokemon.id)}</PokeNumber>
          <PokeName>{pokemon.name}</PokeName>
          <div className="types">
            {pokemon.type?.map((pokemonType) => (
              <PokeType
                key={pokemonType.name?.toString()}
                color={pokemonType.color.toString()}
              >
                <>{pokemonType.icon}</> <span>{pokemonType.name}</span>
              </PokeType>
            ))}
          </div>
          <PokemonFeatures>
            <PokemonWeight>
              <div>
                <FaWeightHanging />
                <span>{pokemon.weight}</span>
              </div>
              <span>Peso</span>
            </PokemonWeight>
            <PokemonHeight>
              <div>
                <FaRulerCombined />
                <span>{pokemon.height}</span>
              </div>
              <span>Altura</span>
            </PokemonHeight>
          </PokemonFeatures>
        </ModalContent>
        <Divider>
          <DividerPokeball />
        </Divider>

        {pokemon.stats && (
          <Stats
            color={colors.backgroundType[backgroundColor]}
            stats={pokemon.stats}
          />
        )}
      </ModalContainer>
    </Wrapper>
  );
};
export default Modal;
