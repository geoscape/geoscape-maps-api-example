import { Box, Button, Card, CardHeader, Typography } from "@mui/material";
import { UsageInterface, UsageKey } from "./types";

const ApiStatsMenu = ({
  totalCalls,
  usage,
  handleClick,
}: {
  totalCalls: number;
  usage: UsageInterface;
  handleClick: () => void;
}) => {
  const renderUsage = (values: UsageKey) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "5px 0px 5px 0px",
      }}
      key={values.name}
    >
      <Typography variant="body2">{values.name}</Typography>
      <Typography variant="body2">{values.calls}</Typography>
    </Box>
  );

  return (
    <Card id="maps-stats-menu">
      <CardHeader
        title="Maps API Stats"
        variant="primary"
        sx={{ padding: "16px 16px 0px 16px" }}
      />
      <Box sx={{ padding: "0px 16px 0px 16px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 0px 10px 0px",
          }}
        >
          <Typography variant="h6">Request:</Typography>
          <Typography variant="h6">{totalCalls}</Typography>
        </Box>

        {Object.values(usage).map((values) => renderUsage(values))}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0px 0px 10px 0px",
          }}
        >
          <Typography variant="h6">Credits:</Typography>
          <Typography variant="h6">{(totalCalls * 0.02).toFixed(2)}</Typography>
        </Box>

        {Object.values(usage).map((values: any) =>
          renderUsage({
            ...values,
            calls: (values.calls * 0.02).toFixed(2),
          })
        )}

        <Button
          size="small"
          onClick={handleClick}
          sx={{
            padding: "10px 0px 0px 0px",
            width: "170px",
            textAlign: "center",
          }}
        >
          RESET COUNTER
        </Button>
      </Box>
    </Card>
  );
};

export default ApiStatsMenu;
