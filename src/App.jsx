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
    <div className="app-container">
      <div className="header">
<h1 className="logo">
  <span className="logo-icon">⚡</span> WattWise
</h1>
        <p>Understand your energy usage. Reduce your household bills.</p>
      </div>

      {appliances.length > 0 && (
  <div className="top-metric">
    Estimated Monthly Cost: £
    {appliances
      .reduce((sum, a) => sum + Number(a.monthly), 0)
      .toFixed(2)}
  </div>
)}

      <div className="card nav-bar">
        <button
          className={page === "dashboard" ? "active" : ""}
          onClick={() => setPage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={page === "tariff" ? "active" : ""}
          onClick={() => setPage("tariff")}
        >
          Tariff
        </button>

        <button
          className={page === "calculator" ? "active" : ""}
          onClick={() => setPage("calculator")}
        >
          Calculator
        </button>

        <button
          className={page === "split" ? "active" : ""}
          onClick={() => setPage("split")}
        >
          Bill Split
        </button>

        <button
          className={page === "insights" ? "active" : ""}
          onClick={() => setPage("insights")}
        >
          Insights
        </button>
      </div>

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

      <footer className="footer">
        WattWise prototype – Student energy cost insights tool
      </footer>
    </div>
  );
}

export default App;