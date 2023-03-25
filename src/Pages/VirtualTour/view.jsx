import React from "react";
import { Pannellum } from "pannellum-react";

//image
import myImage from "../../Assets/img/view.jpg";

const view = () => {
  return (
    <>
      {/*360 */}
      <div>
        <Pannellum
          width="100%"
          height="760px"
          image={myImage}
          pitch={0}
          yaw={180}
          hfov={200}
          autoRotate={0}
          showFullscreenCtrl={true}
          showControls={true}
          compass={true}
          draggable={true}
          mouseZoom={true}
          autoLoad={true}
          previewAuthor="GEOTARA"
          onLoad={() => {
            console.log("panorama loaded");
          }}
        >
        </Pannellum>
      </div>
    </>
  );
};

export default view;
