import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomizedDialogs from "../Dialog";
import axios from "axios";
import { useLocation } from "react-router-dom";

type Props = {
  cardData: string;
};

const BasicCard: React.FC<Props> = (props) => {
  const { cardData } = props;

  const [dialogdata, setdialogData] = React.useState<any>(false);
  const [dialoglist, setDialogData] = React.useState<any>([]);
  const location = useLocation();

  const toOpen = (props: any) => {
    setdialogData(true);
  };

  const redirectData = () => {
    let result: any = [];
    let url =
      location.pathname === "/applications"
        ? `https://engineering-task.elancoapps.com/api/applications/${cardData}`
        : `https://engineering-task.elancoapps.com/api/resources/${cardData}`;

    axios.get(url).then((response) => {
      response.data.forEach((ele: any, index: number) => {
        let rowObject = {
          id: Math.random(),
          ServiceName: ele.ServiceName,
          appName: ele.ResourceGroup,
          environment: ele.Tags.environment,
          Date: ele.Date,
          Cost: ele.Cost,
        };
        result.push(rowObject);
      });
      setDialogData(result);
    });
  };

  React.useEffect(() => {
    if (dialogdata) {
      redirectData();
    }
  }, [dialogdata]);

  return (
    <>
      <Card sx={{ minWidth: 275, cursor: "pointer" }} onClick={toOpen}>
        <CardContent>
          <Typography variant="h5" component="div">
            {cardData}
          </Typography>
        </CardContent>
      </Card>
      <CustomizedDialogs
        dialogdata={dialogdata}
        setdialogData={setdialogData}
        dialoglist={dialoglist}
      />
    </>
  );
};

export default BasicCard;
