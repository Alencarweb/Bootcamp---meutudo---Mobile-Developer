import type { BunRequest } from "bun";

import { deletePodcast, getListEpisode, getPodcastById, updatePodcast } from "../services/podcast-service";
import type { Podcast } from "../types";

const PodcastController = {
  getListEpisode: async () => {
    const episodes = await getListEpisode();
    return Response.json(episodes);
  },

  getById: async (req: BunRequest) => {    
    try {
      const { params } = req as any;
      const id = parseInt(params.id);
      const episode = await getPodcastById(id);
      return Response.json(episode);
    } catch (error: any ) {
      console.error(error);
        return Response.json({error: error?.message ?? 'Erro interno'}, {status: error?.status ?? 500});
    }
  },

  updatePodcast: async (req: BunRequest) => {    
    try{
      
      const { id } = (req as any).params;

      const body : Partial<Podcast> = await req.json() as Partial<Podcast>;
      await updatePodcast(parseInt(id), body);
      return Response.json({message: 'Atualizção realizada com sucesso!'});      
    } catch (error: any) {
       return Response.json({error: error?.message ?? 'Erro interno'}, {status: error?.status ?? 500});
    }    
  },

  deletePodcast: async (req: BunRequest) => {
    try {
      await deletePodcast(parseInt((req as any).params.id));
      return new Response(null, { status: 204 });
    } catch (error: any) {
      return Response.json({error: error?.message ?? 'Erro interno'}, {status: error?.status ?? 500});
    }
  }
};

export default PodcastController;
