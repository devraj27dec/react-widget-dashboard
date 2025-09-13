import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen bg-blue-50">
        <Header />
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />

          <main className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
            <Outlet />
          </main>
        </div>
      </div>
  )
}