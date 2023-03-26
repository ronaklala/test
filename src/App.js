import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://insurance-api-five.vercel.app/agents/get")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {loading === true ? (
        <>
          <h1>Loading Data...</h1>
        </>
      ) : (
        <>
          <table id="customers">
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>Insurnace Category</th>
              <th>Insurance Type</th>
            </tr>
            {data.map((d, i) => (
              <>
                <tr key={i}>
                  <td>{d.name}</td>
                  <td>{d.city}</td>
                  <td>{d.category}</td>
                  <td>{d.type}</td>
                </tr>
              </>
            ))}
          </table>
        </>
      )}
    </div>
  );
}

export default App;
