import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const Saved = () => {
  const user = useGetCurrentUser();
  console.log(user);

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
    </div>
  );
};

export default Saved;
