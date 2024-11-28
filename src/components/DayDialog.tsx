import { Dialog, DialogContent, DialogProps, DialogTitle } from "@mui/material";
import { AdventDay } from "../types";

export interface DayDialogProps extends DialogProps {
  idx: number;
  day: AdventDay;
}

const DayDialog = ({ idx, day, onClose, open }: DayDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Day {idx + 1}</DialogTitle>
      <DialogContent>
        <img style={{ width: 250, height: 250 }} src={day.dayImage}></img>
      </DialogContent>
    </Dialog>
  );
};

export default DayDialog;
