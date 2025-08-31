import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";

function Dashboard() {
    return (
        <div className="bg-white min-h-screen flex">
            <div className="w-64 flex-shrink-0">
                <Sidebar />
            </div>
            <div className="flex-1 overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;