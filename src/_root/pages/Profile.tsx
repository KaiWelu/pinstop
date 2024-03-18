import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import {
  useGetUserById,
  useGetUserPosts,
} from "@/lib/react-query/queriesAndMutations";
import { Link, useParams } from "react-router-dom";
import GridPostList from "./GridPostList";
import { Models } from "appwrite";

const Profile = () => {
  const { id } = useParams();
  const { data: user, isPending: isUserPending } = useGetUserById(id || "");
  const { user: currentUser } = useUserContext();
  // const { data: posts, isPending: isPostsPending } = useGetUserPosts(id || "");
  console.log("CURRENT USER");
  console.log(currentUser);
  console.log("USER");
  console.log(user);

  if (!user || isUserPending) return <Loader />;

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <div className="flex flex-between w-full">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={user.imageUrl || "/assets/images/profile.png"}
                alt="creator"
                className="rounded-full w-12 lg:h-12"
              />
            </div>
            <div className="flex flex-col">
              <p className="base-medium lg:body-bold text-light-1">
                {user.name}
              </p>
              <div className="flex-start gap-2 text-light-3">
                @{user.username}
              </div>
            </div>
          </div>
          <Link
            to={"/"}
            className={`${currentUser.id !== user.$id && "hidden"}`}
          >
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        </div>
        {!isUserPending && (
          <GridPostList posts={user.posts} showStats={false} showUser={false} />
        )}
        {/* {!isUserPending &&
          user.posts.map((post: Models.Document) => (
            <div key={post.$id}>
              <img src={post.imageUrl} alt="yolo" />
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Profile;
