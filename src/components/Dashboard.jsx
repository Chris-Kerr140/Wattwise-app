function Dashboard({ appliances, tariff }) {
  const totalDaily = appliances.reduce(
    (sum, a) => sum + Number(a.daily),
    0
  );

  const totalMonthly = appliances.reduce(
    (sum, a) => sum + Number(a.monthly),
    0
  );

  const totalYearly = appliances.reduce(
    (sum, a) => sum + Number(a.yearly),
    0
  );

  return (
    <div>
      <h2>Dashboard</h2>
      
      <h3 className="highlight">
  Estimated Monthly Cost: £{totalMonthly.toFixed(2)}
</h3>

      <p>Current tariff: {tariff}p per kWh</p>

      <h3>Estimated Household Energy Cost</h3>

      <p>Daily: £{totalDaily.toFixed(2)}</p>
      <p>Monthly: £{totalMonthly.toFixed(2)}</p>
      <p>Yearly: £{totalYearly.toFixed(2)}</p>
    </div>
  );
}

export default Dashboard;