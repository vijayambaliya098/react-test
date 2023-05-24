import { useEffect, useState } from "react";
import BasicCard from "../../components/Card";
import "./style.css";
import axios from "axios";

const Resources = () => {
  const [resourceslist, setResourcesList] = useState<any>([]);

  const fetchResources = () => {
    axios
      .get("https://engineering-task.elancoapps.com/api/resources")
      .then((response) => {
        setResourcesList(response.data);
      });
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="applications-wraper">
      {resourceslist.map((data: string, key: number) => {
        return <BasicCard cardData={data} />;
      })}
    </div>
  );
};

export default Resources;
