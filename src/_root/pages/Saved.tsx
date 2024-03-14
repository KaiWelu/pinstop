import Loader from "@/components/shared/Loader";
import {
  useGetCurrentUser,
  useGetSavedPosts,
} from "@/lib/react-query/queriesAndMutations";
import GridPostList from "./GridPostList";

const Saved = () => {
  const { data: currentUser } = useGetCurrentUser();
  console.log(currentUser);

  const {
    data: savedPosts,
    isPending: isSavedPostLoading,
    // isError: isErrorPosts,
  } = useGetSavedPosts();

  if (isSavedPostLoading || !savedPosts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  } else {
    console.log(savedPosts);
  }

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
          {/* <img
            src="/assets/icons/save.svg"
            alt="save"
            className="md:w-8 md:h-8 w-6 h-6"
          /> */}
          Saved Posts
        </h2>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl mt-7">
        {savedPosts && (
          <GridPostList key={`page-1`} posts={savedPosts} showStats={false} />
        )}
      </div>
      {/* <ul className="grid-container">
        {savedPosts.map((post) => (
          <li key={post.$id} className="relative min-w-80 h-80">
            <Link to={`/posts/${post.$id}`} className="grid-post_link">
              <img
                src={post.imageUrl}
                alt="post"
                className="h-full w-full object-cover"
              />
            </Link>
            <div className="grid-post_user">PLACEHOLDER</div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Saved;
