import routes from "./routes";

Bun.serve({
    port: 3000,
    routes: routes,
    error(error) {
        console.error("Error:", error);
        return new Response("Internal Server Error", { status: 500 });
    },
});