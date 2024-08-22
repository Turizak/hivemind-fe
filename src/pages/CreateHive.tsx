// SPDX-License-Identifier: Apache-2.0

import CreateHiveForm from "../components/CreateHiveForm";
const CreateHive = () => {
    return (
        <>
          <div className="text-center text-3xl p-8 mb-2 w-full bg-yellow-400">
            Create Hive
          </div>
          <CreateHiveForm />
        </>
      );
    };

export default CreateHive