import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

type Data = {
  name?: string;
}

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>)=>{
    const url = new URL(req.url);
    const name = url.searchParams.get("name") || undefined;
    if (name) {
      // Aquí es donde eliminarías el héroe con el nombre proporcionado.
      // La implementación exacta dependerá de cómo estés almacenando tus héroes.
      // Por ejemplo, si estás almacenando tus héroes en un array, podrías hacer algo como esto:
      // heroes = heroes.filter(heroe => heroe.name !== name);
      return new Response("", {
        status: 307,
        headers: { Location: `/${name}` },
      });
    }
    return ctx.render();
  }
}

const Page = (props: PageProps) => {
  return (
    <div>
       <form class="deleteHeroe" action="/delete" method="get">
      <h1>ELIMINAR HEROE</h1>
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Eliminar</button>  
     </form> 
    </div>
  );
};

export default Page;
