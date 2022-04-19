import Card from "./components/ui/Card";
import JobList from "./components/JobList";
import JobFilterBar from "./components/JobFilterBar";
import styles from "./App.module.css";

function App() {
  return (
    <Card className={styles.jobApp}>
      <Card className={styles["background-img"]}></Card>
      <JobFilterBar></JobFilterBar>
      <JobList></JobList>
    </Card>
  );
}

export default App;
