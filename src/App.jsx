import "./App.css";

function App() {
  return (
    <div>
      <div className="form-body">
        <form action="">
          <label>
            Name <input type="text" />
          </label>{" "}
          <br />
          <label>
            PUC Date <input type="date" />
          </label>{" "}
          <br />
          <label>
            UID No. <input type="number" />
          </label>{" "}
          <br />
          <label>
            Insurance No. <input type="number" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
