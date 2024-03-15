import Loader from "@/components/shared/Loader";
import {
  useGetCurrentUser,
  useGetSavedPostsById,
} from "@/lib/react-query/queriesAndMutations";
import GridPostList from "./GridPostList";
import { Models } from "appwrite";

const Saved = () => {
  //get the user
  const { data: currentUser } = useGetCurrentUser();

  const savedIds: string[] = [];
  //push the saved ids into an array
  if (currentUser) {
    currentUser.save.forEach((item: Models.Document) => {
      savedIds.push(item.post.$id);
    });
  }

  if (currentUser) console.log(currentUser);

  //query the database with an array of ids to get the saved posts
  const {
    data: savedPosts,
    isPending: isSavedPostLoading,
    // isError: isErrorPosts,
  } = useGetSavedPostsById(savedIds);

  if (isSavedPostLoading) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  } else {
    console.log("Loading done");
  }

  console.log(savedPosts);

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full flex flex-row gap-2 items-center">
          Saved Posts
        </h2>
      </div>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl mt-7">
        {savedPosts && (
          <GridPostList posts={savedPosts.documents} showStats={false} />
        )}
      </div>
    </div>
  );
};

export default Saved;
