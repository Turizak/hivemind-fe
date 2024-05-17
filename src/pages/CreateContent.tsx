import CreateContentForm from "../components/CreateContentForm";
const CreateContent = () => {
    return (
        <>
          <div className="text-center text-3xl p-8 mb-2 w-full bg-yellow-400">
            Create Content
          </div>
          <CreateContentForm />
        </>
      );
    };

export default CreateContent