import mapboxgl, { Map } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useRef, useState } from "react";

import { Box } from "@mui/system";
import LayersMemu from "./layers-menu.tsx";
import { initializeMap } from "./mapbox.tsx";
import ApiStatsMenu from "./stats-menu.tsx";
import { UsageInterface } from "./types.tsx";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESSTOKEN;

const initialUsage: UsageInterface = {
  country: { name: "Country", calls: 0 },
  buildings: { name: "Buildings", calls: 0 },
  cadastre: { name: "Cadastre", calls: 0 },
  property: { name: "Property", calls: 0 },
  local_government_areas: { name: "LGA", calls: 0 },
  gnaf: { name: "G-NAF", calls: 0 },
};

export const MapPage = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<Map | null>(null);

  // State for tracking the total number of API calls
  const [totalCalls, setTotalCalls] = useState<number>(0);

  // State for tracking the usage statistics of map layers
  const [usage, setUsage] = useState<UsageInterface>(initialUsage);

  useEffect(() => {
    if (map.current) {
      return; // initialize map only once
    }

    // Call the initializeMap function to set up the Mapbox map
    map.current = initializeMap(
      map.current!,
      mapContainer.current!,
      usage,
      setUsage,
      setTotalCalls
    );
  });

  const handleClick = () => {
    setUsage(initialUsage);
    setTotalCalls(0);
  };

  return (
    <Box>
      <LayersMemu />
      <ApiStatsMenu
        totalCalls={totalCalls}
        usage={usage}
        handleClick={handleClick}
      />
      <div ref={mapContainer} className="map-container" />
    </Box>
  );
};
