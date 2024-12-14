import { createRootRoute, Outlet } from "@tanstack/react-router";
import LeftSidebar from "../components/LeftSidebar";

export const Route = createRootRoute({
  component: function RootRoute() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <LeftSidebar />
        <div style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </div>
      </div>
    );
  },
});
