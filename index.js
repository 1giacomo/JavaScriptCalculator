function App() {
  const display = () => {};

  return (
    <div className="container">
      <div className="grid">
        <div onClick={display} className="dis"></div>
        <div onClick={display} className="padButton AC tomato">
          AC
        </div>
        <div onClick={display} className="padButton C tomato">
          C
        </div>
        <div onClick={display} className="padButton div">
          /
        </div>
        <div onClick={display} className="padButton times">
          x
        </div>
        <div onClick={display} className="padButton seven dark-grey">
          7
        </div>
        <div onClick={display} className="padButton eight dark-grey">
          8
        </div>
        <div onClick={display} className="padButton nine dark-grey">
          9
        </div>
        <div onClick={display} className="padButton minus">
          -
        </div>
        <div onClick={display} className="padButton four dark-grey">
          4
        </div>
        <div onClick={display} className="padButton five dark-grey">
          5
        </div>
        <div onClick={display} className="padButton six dark-grey">
          6
        </div>
        <div onClick={display} className="padButton plus">
          +
        </div>
        <div onClick={display} className="padButton one dark-grey">
          1
        </div>
        <div onClick={display} className="padButton two dark-grey">
          2
        </div>
        <div onClick={display} className="padButton three dark-grey">
          3
        </div>
        <div onClick={display} className="padButton equal blue">
          =
        </div>
        <div onClick={display} className="padButton zero dark-grey">
          0
        </div>
        <div onClick={display} className="padButton dot dark-grey">
          .
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
