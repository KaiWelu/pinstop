import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { Link, useParams } from "react-router-dom";

const LikedPosts = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  // if the details are still loading display a Loader component
  if (isPending) return <Loader />;

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        {post?.likes.length > 0 ? (
          <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
            {post?.likes.length} people liked this post!
          </h2>
        ) : (
          <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
            Nobody liked this post... yet!
          </h2>
        )}
      </div>
      <div className="flex flex-wrap gap-2 w-full max-w-5xl mt-7">
        <ul className="flex flex-col gap-3">
          {post?.likes.map((item: Models.Document) => {
            return (
              <li className="flex flex-1 items-center gap-3" key={item.$id}>
                <img
                  src={item.imageUrl}
                  alt="liker"
                  className="rounded-full w-12 lg:h-12"
                />
                <Link to={`/profile/posts/${post?.$id}`}>
                  <p className="base-medium lg:body-bold text-light-1">
                    {item.name}
                  </p>
                </Link>

                <img
                  src="/assets/icons/liked.svg"
                  alt="heart"
                  className="lg:h-7 lg:w-7 h-5 w-5"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LikedPosts;
