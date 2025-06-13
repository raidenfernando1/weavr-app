import { useEffect, useState } from "react";

const App = () => {
  const [workerResponse, setWorkerResponse] = useState("Loading...");

  useEffect(() => {
    fetch("https://helloworld.fernandoraiden6.workers.dev")
      .then((res) => res.text())
      .then((data) => setWorkerResponse(data))
      .catch((err) => {
        console.error("Error calling worker:", err);
        setWorkerResponse("Failed to fetch from worker.");
      });
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React application.</p>
      <hr />
      <p>
        <strong>Response from Worker:</strong> {workerResponse}
      </p>
    </div>
  );
};

export default App;
