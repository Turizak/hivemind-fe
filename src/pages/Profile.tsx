import { useContext } from "react";
import UserProfile from "../components/UserProfile";
import SessionContext from "../context/SessionProvider";

const Profile = () => {
  // @ts-expect-error
  const { session } = useContext(SessionContext);
  return (
    <>
      <div className="text-center text-3xl p-8 mb-2 w-full bg-yellow-400">
        {session.username}
      </div>
      <UserProfile />
    </>
  );
};

export default Profile;
