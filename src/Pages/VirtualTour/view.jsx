import React, {useEffect, useState} from "react";
import { Pannellum } from "pannellum-react";

//image
import myImage from "../../Assets/img/view.jpg";
import { useParams } from "react-router-dom";
import { getOneWisata } from "../../Services/WisataService";

const View = () => {
  let { id } = useParams();
  const [wisata, setWisata] = useState([]);


  useEffect(() => {
    getOneWisata(id).then((res) => {
      setWisata(res.data.data);      
    });
  }, []);

  return (
    <>
      {/*360 */}
      <div>
        <Pannellum
          width="100%"
          height="760px"
          image={process.env.REACT_APP_API_BASE_URL+'/storage/wisata/'+wisata.file360}
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

export default View;
