import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import AbilitiesListe from "../../islands/AbilitiesListe.tsx";
import Pokeliste from "../../islands/Pokeliste.tsx";
import Footer from "../../components/Footer.tsx";

export default function Abilities(props: any) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="/main.css" rel="stylesheet" />
      </Head>
      <Header active={"/abilities"}></Header>
      <AbilitiesListe url={props.data}></AbilitiesListe>
      <Footer></Footer>
    </>
  );
}

export const handler: Handlers = {
  GET(req, ctx) {
    const url_start = "https://pokeapi.co/api/v2/ability/?offset=0&limit=358";
    return ctx.render(url_start);
  },
};

