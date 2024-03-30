import axios from "npm:axios";
import Heroe from "../components/Heroe.tsx";

type Heroe = {
  name: string;
  image: string;
  sound: string;
};

export default async function Home() {
  try {
    const response = await axios.get<Heroe[]>(
      "https://supermondongo.deno.dev/"
    );

    if (response && response.data && response.data) {
      return (
        <div class="flex-column">
          <h1 class="mainTitle">MEJORES HEROES DE LA TIERRA</h1>
          <div class="flex-row flex-around">
            {response.data.map((char, id) => (
              <a href={`/${char.name}`}>
                <Heroe
                key={id} 
                name={char.name}
                image={char.image}
                sound={char.sound}
                />
                </a>
            ))} 

         </div>
        </div>
      );
    } else {
      return <div>Error: No se encontraron datos de superhéroes</div>;
    }
  } catch (error) {
    return <div>Error: {error.message}</div>;
  }
}
