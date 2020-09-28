export const apiCreator = (page: number): string => {
  const baseUrl = `https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=`;
  return baseUrl + page;
};
