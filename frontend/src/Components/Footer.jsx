import * as React from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Footer(props) {
  return (
    <div className="bg-bg-color flex flex-col items-center py-12">
     <div className="flex justify-around w-full text-white">
        <div className="flex flex-col gap-16 w-1/4 items-center">
            <h1 className="text-2xl font-bold">Product</h1>
            <div className="flex flex-col gap-6 text-lg">
                <p>HR Software</p>
                <p>HR App</p>
                <p>HR System</p>
                <p>HR Self Service</p>
            </div>
        </div>
        <div className="flex flex-col gap-16 w-1/4 items-center">
            <h1 className="text-2xl font-bold mr-12">Utility</h1>
            <div className="flex flex-col gap-6 text-lg">
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
                <p>Security</p>
                <p>FAQ</p>
            </div>
        </div>
        <div className="flex flex-col gap-16 w-1/4 items-center">
            <h1 className="text-2xl font-bold">Company</h1>
            <div className="flex flex-col gap-6 text-lg">
                <p>FAQ</p>
                <p>Login</p>

            </div>
        </div>
        <div className="flex flex-col gap-16 w-1/4 items-center">
            <h1 className="text-2xl font-bold">Contact </h1>
            <div className="flex flex-col gap-6 text-lg">
                <p>56-A Gulberg</p>
                <p>Street no 11</p>
                <p>Lahore, Pakistan</p>
                <div className="flex gap-2 p-2 rounded-xl bg-white text-black cursor-pointer active:bg-bg-color active:text-white">
                    <EmailOutlinedIcon></EmailOutlinedIcon><p>Contact Us</p>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default Footer;
