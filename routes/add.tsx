import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import AddHeroe from "../islands/addHeroe.tsx";

type Heroe = {
  name: string;
  image: string;
  sound: string;
  creator: string;
};
export const handler: Handlers = {
    POST: async (req: Request) => {
    const params = new URLSearchParams(await req.text());
    const heroe: Heroe = {
      name: params.get('name') || "",
      image: params.get('image') || "",
      sound: params.get('sound') || "",
      creator: params.get('creator') || "",
    };

    axios.post('https://supermondongo.deno.dev/', heroe)
      .then(function (response) {
        console.log(response);
        //window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
    return new Response("", {status: 307});
  },
}

const Page = () => {
  return (
    <div>
      <AddHeroe /> 
    </div>
  );
};

export default Page;


