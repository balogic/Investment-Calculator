export const UserInput = ({ onChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput["intialInvestment"].value}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput["annualInvestment"].value}
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput["expectedReturn"].value}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput["duration"].value}
            onChange={(event) => onChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
};
