import React from "react";
import { nanoid } from "nanoid";
import Card from "./ui/Card";
import styles from "./JobFilterBar.module.css";
import Button from "./ui/Button";
import { useGlobalContext } from "./context/FilterContext";

const JobFilterBar: React.FC = () => {
  const { filterTag, setFilterTag } = useGlobalContext();

  const removeFilterTag = (tag: string) => {
    setFilterTag((prev) => prev.filter((prev) => prev !== tag));
  };

  const clearAllFilters = () => {
    setFilterTag([]);
  };

  return (
    <>
      {filterTag.length > 0 && (
        <Card className={styles.filter}>
          <Card className={styles["filter-btns"]}>
            {filterTag.map((tag) => (
              <Button
                className={styles["filter-btn"]}
                key={nanoid()}
                onClick={() => removeFilterTag(tag)}
              >
                {tag && <span>{tag}</span>}
                {
                  <img
                    src="./images/icon-remove.svg"
                    alt="close icon"
                    className={styles["filter-img"]}
                  ></img>
                }
              </Button>
            ))}
          </Card>
          <Button className={styles["clear-btn"]} onClick={clearAllFilters}>
            clear
          </Button>
        </Card>
      )}
    </>
  );
};

export default JobFilterBar;
