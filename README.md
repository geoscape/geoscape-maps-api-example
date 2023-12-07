# Geoscape Maps Application

Welcome to the Geoscape Maps API Application repository! This project showcases the utilization of the Geoscape Maps API to exhibit various geospatial layers on a map through MapboxJS. Users have the ability to dynamically toggle between map layers, view API usage statistics, and interact with the map seamlessly.

## Prerequisites

Make sure you have the following set up:

- Node.js v18+
- [Mapbox Access Token](https://docs.mapbox.com/help/getting-started/access-tokens/)
- [Geoscape API Key](https://hub.geoscape.com.au/) (Get a free API Key from Geoscape Hub)

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install` or `yarn install`
3. Create a `.env` file in the project root and replace placeholder values with your actual credentials:
    ```env
    VITE_MAPBOX_ACCESSTOKEN=your-mapbox-access-token
    VITE_GEOSCAPE_MAPSAPI_KEY=your-geoscape-api-key
    ```
4. Run the development server: `yarn dev` or `npm run dev`
5. Open [http://localhost:5173/](http://localhost:5173/)

## Usage

Once the application is running, explore the map, toggle layers using the menu, and view API usage statistics. The provided statistics menu displays information about the number of requests made and credits consumed. You can reset the usage counter by clicking the "RESET COUNTER" button.

## Configuration

### `config-map.tsx`

This file exports configuration constants for the Mapbox map, including:

- `MAPBOX_STYLE`: Mapbox style URL.
- `API_BASE_URL`: Base URL for the Geoscape API.
- `INITIAL_CENTER`: Initial center coordinates of the map.
- `INITIAL_ZOOM`: Initial zoom level of the map.
- `LAYERS_COLOR`: Background color settings for map layers.
- `LAYER_STYLES`: Map layer styles, including source and paint properties.

## License

This code is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code according to the terms of the license.
