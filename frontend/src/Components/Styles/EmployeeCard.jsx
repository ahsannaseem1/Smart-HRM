import React from "react";
import { Email, Phone } from "@mui/icons-material";
import ApartmentIcon from '@mui/icons-material/Apartment';

const EmployeeCard = ({ Id, Name, EmailText, Contact, Department, Image }) => {
    return (
        <div className="flex flex-col shadow-md rounded-md overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-400 to-indigo-500 text-white">
                <p className="text-lg text-center font-bold">{Id}</p>
            </div>
            <div className="flex flex-col p-4">
                {/* <div className="rounded-full overflow-hidden w-20 h-20 self-center mb-2">
                    <img
                        src={`data:image/png;base64,${Image}`}
                        alt={`${Name}'s Image`}
                        className="w-full h-full object-cover"
                    />
                </div> */}
                <h2 className="text-lg font-bold mb-2 self-center">{Name}</h2>
                <p className="text-gray-600 mb-2">
                    <ApartmentIcon className="mr-2 p-1" />
                    {Department}
                </p>
                <div className="flex items-center mb-2">
                    <Email className="mr-2 p-1" />
                    <p className="text-gray-800">{EmailText}</p>
                </div>
                <div className="flex items-center mb-2">
                    <Phone className="mr-2 p-1" />
                    <p className="text-gray-600">{Contact}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Open
                </button>
            </div>
        </div>
    );
};

export default EmployeeCard;
