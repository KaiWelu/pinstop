import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  console.log(id);

  return <div>{id}</div>;
};

export default Profile;
