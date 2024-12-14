import { Link } from "@tanstack/react-router";
import { useState } from "react";

const DOCS_ROUTES = [
  { path: "/overview", label: "Overview" },
  { path: "/installation", label: "Installation" },
  { path: "/creating-a-scene", label: "Creating a scene" },
];

const EXAMPLES_ROUTES = [
  { path: "/scene1", label: "Scene 1" },
  { path: "/scene2", label: "Scene 2" },
];

const LeftSidebar = () => {
  const [activeTab, setActiveTab] = useState<"docs" | "examples">("docs");

  const renderLinks = (routes: { path: string; label: string }[]) => (
    <ul className="p-4">
      {routes.map((route) => (
        <li key={route.path} className="my-2">
          <Link
            to={(routes === DOCS_ROUTES ? "/docs" : "/examples") + route.path}
            activeProps={{
              style: { color: "#60a5fa", textDecoration: "underline" },
            }}
          >
            {route.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="w-64">
      <header className="flex justify-between items-center h-12">
        <h1 className="pl-4 text-blue-400 font-semibold">R3F</h1>
        <div className="flex">
          <Link
            to="/docs/overview"
            style={{ color: activeTab === "docs" ? "#444" : "#9e9e9e" }}
            onClick={() => setActiveTab("docs")}
            className="px-4 text-gray-600"
          >
            docs
          </Link>
          <Link
            to="/examples/scene1"
            style={{ color: activeTab === "examples" ? "#444" : "#9e9e9e" }}
            onClick={() => setActiveTab("examples")}
            className="px-4 text-gray-600"
          >
            examples
          </Link>
        </div>
      </header>

      {activeTab === "docs" && renderLinks(DOCS_ROUTES)}
      {activeTab === "examples" && renderLinks(EXAMPLES_ROUTES)}
    </div>
  );
};
export default LeftSidebar;
