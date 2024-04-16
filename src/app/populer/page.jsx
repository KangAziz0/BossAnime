"use client";

import Pagination from "../components/Utilities/Pagination";
import HeaderMenu from "../components/Utilities/HeaderMenu";
import { useEffect, useState } from "react";
import AnimeList from "../components/AnimeList";
import { getAnimeResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const animePopuler = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(animePopuler);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        last={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};
export default Page;
