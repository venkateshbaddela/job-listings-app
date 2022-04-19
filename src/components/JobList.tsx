import React from "react";
import SingleJob from "./SingleJob";
import JobFilterBtns from "./JobFilterBtns";
import Card from "./ui/Card";
import styles from "./JobList.module.css";
import { useGlobalContext } from "./context/FilterContext";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const JobList: React.FC = () => {
  const { filterJobs } = useGlobalContext();

  return (
    <Card className={styles.joblist}>
      {filterJobs.map((data) => (
        <AnimatePresence key={data.id}>
          <LayoutGroup>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }}
              layout
              className={`${styles["joblist-item"]} ${
                data.new && data.featured ? styles["job-highlight"] : ""
              }`}
            >
              <SingleJob job={data}></SingleJob>
              <JobFilterBtns job={data}></JobFilterBtns>
            </motion.div>
          </LayoutGroup>
        </AnimatePresence>
      ))}
    </Card>
  );
};

export default JobList;
