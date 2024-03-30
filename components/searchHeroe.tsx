import { FunctionComponent } from "preact";

const searchHeroe: FunctionComponent = () => {
  return (
      <form class="searchHeroe" action="/search" method="get">
      <h1>BUSCAR HEROE</h1>
      <li>Introduce el nombre exacto del heroe</li>
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Buscar</button>  
     </form>

  );
};



export default searchHeroe;

