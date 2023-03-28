import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { VectorLayer } from "../Layers";
import { vector } from "../Source";
import ReactDOMServer from 'react-dom/server';

const Marker = ({ coordinate, style, popup }) => {
  return (
    <VectorLayer
      source={vector({
        features: [
          new Feature({
            geometry: new Point(fromLonLat(coordinate)),
            html: ReactDOMServer.renderToString(popup)
          }),
        ],
      })}
      style={style}
    />
  );
};
export default Marker;
