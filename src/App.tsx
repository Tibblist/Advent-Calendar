import { Grid2, Typography } from "@mui/material";
import { useState } from "react";
import DayDialog from "./components/DayDialog";
import { AdventDays } from "./constants";

function App() {
  const currentDay = new Date().getMonth() === 12 ? new Date().getDate() : 5;
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    chosenDay: -1,
  });

  if (currentDay === -1) {
    return null;
  }

  return (
    <>
      {dialogState.chosenDay >= 0 && (
        <DayDialog
          open={dialogState.isOpen}
          idx={dialogState.chosenDay}
          day={AdventDays[dialogState.chosenDay]}
          onClose={() => setDialogState({ isOpen: false, chosenDay: -1 })}
        />
      )}
      <Grid2 container direction={"column"}>
        <Typography variant="h3" align="center">
          Advent Calendar
        </Typography>
        <Typography sx={{ mt: 2 }}>Current Day: {currentDay} </Typography>
        <Grid2 container alignItems="center" justifyContent="center">
          {AdventDays.map((day, idx) => {
            const isDisabled = idx > currentDay - 1;
            return (
              <Grid2
                sx={{
                  width: 125,
                  height: 125,
                  margin: 1,
                  cursor: isDisabled ? "default" : "pointer",
                }}
                onClick={
                  isDisabled
                    ? undefined
                    : () => {
                        setDialogState({ isOpen: true, chosenDay: idx });
                      }
                }
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    opacity: isDisabled ? 0.42 : undefined,
                  }}
                  src={day.dayImage}
                ></img>
              </Grid2>
            );
          })}
        </Grid2>
      </Grid2>
    </>
  );
}

export default App;
