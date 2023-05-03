import { Link } from "react-router-dom";
import profile from "../../Assets/img/profile.jpg";

const ArtikelCard = ({ artikel }) => {
  
  const handleDescription = (text) => {
    // clear tags html
    const regex = /(<([^>]+)>)/gi;
    const result = text.replace(regex, "");
    // clear &nbsp;&amp;&quot;&gt;&lt;
    const regex2 = /(&nbsp;|&amp;|&quot;|&gt;|&lt;)/gi;
    const result2 = result.replace(regex2, "");

    // trim text
    const trimText = result2.substring(0, 200);
    return trimText + "...";    

   };

   const handleTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    // get name month
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();;

    return `${day} ${month}, ${year}`;
    };

  return (
    <Link to={"/artikel/detail/"+artikel._id} className="flex hover:bg-white items-center p-5">
      <div className="w-2/5 h-[12rem]">
        <img
          className="rounded-lg w-full h-full object-cover object-right"
          src={
            process.env.REACT_APP_API_BASE_URL +
            `/storage/artikel/` +
            artikel.thumbnail
          }
          alt="post-7"
        />
      </div>
      <div className="w-3/5 pl-5">
        <div className="tracking-wide text-sm text-dark font-semibold flex flex-row">
          <img className="w-10 h-8 rounded-full" src={profile} alt={profile} />
          <p className="text-sm text-dark mt-2 ml-2">Admin</p>
          <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
          <p className="text-sm text-dark mt-2">Wisata</p>
          <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
          <p className="text-sm text-dark mt-2">{handleTimestamp(artikel.updated_at)}</p>
        </div>
        <div          
          className="block mt-1 text-xl font-semibold text-green-900"
        >
          {artikel.judul}
        </div>
        <p className="mt-2 text-green-900 text-base mr-10">
          {handleDescription(artikel.content)}
        </p>
      </div>
    </Link>
  );
};

export default ArtikelCard;
