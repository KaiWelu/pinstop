import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "@/_root/pages/GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
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
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <p className="text-light-4 mt-10 text-center w-full">No results found</p>
  );
};

export default SearchResults;
