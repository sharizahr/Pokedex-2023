import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Hero from "../islands/Hero.tsx";
import Footer from "../components/Footer.tsx";

// https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281
// https://pokeapi.co/api/v2/pokemon/1/

interface Home {
  url: string;
  name: string;
  types: any;
}

export const handler: Handlers<Home> = {
  async GET(req, ctx) {
    const id = (Math.floor(Math.random() * 999)) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`;

    const resp = await fetch(url);
    const pokemon = await resp.json();

    const sprites = pokemon.sprites;

    return ctx.render({
      url: sprites.front_default,
      name: pokemon.name,
      types: pokemon.types,
    });
  },
};

export default function Home(props: PageProps<Home>) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="/main.css" rel="stylesheet" />
      </Head>
      <Header active={"/"}></Header>
      <h1 class="outline outline-offset-2 outline-3 outline-red-800 text-8xl text-center font-bold text-white mb-7 ">Pokedex</h1>
      <Hero
        url={props.data.url}
        name={props.data.name}
        types={props.data.types}
      >
      </Hero>
      <Footer></Footer>
    </>
  );
}
