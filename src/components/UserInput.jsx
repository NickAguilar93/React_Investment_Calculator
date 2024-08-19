export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            value={userInput.initalInvestment}
            onChange={(e) => onChange(e.target.value, "initalInvestment")}
            type="number"
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={userInput.annualInvestment}
            onChange={(e) => onChange(e.target.value, "annualInvestment")}
            type="number"
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={userInput.expectedReturn}
            onChange={(e) => onChange(e.target.value, "expectedReturn")}
            type="number"
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={userInput.duration}
            onChange={(e) => onChange(e.target.value, "duration")}
            type="number"
            required
          />
        </p>
      </div>
    </section>
  );
}
