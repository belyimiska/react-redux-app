import httpService from "./http.service";

const todosEndpoint = "todos/";
const todosService = {
  fetch: async () => {
    const { data } = await httpService.get(todosEndpoint, {
      params: {
        _page: 1,
        _limit: 5,
      },
    });
    return data;
  },
  create: async () => {
    const { data } = await httpService.post(todosEndpoint);
    return data;
  },
};

export default todosService;
