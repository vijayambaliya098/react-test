import { useEffect, useState } from "react";
import BasicCard from "../../components/Card";
import "./style.css";
import axios from "axios";

const Applications = () => {
  const [applicationlist, setApplicationList] = useState<any>([]);

  const fetchApplications = () => {
    axios
      .get("https://engineering-task.elancoapps.com/api/applications")
      .then((response) => {
        setApplicationList(response.data);
      });
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="applications-wraper">
      {applicationlist.map((data: string, key: number) => {
        return <BasicCard cardData={data} />;
      })}
    </div>
  );
};

export default Applications;
