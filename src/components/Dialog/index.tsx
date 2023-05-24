import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

type Props = {
  dialogdata: any;
  setdialogData: any;
  dialoglist: any;
};

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const CustomizedDialogs: React.FC<Props> = (props) => {
  const { dialogdata, setdialogData, dialoglist } = props;

  const handleClose = () => {
    setdialogData(false);
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 90 },
    { field: "ServiceName", headerName: "ServiceName", width: 210 },
    { field: "appName", headerName: "AppName", width: 210 },
    { field: "environment", headerName: "Environment", width: 210 },
    { field: "Date", headerName: "Date", width: 210 },
    { field: "Cost", headerName: "Cost", width: 210 },
  ];

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={dialogdata}
      maxWidth={false}
    >
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={handleClose}
      />
      <DialogContent dividers>
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={dialoglist}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};

export default CustomizedDialogs;
