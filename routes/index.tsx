import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";
import Hero from "../islands/Hero.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "preact/hooks";

// https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1281
// https://pokeapi.co/api/v2/pokemon/1/

interface Home {
  url: string;
  name: string;
  types: any;
}
interface Pokemon {
  name: string;
  url: string;
}

export const handler: Handlers<Home> = {
  async GET(req, ctx) {
      while( true ) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=-1");
        const data = await res.json();
        const poke = data.results[Math.floor((Math.random()*data.count-1)+1)]
        console.log(poke)
        const url = poke.url
        const resp=await fetch(url)
        const pokemon = await resp.json();

        const sprites = pokemon.sprites;

        if(pokemon?.types && pokemon?.name && sprites?.front_default){
          return ctx.render({
            url: sprites.front_default,
            name: pokemon.name,
            types: pokemon.types,
          });
        }
    }
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
