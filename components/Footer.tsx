import IconPokeball from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/pokeball.tsx"

export default function Footer() {
  return (
    <div class="mt-12 bg-red-800 w-full max-w-screen-full py-8 justify-center text-center items-center mx-auto gap-4">
      <div class=" items-center flex-1">
        <IconPokeball size={35} class="inline-block text-white mb-3" />
        <div class="inline-block text-3xl text-white ml-1 font-bold">
          Pokedex
        </div>
      </div>
      <p class="text-xl text-white">Year 2023 by sharizahr</p>
      <p class="text-xl text-white">Based on PokeAPI</p>
    </div>
  );
}
