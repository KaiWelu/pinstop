import PostForm from "@/components/forms/PostForm";
import Loader from "@/components/shared/Loader";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || ""); // or empty string because id has to be a string

  // this returns a loader component if the data is still fetching
  if (isPending) return <Loader />;

  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/public/assets/icons/add-post.svg"
            height={36}
            width={36}
            alt="add post"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Edit Post</h2>
        </div>
        <PostForm action="Update" post={post} />
      </div>
    </div>
  );
};

export default EditPost;
