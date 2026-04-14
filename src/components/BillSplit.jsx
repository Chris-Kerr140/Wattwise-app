import { useState } from "react";

function BillSplit({ appliances }) {
  const [people, setPeople] = useState(2);

  const totalDaily = appliances.reduce(
    (sum, a) => sum + Number(a.daily),
    0
  );

  const totalMonthly = appliances.reduce(
    (sum, a) => sum + Number(a.monthly),
    0
  );

  const dailySplit = people > 0 ? totalDaily / people : 0;
  const monthlySplit = people > 0 ? totalMonthly / people : 0;

  return (
    <div>
<h2 className="section-title">
  <span className="section-icon">🏠</span>
  Smart Household Bill Split
</h2>
      <label>Number of housemates:</label>

      <input
        type="number"
        value={people}
        min="1"
        onChange={(e) => setPeople(Number(e.target.value))}
      />

      <h3>Total Household Cost</h3>

      <p>Daily: £{totalDaily.toFixed(2)}</p>
      <p>Monthly: £{totalMonthly.toFixed(2)}</p>

      <h3>Per Person Estimate</h3>

      <p>Daily: £{dailySplit.toFixed(2)}</p>
      <p>Monthly: £{monthlySplit.toFixed(2)}</p>
    </div>
  );
}

export default BillSplit;