import { useState } from "react";

function Calculator({ tariff, appliances, setAppliances }) {
  const [name, setName] = useState("");
  const [watts, setWatts] = useState("");
  const [hours, setHours] = useState("");

  const addAppliance = () => {
    if (!tariff || !watts || !hours || !name) {
      alert("Please complete all fields");
      return;
    }

    const dailyCost = (watts / 1000) * hours * (tariff / 100);
    const monthlyCost = dailyCost * 30;
    const yearlyCost = dailyCost * 365;

    const newAppliance = {
      name,
      daily: dailyCost.toFixed(2),
      monthly: monthlyCost.toFixed(2),
      yearly: yearlyCost.toFixed(2)
    };

    setAppliances([...appliances, newAppliance]);

    setName("");
    setWatts("");
    setHours("");
  };

  const loadExample = () => {
    const exampleAppliance = {
      name: "Electric Heater",
      daily: "6.43",
      monthly: "192.90",
      yearly: "2347.00"
    };

    setAppliances([...appliances, exampleAppliance]);
  };

  return (
    <div className="card">
<h2 className="section-title">
  <span className="section-icon">🔌</span>
  Appliance Cost Calculator
</h2>
      <input
        placeholder="Appliance name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Watts"
        value={watts}
        onChange={(e) => setWatts(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours per day"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <button onClick={addAppliance}>
        Add Appliance
      </button>

      <button onClick={loadExample}>
        Load Example Appliance
      </button>

      <ul>
        {appliances.map((a, i) => (
          <li key={i}>
            {a.name} — £{a.daily}/day | £{a.monthly}/month
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;