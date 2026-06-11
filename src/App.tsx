import { BrowserRouter, Routes, Route } from "react-router-dom";

import PolicastroDemo from "./pages/PolicastroDemo";
import CocktailExperience from "./pages/CocktailExperience";
import CocktailAnalytics from "./pages/CocktailAnalytics";
import ClientJourneyDemo from "./pages/ClientJourneyDemo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PolicastroDemo />} />
        <Route path="/cocktail" element={<CocktailExperience />} />
        <Route path="/analytics" element={<CocktailAnalytics />} />
        <Route path="/journey" element={<ClientJourneyDemo />} />
        <Route path="/experience/demo" element={<ClientJourneyDemo />}/>
      </Routes>
    </BrowserRouter>
  );
}