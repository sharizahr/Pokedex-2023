import types_color from "../utils/types.ts";

export default function pokeInfos({ pokemon }: any) {
  const types: any = pokemon.types;
  const img =
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const first_color: any = types_color[types[0].type.name];
  const second_color = types[1] != undefined
    ? types_color[types[1].type.name]
    : first_color;

  return (
    <div
      class="w-full max-w-screen-lg mx-auto flex px-8 py-12 my-8 justify-center items-center flex-col gap-8 bg-contain bg-top bg-no-repeat bg-gray-100 rounded-xl text-white"
      style={`background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)), url(${img});`}
    >
      <div class="space-y-4 text-center">
        <h1
          class={`mb-5 font-bold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[${first_color}] to-[${second_color}]`}
        >
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h1>
        <div class="flex flex-wrap mx-auto justify-center items-center text-center gap-3 mb-10">
          {types.map((type: any) => {
            return (
              <div
                class={`bg-[${
                  types_color[type.type.name]
                }] py-2 px-3 rounded-md`}
              >
                <p>{type.type.name}</p>
              </div>
            );
          })}
        </div>
        <div>
          <h1 class="text-3xl font-bold">Stats</h1>
          <div class="flex flex-wrap justify-center items-center">
            <p class="my-3 mr-5">Weight : {pokemon.weight / 10} kg</p>
            <p class="my-3">Height : {pokemon.height * 10} cm</p>
          </div>
          <div class="grid grid-cols-3 gap-3">
            {pokemon.stats.map((stat: any) => {
              return (
                <div class="mx-10">
                  <p class="">
                    {stat.stat.name.charAt(0).toUpperCase() +
                      stat.stat.name.slice(1)} :{" "}
                    <span class="font-bold">{stat.base_stat}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div >
          <h1 class="text-3xl font-bold mb-5">Abilities</h1>
          <div class="flex flex-wrap gap-3 justify-center items-center">
            {pokemon.abilities.map((ability: any) => {
              return (
                <div class="mx-2">
                  <a class={`bg-gradient-to-r from-[${first_color}] to-[${second_color}] rounded-lg py-2 px-3`} href={"/abilities/"+ability.ability.url.split("/")[ability.ability.url.split("/").length - 2]}>
                    {ability.ability.name.charAt(0).toUpperCase() +
                      ability.ability.name.slice(1)} {" "}

                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div class="">
          <h1 class="text-3xl font-bold mb-5">Moves</h1>
          <div class="grid grid-cols-4 gap-3 justify-center items-center">
            {pokemon.moves.map((move: any, index:number) => {
              return (
                <div class="mx-2">
                  <p class={ (index%2==0 ? `bg-[${first_color}]` : `bg-[${second_color}]`) + " rounded-md py-2 px-3"}>
                    {move.move.name.charAt(0).toUpperCase() +
                      move.move.name.slice(1)} {" "}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
