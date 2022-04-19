import React, { useEffect, useState } from "react";
import { Job } from "../dataModal/DataModal";
import jobs from "../../assets/data/data.json";

/* Interfaces */
interface FilterContextProps {
  filterTag: string[];
  setFilterTag: React.Dispatch<React.SetStateAction<string[]>>;
  filterJobs: Job[];
  setData: React.Dispatch<React.SetStateAction<Job[]>>;
}

interface FilterProviderProps {
  children: React.ReactNode;
}

const FilterContext = React.createContext<FilterContextProps | undefined>(
  undefined
);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [data, setData] = useState<Job[]>(jobs);

  const [filterTag, setFilterTag] = useState<string[]>([]);

  const [filterJobs, setFilterJobs] = useState<Job[]>(data);

  useEffect(() => {
    setFilterJobs(
      data.filter((job) =>
        filterTag.every((tag) =>
          [...job.languages, ...job.tools, job.level, job.role]
            .flat()
            .includes(tag)
        )
      )
    );
  }, [data, filterTag]);

  return (
    <FilterContext.Provider
      value={{ filterTag, filterJobs, setData, setFilterTag }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = React.useContext(FilterContext);

  if (context === undefined) {
    throw Error(
      "FilterContext must be used inside of a Provider components, " +
        "otherwise it will not function correctly."
    );
  }

  return context;
};
