import types_color from "../utils/types.ts";
import { PageProps } from "$fresh/server.ts";

export default function pokeInfos({ ability }: any) {
    function effect() {
        var description = "No more details Sorry :'("
        if (ability["effect_entries"].length != 0){
            description = ability.effect_entries[1] != undefined ? ability.effect_entries[1].effect : ability.effect_entries[0].effect
        }else if (ability.flavor_text_entries.length != 0){
            description = ability.flavor_text_entries[7].flavor_text
        }

        return description
    }
    
  return (
    <div class="w-full max-w-screen-lg mx-auto flex px-8 py-12 my-8 justify-center items-center flex-col gap-8 bg-gray-500 rounded-xl text-white">
      <div class="space-y-4 text-center">
        <h1
          class={`mb-8 font-bold text-6xl`}
        >
          {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
        </h1>
        <h1 class="mb-5 text-2xl underline">Effect of this ability</h1>
        <p class="bg-gray-400 rounded-lg py-5 px-10 max-w-screen-md mx-auto justify-center items-center text-center mb-10 text-white text-lg">
          {effect()}
        </p>
        <div class="flex flex-wrap mx-auto justify-center items-center text-center gap-3 mb-10">
          {ability.pokemon.map((pokemon: any) => {
            const url_array = pokemon.pokemon.url.split("/");
            const num = url_array[url_array.length - 2];
            return (
                <a
                class="text-white text-center p-10 m-4 rounded-lg bg-contain bg-center bg-no-repeat bg-white"
                style={`background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)), url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png');`}
                href={`/pokemon/${num}`}
              >
                <p>{pokemon.pokemon.name.charAt(0).toUpperCase() + pokemon.pokemon.name.slice(1)}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
