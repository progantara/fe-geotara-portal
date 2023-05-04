import React, { useEffect, useState } from "react";
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
      <div className="relative">
        <Pannellum
          width="100%"
          height="100vh"
          image={
            process.env.REACT_APP_API_BASE_URL +
            "/storage/wisata/" +
            wisata.file360
          }
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
        ></Pannellum>
        <div className="absolute bottom-0 left-0 right-0 text-center mb-3 mx-auto">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => window.history.back()}
          >
            Kembali
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => window.open(process.env.REACT_APP_API_BASE_URL + "/wisata-cardboard/" + wisata._id)}
          >
            Cardboard VR
          </button>          
        </div>
      </div>
    </>
  );
};

export default View;
