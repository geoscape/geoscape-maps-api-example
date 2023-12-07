import { AnySourceData, Map } from "mapbox-gl";
import { API_BASE_URL, LAYER_STYLES } from "./config-map.tsx";

export { addSourceAndLayer, getSourceConfig };

const getSourceConfig: (layerId: string) => AnySourceData = (
    layerId: string
) => {
    return {
        type: "vector",
        tiles: [`${API_BASE_URL}${layerId}/{z}/{x}/{y}.pbf`],
        tolerance: 0,
    };
};
const addSourceAndLayer = (map: Map, name: string, layerId: string) => {
    map.addSource(layerId, getSourceConfig(layerId));
    map.addLayer(LAYER_STYLES[name]);
};