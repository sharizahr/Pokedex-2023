import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import PokeInfos from "../../islands/PokeInfos.tsx";
import { useState } from "preact/hooks";
import Footer from "../../components/Footer.tsx";



export default function Infos(props: PageProps) {
    const [id, setId] = useState(String);
  setId(props.params.toString())

  const pokemon = props.data.pokemon;

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="/main.css" rel="stylesheet" />
      </Head>
      <Header active={"/pokemon"}></Header>
      <PokeInfos pokemon={pokemon}></PokeInfos>
      <Footer></Footer>
    </>
  );
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const id = ctx.params.id
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    const resp = await fetch(url);
    const pokemon = await resp.json();

    return ctx.render({
      pokemon: pokemon,
    });
  },
};