import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import JobList from "./components/JobList";
import JobFilterBar from "./components/JobFilterBar";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Card className={styles.jobApp}>
        <Card className={styles["background-img"]}></Card>
        <JobFilterBar></JobFilterBar>
        <JobList></JobList>
      </Card>
      <Card className={styles.attribution}>
        {"Challenge by"}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          {" Frontend Mentor"}
        </a>
        {". Coded by"} <Button className={styles.btn}>{"venkateshb"}</Button>.
      </Card>
    </>
  );
}

export default App;
