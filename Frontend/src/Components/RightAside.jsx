import React from "react";
import { UserPlus } from "lucide-react";
import RightRoutes from "../Routes/RightRoutes";
const RightAside = () => {
  return (
    <aside className="h-screen w-[380px] md:block hidden bg-white flex-col border-l border-gray-200  ">
      <div className="h-18  flex items-center justify-center gap-x-9 border-b px-6">
        <button className="flex items-center gap-2 justify-center">
          <UserPlus size={16} />
          <span> Invite</span>
        </button>
        <button className="px-8 py-2 text-white font-bold rounded-md bg-blue-500">
          <span>Publish</span>
        </button>
      </div>
      <RightRoutes />
    </aside>
  );
};

export default RightAside;
