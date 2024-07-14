"use client";

import { useState } from "react";
import { BsTelegram } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import EmailModal from "./emailModal";
import { InstagramIcon } from "../icons/instagramIcon";
import { ILangPageProps } from "@/types/user";

interface ContactsBlockProps extends ILangPageProps {
  handleContact: () => void;
}

const ContactsBlock = ({ handleContact, lng }: ContactsBlockProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="contacts-block">
      <div>
        <a
          className="call-us-btn"
          href="tel:+998907997979"
          style={{
            color: "#fff",
            textDecoration: "none",
            background: isHover ? "#5442cc" : "#463b90",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {lng === "ru"
            ? "Позвоните нам"
            : lng === "en"
            ? "Call us"
            : "Bizga qo'ngíroq qiling"}
          {lng === "ru" ? (
            <BiPhoneCall size={20} style={{ marginLeft: "5px" }} />
          ) : (
            lng === "en" && (
              <BiPhoneCall size={20} style={{ marginLeft: "5px" }} />
            )
          )}
        </a>
      </div>
      <EmailModal lng={lng} handleContact={handleContact} />
      <div className="contacts-media">
        <a href="https://t.me/VenkonPRSales" target="_blank" rel="noreferrer">
          <BsTelegram
            style={{
              fontSize: "32px",
              marginRight: "25px",
              color: "#0088cc",
              cursor: "pointer",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/venkon_cummunications/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default ContactsBlock;
