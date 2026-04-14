function Insights({ appliances }) {
  if (!appliances.length) {
    return (
      <div>
        <h2>Savings Insights</h2>
        <p>Add appliances in the calculator to see personalised energy advice.</p>
      </div>
    );
  }

  return (
    <div>
<h2 className="section-title">
  <span className="section-icon">💡</span>
  Savings Insights
</h2>
      {appliances.map((a, i) => {
        const monthly = Number(a.monthly);

        if (monthly > 150) {
          return (
            <p key={i}>
              ⚠️ {a.name} costs over £150/month — reducing usage could significantly lower your bill.
            </p>
          );
        }

        if (monthly > 50) {
          return (
            <p key={i}>
              💡 {a.name} has moderate energy usage — consider running during off-peak hours.
            </p>
          );
        }

        return (
          <p key={i}>
            ✅ {a.name} is energy efficient compared to typical household appliances.
          </p>
        );
      })}
    </div>
  );
}

export default Insights;