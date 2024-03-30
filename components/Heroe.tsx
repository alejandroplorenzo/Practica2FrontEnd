import { FunctionComponent } from "preact";

type HeroeProps = {
  name: string;
  image: string;
  sound: string;
};

const Heroe: FunctionComponent<HeroeProps> = (props) => {
  const { name, image, sound } = props;
  return (
    <div class="heroeContainer">
      <h2 class="text-overflow">{name}</h2>
      <img class="img-m half-rounded" src={image} />

      <p>
          <audio controls src={sound}>
            Tu navegador no soporta el audio.
            </audio>
      </p> 
    </div>
  );
};

export default Heroe;