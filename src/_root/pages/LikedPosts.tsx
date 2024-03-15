import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { useParams } from "react-router-dom";

const LikedPosts = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  console.log(post);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
          {post?.likes.length} people liked this post!
        </h2>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl mt-7">
        <ul className="flex flex-col gap-3">
          {post?.likes.map((item: Models.Document) => {
            return (
              <li className="flex flex-1 items-center gap-4">
                <img
                  src={item.imageUrl}
                  alt="liker"
                  className="rounded-full w-12 lg:h-12"
                />
                <p className="base-medium lg:body-bold text-light-1">
                  {item.name}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LikedPosts;
