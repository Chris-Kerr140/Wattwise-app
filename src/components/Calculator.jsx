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

    // reset inputs after adding
    setName("");
    setWatts("");
    setHours("");
  };

  return (
    <div>
      <h2>🔌 Appliance Cost Calculator</h2>

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