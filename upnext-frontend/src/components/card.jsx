const CardEvent = ({ title, dates, description, bannerUrl }) => {
  const eventDate = new Date(dates);
  const fullBannerUrl = bannerUrl?.startsWith("http")
    ? bannerUrl
    : `https://upnextapi.vercel.app${bannerUrl}`;

  return (
    <div className="w-full h-auto bg-[#F5EFEB] flex flex-col rounded-md shadow">
      <figure className="w-full h-32 overflow-hidden flex items-center rounded-t-md">
        <img
          src={fullBannerUrl}
          alt="Banner Event"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex flex-col gap-2 p-3">
        <h2 className="font-bold text-lg md:text-xl">{title}</h2>
        <p className="font-medium md:text-base text-sm opacity-40">
          {eventDate.toLocaleDateString("id-ID", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default CardEvent;
