const Loader = () => {
  return (
    <div className="flex justify-center mt-[10%] h-[100vh] w-[100%]">
      <div className="text-center items-center">
        <div className="w-20 h-20 border-4 border-dashed rounded-full animate-spin  bg-red-500 mx-auto"></div>
        <h2 className="text-zinc-900  mt-4">Loading...</h2>
        <p className="text-zinc-600 ">Your adventure is about to begin</p>
      </div>
    </div>
  );
};

export default Loader;
