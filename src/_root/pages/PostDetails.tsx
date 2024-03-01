import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { formatDate } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");

  const dateFormatted = formatDate(post?.$createdAt);

  return (
    <div className="post_details-container">
      {isPending ? (
        <Loader />
      ) : (
        <div className="post_details-card">
          <div className="flex items-center gap-3">
            <Link to={`/profile/${post?.creator.$id}`}>
              <img
                src={
                  post?.creator.imageUrl || "/public/assets/images/profile.png"
                }
                alt="creator"
                className="rounded-full w-12 lg:h-12"
              />
            </Link>
            <div className="flex flex-col">
              <p className="base-medium lg:body-bold text-light-1">
                {post?.creator.name}
              </p>
              <div className="flex-center gap-2 text-light-3">
                <p className="subtle-semi-bold lg:small-regular">
                  {dateFormatted}
                </p>{" "}
                -{" "}
                <p className="subtle-semi-bold lg:small-regular">
                  {" "}
                  {post?.location}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
