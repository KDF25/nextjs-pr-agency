"use client";

import { useTranslation } from "@/app/i18n/client";
import { sendMail } from "@/services/getData";
import { IMailData, ILangPageProps } from "@/types/user";
import { SubmitHandler, useForm } from "react-hook-form";

const EighthHome: React.FC<ILangPageProps> = ({ lng }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IMailData>({
    mode: "onChange",
  });
  const { t } = useTranslation(lng);

  const onSubmit: SubmitHandler<IMailData> = (data: IMailData) => {
    sendMail(data);
    alert(t("HomePage.EighthHome.alert"));
    reset();
  };

  return (
    <div
      style={{
        marginBottom: "5%",
      }}
    >
      <div
        style={{
          marginBottom: "5%",
        }}
      >
        <div className="email home_email">
          <h3 className="home_title">
            {t("HomePage.EighthHome.contactTitle")}
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <label className="form-title">
                {t("HomePage.EighthHome.firstName")}
                <input
                  placeholder="Gomer"
                  className="form-input home_input"
                  {...register("firstName", {
                    required: true,
                    minLength: 1,
                  })}
                />
              </label>
              <label className="form-title">
                {t("HomePage.EighthHome.lastName")}
                <input
                  placeholder="Simpson"
                  className="form-input home_input"
                  {...register("lastName", {
                    required: true,
                    minLength: 1,
                  })}
                />
              </label>
              <label className="form-title">
                {t("HomePage.EighthHome.email")}
                <input
                  placeholder="name@domain.com"
                  className="form-input home_input"
                  {...register("email", {
                    required: true,
                    minLength: 1,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </label>
              <label className="form-title">
                {t("HomePage.EighthHome.phoneNumber")}
                <input
                  defaultValue="+998"
                  type="tel"
                  maxLength={13}
                  className="form-input number-input home_input"
                  {...register("phoneNumber", {
                    required: true,
                    minLength: 1,
                    maxLength: 13,
                    pattern: /^\+998\d{9}$/,
                  })}
                />
              </label>
              <div style={{ marginTop: "20px" }}>
                <label className="form-title">
                  {t("HomePage.EighthHome.message")}
                  <textarea
                    {...register("message", {
                      required: true,
                      minLength: 1,
                      maxLength: 2000,
                    })}
                    className="form-input home_input"
                    style={{ width: "100%", borderRadius: "5px" }}
                    rows={5}
                  ></textarea>
                </label>
              </div>
              <input
                type="submit"
                disabled={!isValid}
                className="send-message-btn"
                style={{
                  background: `${!isValid && "rgba(70,59,144, 0.4)"}`,
                  margin: "3% 0px",
                }}
                value={t("HomePage.EighthHome.submitButton")}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EighthHome;
