import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import GeoscapeDeveloperSvg from "/hub-logo.svg";

const LayersMemu = () => {
  return (
    <Card id="buttons-layers-menu">
      <CardHeader
        variant="primary"
        sx={{ padding: "16px 16px 5px 16px" }}
        avatar={
          <img src={GeoscapeDeveloperSvg} className="logo" alt="Vite logo" />
        }
      />
      <Box
        id="buttons-layer-container"
        sx={{
          padding: "4px 16px 0px 16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "10px",
        }}
      />
    </Card>
  );
};

export default LayersMemu;
