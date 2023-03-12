//Important!
//Not save for api keys

const API_KEY = "56e265d3-471f-4e54-ba14-9bf5f495c64e";

export const getNewsCategoriesEndpoint = (
  category,
  page = 1,
  pageSize = 20
) => {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page=${page}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getNewsDetailsEndpoint = newsId => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
