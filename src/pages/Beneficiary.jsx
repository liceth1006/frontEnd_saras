import Navbar from "../components/Navbar";

const Beneficiary = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
            <span className="text-white font-bold uppercase">Daystar Dashboard</span>
        </div>
        <Navbar></Navbar>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <h2>contenido</h2>
        </div>
      </div>
      </div>
  );
};

export default Beneficiary;
