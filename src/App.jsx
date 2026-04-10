import { useState } from "react";
import Dashboard from "./components/Dashboard";
import TariffInput from "./components/TariffInput";
import Calculator from "./components/Calculator";
import BillSplit from "./components/BillSplit";
import Insights from "./components/Insights";

function App() {
  const [page, setPage] = useState("dashboard");
  const [tariff, setTariff] = useState(0);
  const [appliances, setAppliances] = useState([]);

  return (
    <div>
      <h1>WattWise</h1>

      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("tariff")}>Tariff</button>
      <button onClick={() => setPage("calculator")}>Calculator</button>
      <button onClick={() => setPage("split")}>Bill Split</button>
      <button onClick={() => setPage("insights")}>Insights</button>

      {page === "dashboard" && (
        <Dashboard appliances={appliances} tariff={tariff} />
      )}

      {page === "tariff" && (
        <TariffInput tariff={tariff} setTariff={setTariff} />
      )}

      {page === "calculator" && (
        <Calculator
          tariff={tariff}
          appliances={appliances}
          setAppliances={setAppliances}
        />
      )}

      {page === "split" && (
        <BillSplit appliances={appliances} />
      )}

      {page === "insights" && (
        <Insights appliances={appliances} />
      )}
    </div>
  );
}

export default App;