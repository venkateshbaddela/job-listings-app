import React from "react";
import { nanoid } from "nanoid";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { Job } from "./dataModal/DataModal";
import styles from "./JobFilterBtns.module.css";
import { useGlobalContext } from "./context/FilterContext";

interface JobFilterBtnsProps {
  job: Job;
}

const JobFilterBtns: React.FC<JobFilterBtnsProps> = ({ job }) => {
  const filterBtns = [
    ...job.languages,
    ...job.tools,
    job.level,
    job.role,
  ].flat();

  const { setFilterTag } = useGlobalContext();

  const addFilterTag = (tag: string) => {
    setFilterTag((prev: string[]) => {
      if (prev.length > 0 && prev.includes(tag))
        return prev.filter((prevTag) => prevTag !== tag);
      else return [...prev, tag];
    });
  };

  return (
    <Card className={styles.jobBtns}>
      {filterBtns.map((btn) => (
        <Button
          className={styles.jobBtn}
          key={nanoid()}
          onClick={() => addFilterTag(btn)}
        >
          {btn}
        </Button>
      ))}
    </Card>
  );
};

export default JobFilterBtns;
