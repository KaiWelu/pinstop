import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Saved = () => {
  const user = useGetCurrentUser();

  if (user.data) {
    console.log(user.data);
    console.log(user.data.save);
  }

  if (!user.data) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
          <img
            src="/assets/icons/save.svg"
            alt="save"
            className="md:w-8 md:h-8 w-6 h-6"
          />
          Saved Posts
        </h2>
      </div>
      <div className="">Das ist ein Test</div>
      {/* <ul className="flex flex-col flex-1 gap-9 w-full">
        {user?.data?.save?.documents.map((post: Models.Document) => (
          <PostCard post={post} key={post.caption} />
        ))}
      </ul> */}
    </div>
  );
};

export default Saved;
