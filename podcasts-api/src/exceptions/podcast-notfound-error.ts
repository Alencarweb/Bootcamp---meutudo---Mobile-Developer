import { ApiError } from "./api-error";

export class PodcastNotFoundError extends ApiError {
  constructor(id: number) {
    super(`Podcast with ID ${id} not found`, 404);    
  }
}