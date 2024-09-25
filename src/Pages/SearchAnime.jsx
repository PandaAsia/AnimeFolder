import SearchFindAnime from "../Component/SearchFindAnime";
import SearchOptions from "../Component/SearchOptions";

const SearchAnime = () => {
  return (
    <main>
      <section className="container-lg pt-5">
        <h2 className="text-center pt-4 fs-1 text-color-primary">
          Anime Search
        </h2>
        <SearchOptions />
        <SearchFindAnime />
      </section>
    </main>
  );
};
export default SearchAnime;
