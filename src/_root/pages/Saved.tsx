import Loader from "@/components/shared/Loader";
import {
  useGetCurrentUser,
  useGetSavedPosts,
} from "@/lib/react-query/queriesAndMutations";
import { Link } from "react-router-dom";
import PostStats from "@/components/shared/PostStats";

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
      <ul className="grid-container">
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
      </ul>

      {/* <li key={post.$id} className="relative min-w-80 h-80">
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img
              src={post.imageUrl}
              alt="post"
              className="h-full w-full object-cover"
            />
          </Link>
          <div className="grid-post_user">
            {showUser && (
              <div className="flex items-center justify-start gap-2 flex-1">
                <img
                  src={post.creator.imageUrl}
                  alt="creator"
                  className="h-8 w-8 rounded-full"
                />
                <p className="line-clamp-1">{post.creator.name}</p>
              </div>
            )}
            {showStats && <PostStats post={post} userId={user.id} />}
          </div>
        </li> */}
    </div>
  );
};

export default Saved;
