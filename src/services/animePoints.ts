import ky from "ky";

const instance = ky.create({
  prefixUrl: "https://azuki-score-node.vercel.app/api",
});

export type AnimePoints = {
  numCredits: number;
  gachaponRarityCount: {
    rarity: number;
    count: number;
  }[];
};

export async function getAnimePointsByTokenIds(
  collection: string,
  tokenIds: string[]
): Promise<AnimePoints[]> {
  const promises = [];
  for (const tokenId of tokenIds) {
    promises.push(
      getAnimePointsByTokenId(collection, tokenId)
        .catch((error) => console.error(error))
        .then(
          (response) => response || { numCredits: 0, gachaponRarityCount: [] }
        )
    );
  }

  const points = await Promise.all(promises);

  return points;
}

export async function getAnimePointsByTokenId(
  collection: string,
  tokenId: string
): Promise<AnimePoints> {
  const response = instance.get(
    `anime-points?collection=${collection}&tokenId=${tokenId}`
  );
  return response.json<AnimePoints>();
}
