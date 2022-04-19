import React from "react";
import Card from "./ui/Card";
import { Job } from "./dataModal/DataModal";
import styles from "./SingleJob.module.css";

interface SingleJobProps {
  job: Job;
}

const SingleJob: React.FC<SingleJobProps> = ({ job }) => {
  console.log(job.logo);
  return (
    <Card className={styles.job}>
      <img src={job.logo} alt="company logo" className={styles["job-img"]} />
      <Card className={styles["job-main"]}>
        <Card className={styles["job-card"]}>
          <p className={styles["job-card__company"]}>{job.company}</p>
          <Card className={styles["job-type"]}>
            {job.new && (
              <p className={`${styles.type} ${styles["job-type__new"]}`}>
                {"new!"}
              </p>
            )}
            {job.featured && (
              <p className={`${styles.type} ${styles["job-type__featured"]}`}>
                {"featured"}
              </p>
            )}
          </Card>
        </Card>
        <h2 className={styles["job-position"]}>{job.position}</h2>
        <ul className={styles["job-detail"]}>
          <li className={styles["job-detail__item"]}>{job.postedAt}</li>
          <li className={styles["job-detail__item"]}>{job.contract}</li>
          <li className={styles["job-detail__item"]}>{job.location}</li>
        </ul>
      </Card>
    </Card>
  );
};

export default SingleJob;
