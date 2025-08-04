//import { readdir } from "node:fs/promises";
import type { Podcast } from "../types";

export const repositoryPodcast : Array<Podcast> = await Bun.file(`${import.meta.dir}/../data/podcast.json`).json();

export async function getAllPodcasts() : Promise<Podcast[]> {
  const podcasts = repositoryPodcast;
  return podcasts;
}

export async function getPodcastById(id: number): Promise<Podcast | null> {

  const podcasts = await getAllPodcasts();
  console.log(podcasts, typeof podcasts, id);
  return podcasts.find(podcast => podcast.id === id) || null;
}

export async function getPodcastsByName(name: string): Promise<Podcast[]> {
  const podcasts = await getAllPodcasts();
  return podcasts.filter(podcast => podcast.name.toLowerCase().includes(name.toLowerCase()));
}

export async function update(id: number, data: Partial<Podcast>): Promise<void> {
  const index = repositoryPodcast.findIndex(podcast => podcast.id === id);
  
  if (index === -1) {
    throw new Error(`Podcast with ID ${id} not found`);
  }

  let podcast : Partial<Podcast> | null = repositoryPodcast[index] ?? null;
  
  if (!podcast) {
    throw new Error(`Podcast with ID ${id} not found`);
  }  
  
  podcast = {
    ...podcast,
    ...data,
  };

  repositoryPodcast[index] = podcast as Podcast;
  
  await Bun.write(`${import.meta.dir}/../data/podcast.json`, JSON.stringify(repositoryPodcast, null, 2));
  
}

export async function remove(id: number): Promise<void> {
  const index = repositoryPodcast.findIndex(podcast => podcast.id === id);
  
  if (index === -1) {
    throw new Error(`Podcast with ID ${id} not found`);
  }

  repositoryPodcast.splice(index, 1);
  
  await Bun.write(`${import.meta.dir}/../data/podcast.json`, JSON.stringify(repositoryPodcast, null, 2));
}