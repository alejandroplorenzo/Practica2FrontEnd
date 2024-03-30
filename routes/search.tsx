import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import SearchHeroe from "../components/searchHeroe.tsx";

type Data = {
  name?: string;
}

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>)=>{
    const url = new URL(req.url);
    const name = url.searchParams.get("name") || undefined;
    if (name) {
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
      <SearchHeroe/>
      {/* <form class="searchHeroe" action="/search" method="get">
      <h1>BUSCAR HEROE</h1>
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Buscar</button>  
     </form> */}
    </div>
  );
};

export default Page;