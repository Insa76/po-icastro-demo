import { createBrowserRouter } from "react-router-dom";
import AlertsSettingsPage from "../src/pages/AlertsSettingsPage";
import Dashboard from "../src/pages/Dashboard";
import DemoPage from "../src/pages/DemoPage";
import StaffBoard from "../src/pages/staff/StaffBoard";
import MenuExperience from "../src/pages/client/MenuExperience";
import ManagerAnalytics from "../src/pages/ManagerAnalytics";
import ManagerRules from "../src/pages/manager/ManagerRules";
import ManagerRuleLogs from "../src/pages/ManagerRuleLogs";
import ManagerPromoAnalytics from "../src/pages/manager/ManagerPromoAnalytics";
import ManagerBoard from "../src/pages/manager/ManagerBoard";
import ConsumptionSummary from "../src/pages/client/ConsumptionSummary";
import CocktailExperience from "../src/pages/CocktailExperience";
import CocktailAnalytics from "../src/pages/CocktailAnalytics";
import PolicastroDemo from "../src/pages/PolicastroDemo";
import PolicastroDemoFlow from "../src/pages/PolicastroDemoFlow";
import ClientJourneyDemo from "../src/pages/ClientJourneyDemo";

export const router = createBrowserRouter([
  {
    path: "/venues/:venueId/settings/alerts",
    element: <AlertsSettingsPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/demo",
    element: <DemoPage />,
  
  },
  {
    path: "/cocktail",
    element: <CocktailExperience />,
  },
  {
    path: "/cocktail/analytics",
    element: <CocktailAnalytics />,
  },
  {
  path: "/staff",
  element: <StaffBoard />,
},

{
  path: "/experience/:venueId",
  element: <MenuExperience />,
},

{
  path: "/manager/:venueId/analytics",
  element: <ManagerAnalytics />,
},

{
  path: "/manager/:venueId/rules",
  element: <ManagerRules />,
},

{
  path: "/manager/:venueId/rules/logs",
  element: <ManagerRuleLogs />,
},

{
  path: "/manager/:venueId/promos",
  element: <ManagerPromoAnalytics />,
},

{
  path: "/manager",
  element: <ManagerBoard />,
},

{
  path: "/experience/:venueId/summary",
  element: <ConsumptionSummary />,
},
{
  path: "/policastro",
  element: <PolicastroDemo />,
},
{
  path: "/policastro/demo",
  element: <PolicastroDemoFlow />,
},
{
  path: "/experience/demo",
  element: <ClientJourneyDemo />,
},

]);
