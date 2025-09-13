import AddWidgetCard from "./AddWidgetCard";
import DonutChartWidget from "./CircularBar";
import Header from "./Header";

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
  return (
    <div className="">
      <Header />
      <div className="bg-gray-100 min-h-screen ">
        <div className="p-4 font-bold text-xl">
          CNAPP Dashboard
        </div>
        <div className="px-6 flex flex-col space-y-4">
          <div>
            <div className="text-[16px] font-semibold">CSPM Executive Dashboard</div>
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
      </div>
    </div>
  );
}
