"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [hotelData, setHotelData] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("hotelData");
    if (data) {
      setHotelData(JSON.parse(data));
    } else {
      router.push("/auth"); 
    }
  }, [router]);

  if (!hotelData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex text-black items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">{hotelData.HotelName}</h2>
        <div className="flex items-center justify-center">
          <img
            src={`data:image/png;base64,${hotelData.HotelLogo}`}
            alt="Hotel Logo"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <p className="text-center">{hotelData.Address}</p>
        <p className="text-center">Rating: {hotelData.Ratings}</p>
        <p className="text-center">Contact: {hotelData.Contacts.join(", ")}</p>
        <p className="text-center">Speciality: {hotelData.Speciality.join(", ")}</p>
      </div>
    </div>
  );
};

export default Home;
