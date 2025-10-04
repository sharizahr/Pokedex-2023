import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import Header from "../../components/Header.tsx";
import Pokeliste from "../../islands/Pokeliste.tsx";
import Footer from "../../components/Footer.tsx";

export default function Pokemon(props: any) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <link href="/main.css" rel="stylesheet" />
      </Head>
      <Header active={"/pokemon"}></Header>
      <Pokeliste url={props.data}/>
      <Footer></Footer>
    </>
  );
}

export const handler: Handlers = {
  async GET(req, ctx) {
    const url_start = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=-1";
    return ctx.render(url_start);
  },
};

