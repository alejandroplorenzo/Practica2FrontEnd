import { FreshContext, Handlers, PageProps } from "$fresh/server.ts"
import Axios from "npm:axios"
import Heroe from "../components/Heroe.tsx";

export type Data = {
    name: string;
    image: string;
    sound: string;
  };


  export const handler: Handlers = { 
    GET: async (_req: Request, ctx: FreshContext<unknown, Data[]>)=>{
        try{
            const { name } = ctx.params; 
            const heroe = await Axios.get<Data[]>(
                `https://supermondongo.deno.dev/${name}`,
            );

            if(heroe.status !== 200){
                throw new Error("Error")
            }

            return ctx.render(heroe.data);
        }catch(e){
            console.error(e);
            throw new Error("Ha habido un error");
        }
    },
};

const Page = (props: PageProps<Data[]>)=>{
    const heroe = props.data;
    return (
    <div>
         <Heroe
                name={heroe[0].name}
                image={heroe[0].image}
                sound={heroe[0].sound}
        /> 
    </div>
    )
};
export default Page;