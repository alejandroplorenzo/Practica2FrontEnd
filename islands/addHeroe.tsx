import { FunctionComponent } from "preact";

const AddHeroe: FunctionComponent = () => {
  return (
    <form class="AddHeroe" action="/add" method="post">
      <h1>AÑADIR NUEVO HEROE</h1>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="image" placeholder="Image" />
      <input type="text" name="sound" placeholder="Sound" />
      <input type="text" name="creator" placeholder="Creator" />
      <button type="submit">Add</button> 
    </form>
  );
};

export default AddHeroe;