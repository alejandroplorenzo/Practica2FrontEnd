import { FunctionComponent } from "preact";

type MenuProps = {
    selected: "List" | "Add" | "Search";
};
const Menu: FunctionComponent<MenuProps> = ({ selected }) => {
  return (
    <div class="menu">
      <a href="/" class={selected === "List" ? "selected" : ""}>
        LISTADO HEROES
      </a>
      <a href="/add" class={selected === "Add" ? "selected" : ""}>
        AÑADIR NUEVO HEROE
      </a>
      <a href="/search" className={selected === "Search" ? "selected" : ""}>
        BUSCAR HEROE
      </a>
    </div>
  );
};

export default Menu;