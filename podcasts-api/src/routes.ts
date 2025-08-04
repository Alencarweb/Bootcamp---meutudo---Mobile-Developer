import HomeController from "./controllers/home-controller";
import PodcastController from "./controllers/podcast-controller";


const routes = {
    "/api/v1": HomeController.home,
    "/api/v1/podcasts": PodcastController.getListEpisode,
    "/api/v1/podcasts/:id": {
        GET: PodcastController.getById,
        PUT: PodcastController.updatePodcast,
        DELETE: PodcastController.deletePodcast,     
    },
}



export default routes