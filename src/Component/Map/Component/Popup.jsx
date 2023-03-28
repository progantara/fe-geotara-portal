import * as ol from "ol";
import { useContext, useEffect, } from "react";
import ReactDOMServer from 'react-dom/server';
import MapContext from "../../../Context/Map/MapContext";

const Popup = () => {
  const { map } = useContext(MapContext);  

  useEffect(() => {
    if (!map) return;
    var container = document.getElementById("popup");
    var content = document.getElementById("popup-content");
    var closer = document.getElementById("popup-closer");

    const overlay = new ol.Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });
    map.addOverlay(overlay);

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    map.on("singleclick", function (event) {
      if (map.hasFeatureAtPixel(event.pixel) === true) {
        // render
        var coordinate = event.coordinate;
        var features = map.getFeaturesAtPixel(event.pixel);
        content.innerHTML = features[0].getProperties().html;
        overlay.setPosition(coordinate);
        
      } else {
        overlay.setPosition(undefined);
        closer.blur();
      }
    });

    map.on('pointermove', function (e) {
      const pixel = map.getEventPixel(e.originalEvent);
      const hit = map.hasFeatureAtPixel(pixel);
      map.getTarget().style.cursor = hit ? 'pointer' : '';
    });

    return () => map.removeOverlay(overlay);
  }, [map]);

  return(
    <div id="popup" className="ol-popup">
      <a href="#" id="popup-closer" className="ol-popup-closer"></a>
      <div id="popup-content"></div>
    </div>
  );

};
export default Popup;
