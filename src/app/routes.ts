import { createBrowserRouter } from "react-router";
// Route configuration for Cycle Count module
import AppLayout from "./components/app-layout";
import CycleCountList from "./components/cycle-count-list";
import CycleCountDetail from "./components/cycle-count-detail";
import CountExecution from "./components/count-execution";
import DiscrepancyReview from "./components/discrepancy-review";
import EmployeeList from "./components/employee-list";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: CycleCountList },
      { path: "count/:id", Component: CycleCountDetail },
      { path: "count/:id/execute", Component: CountExecution },
      { path: "count/:id/discrepancies", Component: DiscrepancyReview },
      { path: "people/employees", Component: EmployeeList },
    ],
  },
]);