import "./styles.css";

export default function App(props) {
  return (
    <div className="App" id={props.color}>
      <div className="gift">
        <div className="date">
          <p>{props.date}</p>
        </div>
        <div className="btn">
          <button>Case Study</button>
        </div>
        <div className="gif">
          <p>{props.gift}</p>
          <p>{props.other}</p>
        </div>
        <div className="date">
          <p>{props.type}</p>
        </div>
      </div>
      <div className="card">
        <div className="img">
          <img src={props.image} alt="Amazon" width="100%" height="100%" />
        </div>
        <div className="arrow">
          <img
            src="https://lh3.googleusercontent.com/proxy/u48dUES2gPVHoB3Rv99m7Rx_gtwGJkfWfeuN5yFpOys5yzi1ttFPp_bC0v8x4BpjiQc0esECPQcBv_Zec8TJ0jfHaMnZO7EdMwQgZq_cDLWghoYZLk_9m9fBnrH_3abuFXRQTnig0TV7LWdu"
            alt="Amazon"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
