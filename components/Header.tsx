import IconPokeball from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/pokeball.tsx"

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Pokémon-list", href: "/pokemon" },
    { name: "Abilities-list", href: "/abilities" },
  ];

  return (
    <div class="mb-12 bg-red-800 w-full max-w-screen-full py-4 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <IconPokeball size={35} class="text-white" />
        <div class="text-3xl text-white ml-1 font-bold">
          Pokedex
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-white hover:font-bold py-1 border-white" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
