import React from "react";
import Image from '../assets/comifuro.jpg'

const CardEvent = ({title, dates, description}) => {
    const eventDate = new Date(dates);

    return(
        <div className="w-96 h-auto bg-[#F5EFEB] flex flex-col rounded-md shadow">
            <figure className="w-full h-32 overflow-hidden flex items-center rounded-t-md">
                <img src={Image} alt="event"/>
            </figure>
            <div className="flex flex-col gap-2 p-3">
                <h2 className="font-bold text-xl">{title}</h2>
                <p className="font-medium opacity-40">
                    {eventDate.toLocaleDateString('id-ID', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </p>
                <p className="line-clamp-2">{description}</p>
            </div>
        </div>
    );
}

export default CardEvent;