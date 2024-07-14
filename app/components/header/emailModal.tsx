"use client";

import { sendMail } from "@/services/getData";
import { IMailData, ILangPageProps } from "@/types/user";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

interface EmailModalProps extends ILangPageProps {
  handleContact: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ handleContact, lng }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IMailData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<IMailData> = (data: IMailData) => {
    sendMail(data);
    alert(
      lng === "ru"
        ? "Сообщение успешно доставлено. Спасибо за обращение!"
        : lng === "en"
        ? "The message was successfully delivered. Thank you for your feedback!"
        : "Xabar muvaffaqiyatli yetkazib berildi. Fikr-mulohazangiz uchun rahmat!"
    );
    reset();
  };

  return (
    <div className="email">
      <button className="email-btn" onClick={handleModal}>
        Email <HiOutlineMail size={24} style={{ marginLeft: "5px" }} />
      </button>
      <Modal show={showModal} onHide={handleModal}>
        <Modal.Header closeButton style={{ border: "none" }}>
          <Modal.Title>
            {lng === "ru"
              ? "Связаться с нами"
              : lng === "en"
              ? "Contact Us"
              : "Biz bilan bo'glanish"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="form-title">
                {lng === "ru" ? "Имя" : lng === "en" ? "First Name" : "Ism"}
                <input
                  placeholder="Gomer"
                  className="form-input"
                  {...register("firstName", {
                    required: true,
                    minLength: 3,
                  })}
                />
              </label>
              <label className="form-title">
                {lng === "ru"
                  ? "Фамилия"
                  : lng === "en"
                  ? "Last Name"
                  : "Familiya"}
                <input
                  placeholder="Simpson"
                  className="form-input"
                  {...register("lastName", {
                    required: true,
                    minLength: 3,
                  })}
                />
              </label>
              <label className="form-title">
                Email
                <input
                  placeholder="name@domain.com"
                  className="form-input"
                  {...register("email", {
                    required: true,
                    minLength: 3,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </label>
              <label className="form-title">
                {lng === "ru"
                  ? "Телефон"
                  : lng === "en"
                  ? "Phone number"
                  : "Telefon raqami"}
                <input
                  defaultValue="+998"
                  type="tel"
                  maxLength={13}
                  className="form-input number-input"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 3,
                    maxLength: 13,
                    pattern: /^\+998\d{9}$/,
                  })}
                />
              </label>
              <div style={{ marginTop: "20px" }}>
                <label className="form-title">
                  {lng === "ru"
                    ? "Сообщение"
                    : lng === "en"
                    ? "Message"
                    : "Xabar"}
                  <textarea
                    {...register("message", {
                      required: true,
                      minLength: 5,
                      maxLength: 2000,
                    })}
                    className="form-input"
                  ></textarea>
                </label>
              </div>
              <input
                type="submit"
                disabled={!isValid}
                className="send-message-btn"
                style={{
                  fontWeight: "normal",
                  border: "none",
                  padding: "7px",
                  background: !isValid ? "rgba(70,59,144, 0.4)" : undefined,
                  margin: "3% 0px",
                }}
                onClick={handleModal}
                value={
                  lng === "ru"
                    ? "Отправить сообщение"
                    : lng === "en"
                    ? "Send message"
                    : "Xabar yuborish"
                }
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EmailModal;
