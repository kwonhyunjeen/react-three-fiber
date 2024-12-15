import { createRootRoute, Outlet } from "@tanstack/react-router";
import LeftSidebar from "../components/LeftSidebar";

export const Route = createRootRoute({
  component: function RootRoute() {
    return (
      <div className="flex h-screen">
        <LeftSidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    );
  },
});
