import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import AbilitiesInfos from "../../islands/AbilitiesInfos.tsx";
import { useState } from "preact/hooks";
import Footer from "../../components/Footer.tsx";

export default function Ability(props: PageProps) {
  const [id, setId] = useState(String);
  setId(props.params.toString())

  const ability = props.data.ability;

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="/main.css" rel="stylesheet" />
      </Head>
      <Header active={"/abilities"}></Header>
      <AbilitiesInfos ability={ability}></AbilitiesInfos>
      <Footer></Footer>
    </>
  );
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const id = ctx.params.ability;
    const url = `https://pokeapi.co/api/v2/ability/${id}/`;
    const resp = await fetch(url);
    const ability = await resp.json();

    return ctx.render({ability: ability});
  },
};
