import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/chevron-right.tsx";
import { useState } from "preact/hooks";
import types_color from "../utils/types.ts";

type Props = {
  url: string;
  name: string;
  types: any;
};

export default function Hero({ url, name, types }: Props) {
  const color0 = types_color[types[0].type.name];
  const color1 = types[1] != undefined
    ? types_color[types[1].type.name]
    : color0;

  const [spinned, setSpinned] = useState(true);

  function handleClick() {
    setSpinned(!spinned);
  }

  return (
    <div
      class="mx-auto w-full max-w-screen-lg flex px-8 justify-center py-6 items-center flex-col bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style="background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)), url('/hero-back.gif');"
    >
      <div class="space-y-4 text-center">
        <p class="text-xl max-w-lg text-white">
          Le Pokedex le plus <span class="font-bold">BASIQUE</span>{" "}
          que tu trouveras sur Internet
        </p>
      </div>
      <img class={spinned ? "animate-spin" : ""} src={url} width={250} />
      <h1
        class={`mb-5 font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[${color0}] to-[${color1}]`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h1>
      <div class="flex flex-raw gap-3 mb-10">
        {types.map((type:any) => {
          return (
            <div
              class={`bg-[${types_color[type.type.name]}] py-2 px-3 rounded-md`}
            >
              <p>{type.type.name}</p>
            </div>
          );
        })}
      </div>
      <div>
        <button
          class="block text-white cursor-pointer inline-flex items-center group text-white bg-red-800 px-5 py-2 rounded-md hover:bg-red-500 font-bold border"
          onClick={handleClick}
        >
          Toggle Spin{" "}
        </button>
        <a
          href={`/pokemon/${url.split("/")[url.split("/").length-1].slice(0, -4)}`} 
          class="text-lg block transition-colors text-red-800 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-red-500 font-bold"
        >
          Infos
          <IconChevronRight class="inline-block w-5 h-5 transition group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
}
