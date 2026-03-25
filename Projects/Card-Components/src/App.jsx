import Card from "./components/Card";
import jobs from "./assets/cardData";
import "./App.css";

function App() {
  return (
    <div id="container">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
}
export default App;
