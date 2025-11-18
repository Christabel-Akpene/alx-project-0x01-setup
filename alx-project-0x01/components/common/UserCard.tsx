import React from "react";
import { UserProps } from "@/interfaces"; 



const UserCard: React.FC<UserProps> = ({ name, username, email, phone, website, address, company, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
          {id}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Website:</span>{" "}
          <a href={`https://${website}`} target="_blank" className="text-blue-500 hover:underline">
            {website}
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
        <p className="text-gray-700">
          {address.suite}, {address.street}, {address.city}, {address.zipcode}
        </p>
        <p className="text-gray-500 text-sm">
          Geo: {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-1">Company</h3>
        <p className="text-gray-700">
          <span className="font-semibold">Name:</span> {company.name}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">CatchPhrase:</span> {company.catchPhrase}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">BS:</span> {company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
