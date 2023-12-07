import React, { Dispatch, useState } from "react";
import { Chip } from "@mui/material";
import mapboxgl, { Map, MapSourceDataEvent } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { createRoot } from "react-dom/client";
import {
  API_BASE_URL,
  BUTTON_BACKGROUND_COLOR,
  FONT_COLOR,
  INITIAL_CENTER,
  INITIAL_ZOOM,
  LAYER_STYLES,
  MAPBOX_STYLE,
} from "./config-map.tsx";

import { UsageInterface } from "./types.tsx";
import { addSourceAndLayer } from "./utils.tsx";

const VITE_GEOSCAPE_MAPSAPI_KEY = import.meta.env.VITE_GEOSCAPE_MAPSAPI_KEY;

const ToggleLayerButton = ({
  name,
  layerId,
  map,
}: {
  name: string;
  layerId: string;
  map: Map;
}) => {
  const initialValue = map.getLayoutProperty(layerId, "visibility");
  const [active, setActive] = useState(initialValue);

  const handleToggle = () => {
    const visibility = map.getLayoutProperty(layerId, "visibility");
    if (visibility === "visible") {
      map.setLayoutProperty(layerId, "visibility", "none");
      setActive("none");
    } else {
      map.setLayoutProperty(layerId, "visibility", "visible");
      setActive("visible");
    }
  };

  return (
    <Chip
      key={layerId}
      onClick={handleToggle}
      size="medium"
      variant="outlined"
      className="chip"
      label={`${name}`}
      sx={{
        width: "168px",
        fontSize: "14px",
        textAlign: "left",
        backgroundColor:
          active === "visible" ? BUTTON_BACKGROUND_COLOR[name] : "white",
        color: active === "visible" ? FONT_COLOR[name] : "black",
      }}
    />
  );
};

export const initializeMap = (
  map: Map,
  mapContainer: HTMLElement,
  usage: UsageInterface,
  setUsage: Dispatch<React.SetStateAction<UsageInterface>>,
  setTotalCalls: Dispatch<React.SetStateAction<number>>
) => {
  map = new mapboxgl.Map({
    container: mapContainer,
    style: MAPBOX_STYLE,
    center: INITIAL_CENTER,
    zoom: INITIAL_ZOOM,
    transformRequest: function transformRequest(url, resourceType) {
      // Add authorization header for requests to the specified API base URL

      if (
        (resourceType === "Source" || resourceType === "Tile") &&
        url.startsWith(API_BASE_URL)
      ) {
        return {
          url: url,
          headers: { Authorization: VITE_GEOSCAPE_MAPSAPI_KEY },
        };
      }
      return {
        url: url,
      };
    },
  });

  map.on("load", function () {
    // Add sources and layers to the map
    Object.keys(LAYER_STYLES).forEach((name) =>
      addSourceAndLayer(map!, name, LAYER_STYLES[name].id)
    );
  });

  map.on("idle", () => {
    const toggleableLayerIds = Object.keys(LAYER_STYLES).map((name) => name);

    const layersContainer: HTMLElement | null = document.getElementById(
      "buttons-layer-container"
    );
    // Set up the corresponding toggle button for each layer.
    for (const name of toggleableLayerIds) {
      if (!document.getElementById(name)) {
        const buttonContainer = document.createElement("div"); // Create a new container for each button
        buttonContainer.id = name;

        const buttonComponent = (
          <ToggleLayerButton
            key={name}
            name={name}
            layerId={LAYER_STYLES[name].id}
            map={map!}
          />
        );

        const root = createRoot(buttonContainer);
        root.render(buttonComponent);

        layersContainer?.appendChild(buttonContainer); // Append the container to the 'menu'
      }
    }
  });

  map.on("data", (e: MapSourceDataEvent) => {
    if (e.tile?.latestFeatureIndex && e.sourceId in usage) {
      // Update usage statistics when a tile is loaded
      setUsage((prevUsage: UsageInterface) => ({
        ...prevUsage,
        [e.sourceId]: {
          ...prevUsage[e.sourceId],
          calls: prevUsage[e.sourceId]?.calls + 1 || 1,
        },
      }));

      setTotalCalls((prevUsage: number) => prevUsage + 1);
    }
  });
  // Add a navigation control to the top-right corner of the map
  const nav = new mapboxgl.NavigationControl({ showCompass: false });
  map.addControl(nav, "top-right");
  return map;
};
