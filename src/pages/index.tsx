import Head from "next/head";
import HomePage from "./home";

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default Home;
