import { LngLatLike } from "mapbox-gl";
import { Color, Layers } from "./types.tsx";


const MAPBOX_STYLE = "mapbox://styles/geoscape-psma/clpt55jcl00f201px05cd3bf1";

const API_BASE_URL = "https://api.psma.com.au/v1/maps/geoscape_v1/";

const INITIAL_CENTER: LngLatLike = [133.7751, -25.2744];

const INITIAL_ZOOM = 4;

const COUNTRY_COLOR = "rgba(230, 0, 184, 1)";
const BUILDINGS_COLOR = "rgba(72, 44, 255, 1)";
const CADASTRE_COLOR = "rgba(84, 58, 86, 1)";
const PROPERTY_COLOR = "rgba(0, 78, 221, 1)";
const LGA_COLOR = "rgba(0, 156, 130, 1)";
const GNAF_COLOR = "rgba(255,0, 0, .9)";

const COUNTRY_COLOR_TRANSPARENT = "rgba(230, 0, 184, .2)";
const BUILDINGS_COLOR_TRANSPARENT = "rgba(72, 44, 255, .4)";
const CADASTRE_COLOR_TRANSPARENT = "rgba(84, 58, 86, .4)";
const PROPERTY_COLOR_TRANSPARENT = "rgba(0, 78, 221, .4)";
const LGA_COLOR_TRANSPARENT = "rgba(0, 156, 130, .4)";
const GNAF_COLOR_TRANSPARENT = "rgba(255,0, 0, .4)";


const BUTTON_BACKGROUND_COLOR: Color = {
  "Geoscape Country": COUNTRY_COLOR_TRANSPARENT,
  "Geoscape Buildings": BUILDINGS_COLOR_TRANSPARENT,
  "Geoscape Cadastre": CADASTRE_COLOR_TRANSPARENT,
  "Geoscape Property": PROPERTY_COLOR_TRANSPARENT,
  "Geoscape LGA": LGA_COLOR_TRANSPARENT,
  "G-NAF": GNAF_COLOR_TRANSPARENT,
};

const FONT_COLOR: Color = {
  Country: COUNTRY_COLOR,
  Buildings: BUILDINGS_COLOR,
  Cadastre: CADASTRE_COLOR,
  Property: PROPERTY_COLOR,
  LGA: LGA_COLOR,
  GNAF: GNAF_COLOR,
};

// Colors for different map layers
const LAYERS_COLOR: Color = {
  Country: COUNTRY_COLOR_TRANSPARENT,
  Buildings: BUILDINGS_COLOR,
  Cadastre: CADASTRE_COLOR,
  Property: PROPERTY_COLOR,
  LGA: LGA_COLOR,
  GNAF: GNAF_COLOR,
}

const LAYER_STYLES: Layers = {
  "Geoscape Country": {
    id: "country",
    source: "country",
    "source-layer": "country",
    type: "fill",
    paint: {
      "fill-color": LAYERS_COLOR.Country, 
    },
    layout: {
      visibility: "visible",
    },
  },

  "Geoscape Buildings": {
    id: "buildings",
    source: "buildings",
    "source-layer": "buildings",
    type: "line",
    paint: {
      "line-color": LAYERS_COLOR.Buildings, 
      "line-width": 1,
    },
    layout: {
      visibility: "none",
    },
  },

  "Geoscape Cadastre": {
    id: "cadastre",
    source: "cadastre",
    "source-layer": "cadastre",
    type: "line",
    paint: {
      "line-color": LAYERS_COLOR.Cadastre, 
      "line-width": 1,
    },
    layout: {
      visibility: "none",
    },
  },

  "Geoscape Property": {
    id: "property",
    source: "property",
    "source-layer": "property",
    type: "line",
    paint: {
      "line-color": LAYERS_COLOR.Property, 
      "line-width": 1,
    },
    layout: {
      visibility: "none",
    },
  },

  "Geoscape LGA": {
    id: "local_government_areas",
    source: "local_government_areas",
    "source-layer": "local_government_areas",
    type: "line",
    paint: {
      "line-color": LAYERS_COLOR.LGA, 
      "line-width": 1,
    },
    layout: {
      visibility: "none",
    },
  },

  "G-NAF": {
    id: "gnaf",
    source: "gnaf",
    "source-layer": "gnaf", 
    type: "circle",
    paint: {
      "circle-radius": 5,  // Adjust the circle radius as needed
      "circle-color": LAYERS_COLOR.GNAF,
      "circle-opacity": 0.5, // You can adjust the opacity as needed
    },
    layout: {
      visibility: "none",
    },
  },
};

export {
  API_BASE_URL,
  BUTTON_BACKGROUND_COLOR,
  FONT_COLOR,
  INITIAL_CENTER,
  INITIAL_ZOOM,
  LAYER_STYLES,
  MAPBOX_STYLE
};

