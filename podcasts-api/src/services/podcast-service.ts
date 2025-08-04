
import { PodcastNotFoundError } from "../exceptions/podcast-notfound-error";
import { getAllPodcasts, getPodcastsByName, update, remove, getPodcastById as getById } from "../repositories/podcast-repository";
import type { Podcast } from "../types";


async function getListEpisode() : Promise<Podcast[]> {     
     return [...await getAllPodcasts()].sort((a, b) => a.name.localeCompare(b.name, "en-US"));
}

async function getListEpisodeByName(name: string): Promise<Podcast[]> {
    const podcasts = await getPodcastsByName(name);
    return podcasts.sort((a, b) => a.name.localeCompare(b.name, "en-US"));
}

async function getPodcastById(id: number): Promise<Podcast | null> {
    const episode = await getById(id);
    if (!episode) {
        throw new PodcastNotFoundError(id);
    }
    return await getById(id);         

}

async function updatePodcast(id: number, data: Partial<Podcast>): Promise<void> {

    console.log(`Atualizando podcast com ID: ${id}`, data);


    const episode = await getById(id);
    if (!episode) {
        throw new PodcastNotFoundError(id);
    }
        
    if (data.members && Array.isArray(data.members) && data.members.length > 0) episode.members = data.members;
    if (data.likes && typeof data.likes == 'number') episode.likes = data.likes;
    if (data.views && typeof data.views == 'number') episode.views = data.views;

    await update(id, episode);
}


async function deletePodcast(id: number): Promise<void>{
    await remove(id)
}


export { getListEpisode, getPodcastById, getListEpisodeByName, updatePodcast, deletePodcast };