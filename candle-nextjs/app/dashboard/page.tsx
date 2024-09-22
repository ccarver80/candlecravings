import Sidebar from "../ui/sidebar/sidebar";
import DashboardHeader from "../ui/header/dashboard-header";
export default function Dashboard() {
  return (
    <>
      <div className="flex w-screen h-screen text-gray-700">
        {/* Sidebar Component */}
        <Sidebar />

        <div className="flex flex-col flex-grow">
          <DashboardHeader />

          {/* Main Page */}
          <div className="flex-grow p-6 overflow-auto bg-gray-200">
            <div className="grid grid-cols-3 gap-6">
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-3 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-3 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-1 bg-white border border-gray-300" />
              <div className="h-24 col-span-2 bg-white border border-gray-300" />
              <div className="h-24 col-span-3 bg-white border border-gray-300" />
            </div>
          </div>
        </div>
        {/* Component End  */}
      </div>
    </>
  );
}
