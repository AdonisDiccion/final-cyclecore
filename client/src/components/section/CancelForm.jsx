import React, { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { MdStore } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import { toast } from "react-toastify";

import axios from "axios";

import paper from "../../assets/paper.png";

// styles
const containerStyles = "mt-6 flex flex-row font-bebas tracking-widest";
const iconStyles = "h-8 w-8 text-slate-200 mr-2 ";
const h2Styles = "text-slate-400 text-xs";
const pStyles = "text-white text-xs font-bebas";

export const CancelForm = () => {
const [showContactInfo, setShowContactInfo] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  const handleSwitch = () => {
    setShowContactInfo(!showContactInfo);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify(formData);

      await axios.post("/send-email", body, config);

      toast.success("Email sent successfully", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: "300px",
          height: "20px",
          fontSize: "17px",
          fontFamily: "Bebas Neue",
        },
      });
    } catch (err) {
      console.log(err);
      toast.error("Error sending email", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: "300px",
          height: "20px",
          fontSize: "17px",
          fontFamily: "Bebas Neue",
        },
      });
    }
  };
  return (
    <div className="bg-gray-200">
      
            {/* contact us from */}
            
          </div>
  )
}
