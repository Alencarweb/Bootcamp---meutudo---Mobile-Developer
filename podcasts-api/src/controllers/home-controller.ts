const HomeController = {
  home: async () => {
    return Response.json(
      {
        version: "1.0.0",
        message: "Welcome to the PodCast API",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default HomeController;
