import { useEffect, useState } from "preact/hooks";

export default function Pokeliste(props: any) {
  const [abilitiesList, setAbilitiesList] = useState<Abilities[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch(props.url).then((res) => res.json()).then((data) => {
      setAbilitiesList([...abilitiesList, ...data.results]);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  function handleChange(event: any) {
    setValue(event.target.value);
  }
  
  return (
    <>
      <h1 class="items-center justify-center mx-auto text-center flex flex-wrap mb-7 text-8xl text-white text-border-red font-bold">
        Pokémon List
      </h1>
      <input
        value={value}
        type=""
        placeholder="Recherche"
        onChange={handleChange}
        class="items-center justify-center max-w-screen-lg mx-auto text-center flex flex-wrap px-3 py-2 wfull w-1/3 h-12 rounded-lg my-3"
      >
      </input>
      <div class="items-center justify-center max-w-screen-lg mx-auto text-center flex flex-wrap">
        {abilitiesList.filter((ability) => ability.name.includes(value)).map(
          (ability: Abilities) => {
            const url_array = ability.url.split("/");
            const num = url_array[url_array.length - 2];
            return (
              <a
                class="text-white text-center p-10 m-4 rounded-lg bg-contain bg-center bg-no-repeat bg-gray-100"
                style={`background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.8)), url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${num}.png');`}
                href={`/pokemon/${num}`}
              >
                <p>{ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}</p>
              </a>
            );
          },
        )}
      </div>
    </>
  );
}

interface Abilities {
  name: string;
  url: string;
}

