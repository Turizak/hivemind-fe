// SPDX-License-Identifier: Apache-2.0

import { Link } from "react-router-dom";

const HomeContentContainer = ({ item }: { item: any }) => {
  return (
    <>
      <div
        className="p-3 mx-auto my-2 max-w-xl w-full bg-gray-300 xs:rounded-none sm:rounded-md hover:bg-gray-200"
        id={item.Id}
      >
        <Link to={`/hive/uuid/${item.Uuid}/content`}>
          <div className="p-2 mt-2 hover:cursor-pointer ">
            <p className="pb-2 text-xl">{item.Name}</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomeContentContainer;
