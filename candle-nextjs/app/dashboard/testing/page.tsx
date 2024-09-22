import Sidebar from "@/app/ui/sidebar/sidebar";
import DashboardHeader from "@/app/ui/header/dashboard-header";
import Modal from "@/app/ui/modal/modal";
export default function Testing() {
  return (
    <>
      <div className="flex w-screen h-screen text-gray-700">
        {/* Sidebar Component */}
        <Sidebar />

        <div className="flex flex-col flex-grow">
          <DashboardHeader />
          <Modal buttonName={"Test"}>
            <h1>Hi</h1>
          </Modal>
        </div>
      </div>
    </>
  );
}
