// SPDX-License-Identifier: Apache-2.0

import { useContext } from "react";
import UserProfile from "../components/UserProfile";
import SessionContext from "../context/SessionProvider";

const Profile = () => {
  const context = useContext(SessionContext);

  if (!context) {
    return <div>Error: SessionContext is not provided.</div>;
  }

  const { session } = context

  if (!session) {
    return <div>Loading...</div>; // Or any fallback UI
  }

  return (
    <>
      <div className="text-center text-3xl p-8 mb-2 w-full bg-yellow-400">
        {session.username || "Guest"}
      </div>
      <UserProfile />
    </>
  );
};

export default Profile;
