function TariffInput({ tariff, setTariff }) {
  return (
    <div>
      <h2>Enter Electricity Tariff (£ per kWh)</h2>

      <input
        type="number"
        value={tariff}
        onChange={(e) => setTariff(Number(e.target.value))}
      />
    </div>
  );
}

export default TariffInput;