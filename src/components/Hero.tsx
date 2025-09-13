import { useState } from "react";
import AddWidgetCard from "./AddWidgetCard";
import DonutChartWidget from "./CircularBar";
import Header from "./Header";
import { EllipsisVertical, RefreshCcw } from "lucide-react";
import Sidebar from "./Sidebar";

const CloudAccountData = {
  title: "Cloud Accounts",
  data: [
    { label: "Connected", value: 2, color: "#3b82f6" },
    { label: "Not Connected", value: 2, color: "#bfdbfe" },
  ],
  config: {
    showTotal: true,
    totalLabel: "Total",
  },
};

const CloudAssesmentData = {
  title: "Cloud Account Risk Assesment",
  data: [
    { label: "Failed", value: 1689, color: "#B22222" },
    { label: "Warning", value: 681, color: "#eed202" },
    { label: "Not Availabel", value: 36, color: "#006400" },
    { label: "Passed", value: 7253, color: "#006400" },
  ],
  config: {
    showTotal: true,
    totalLabel: "Total",
  },
};

export default function Hero() {
  const [isOpen , setIsOpen] = useState(false); 

  const handleSidebarToggle = () => {
    setIsOpen(true);
  }
  return (
    <div className="">
      <Header />
      <div className="bg-gray-100 min-h-screen ">
        <div className="p-4 flex justify-between items-center">
          <div className=" font-bold text-xl">
            CNAPP Dashboard
          </div>
          <div className="flex space-x-2">
            <button onClick={handleSidebarToggle} className="px-4 py-2 cursor-pointer  border rounded-lg text-gray-600 hover:bg-gray-100 transition">
              + Add Widget
            </button>
            
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">
              <RefreshCcw  className="h-4 w-4" />
            </button>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">
              <EllipsisVertical className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="px-6 flex flex-col space-y-4">
          <div>
            <div className="text-[16px] font-semibold">
              CSPM Executive Dashboard
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 ">
              <DonutChartWidget {...CloudAccountData} />
              <DonutChartWidget {...CloudAssesmentData} />
              <AddWidgetCard />
            </div>
          </div>

          <div>
            <div className="text-[16px] font-semibold">CWPP Dashboard</div>
            <div  className="grid grid-cols-3 gap-4 mt-4 ">
              <AddWidgetCard />
              <AddWidgetCard />
              <AddWidgetCard />
            </div>
          </div>
        </div>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}
