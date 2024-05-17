export const PATH = {
  GAME: (id: string) => `${import.meta.env.VITE_API_URL}/games/${id}`,
  PLAYER: {
    HISTORY: (name: string) => `${import.meta.env.VITE_API_URL}/player/matchesByName/${name}`
  }
}
