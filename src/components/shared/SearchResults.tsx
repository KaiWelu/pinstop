import Loader from "./Loader";
import GridPostList from "@/_root/pages/GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: any;
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  //this just displays a loader if the search is still fetching
  if (isSearchFetching) {
    return <Loader />;
  }

  if (searchedPosts && searchedPosts.documents.length > 0) {
    console.log(searchedPosts.documents);
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
