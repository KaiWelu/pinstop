import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { user } = useUserContext();
  console.log(user);

  console.log(id);

  if (!user) return <Loader />;

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
            to={"/home"}
            // className={`${user.id !== post.creator.$id && "hidden"}`}
          >
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
