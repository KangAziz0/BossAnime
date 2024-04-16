import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/Header";
import { getAnimeResponse, getNestedResponse, reproduce } from "../libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime","limit=10");
  let recommendateAnime = await getNestedResponse("recommendations/anime","entry");
  recommendateAnime = reproduce(recommendateAnime,10)
    return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header
          title="Rekomendasi"
        />
        <AnimeList api={recommendateAnime} />
      </section>
    </>
  );
};

export default Page;
