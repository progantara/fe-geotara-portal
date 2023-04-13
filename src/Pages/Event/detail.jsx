import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import PortalTemplate from "../../Component/Layout";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";

import { getOneEvent } from '../../Services/EventService';

//Image
const EventDetail = () => {
  const items = [
    { label: "Event", url: "/Event" },
    { label: "Event Detail", url: "/Event/detail" },
  ];

  const {id} = useParams();

	// Get Data Event
	const [event, setEvent] = useState([]);

	useEffect(() => {
		getOneEvent(id).then((res) => {
		  setEvent(res.data.data);
				console.log(res.data);
		});
	}, []);

  return (
    <PortalTemplate items={items}>
      <div className="py-10 px-20 bg-green-100">
        <h2 className="mb-2 text-lg lg:text-1xl font-bold text-primary">Event</h2>
        <p className="mb-8 text-xl lg:text-5xl font-extrabold text-green-800">{event.nama}</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              // src={"http://127.0.0.1:8000/storage/event/" + event.flyer_image}
              src={process.env.REACT_APP_API_BASE_URL+ "/storage/event/" + item.flyer_image}
              alt="Event"
              className=" bg-center object-cover h-full w-full filter brightness-50 bg-cover rounded-2xl"
            />
			<div className="absolute flex flex-col items-start justify-end w-30 h-17 bottom-10 left-4">
				<p className="text-xs text-white">Rp. {event.harga}</p>
				<p className="text-xs md:text-lg font-bold text-white my-1">
					{event.nama}
				</p>
				<p className="flex items-center space-x-3 text-xs text-white color-white ">
					<IoCalendarClearOutline className="mr-1" />
					{event.start_event?.date}
					<BiMap className="mr-1" />
					{event.wisata?.lokasi?.alamat}
				</p>
			</div>
          </div>
          <div className="col-span-2 border-4 border-white rounded-lg bg-white overflow-hidden">
            <div class="m-3 text-xl font-bold flex justify-center">Deskripsi</div>
            <div className="text-dark text-base mx-4 my-2">
              <p>
                {event.deskripsi}
              </p>
              <div className="pt-5 font-bold grid grid-cols-2">
                Tanggal :<div className="">Lokasi :</div>
              </div>
              <div className="grid grid-cols-2">
                {event.start_event?.date}
                <div className="">{event.wisata?.lokasi?.alamat}</div>
              </div>
              <div className="pt-3 font-bold grid grid-cols-2">
                Waktu :<div className="">Kontak :</div>
              </div>
              <div className="grid grid-cols-2">
                {event.start_event?.time} - {event.end_event?.time}
                <div className="">{event.organizer?.kontak}</div>
              </div>
              <div className="pt-3 font-bold grid grid-cols-2">
                Organizer :<div className="">Harga Tiket :</div>
              </div>
              <div className="grid grid-cols-2">
                {event.organizer?.nama}
                <div className="">Rp. {event.harga}</div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="m-4 text-white h-[3rem] w-full font-semibold bg-green-700 hover:bg-green-800 rounded-lg">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </PortalTemplate>
  );
};

export default EventDetail;
