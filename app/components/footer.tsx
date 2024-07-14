import { ILangPageProps } from "@/types/user";
import React from "react";

const TheFooter: React.FC<ILangPageProps> = ({ lng }) => {
  return (
    <footer
      style={{
        color: "#303030",
        padding: "2% 0",
      }}
    >
      <div
        className="my-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "start",
          gap: "30px",
        }}
      >
        <div>
          {lng === "ru"
            ? "© 2023 Venkon Communications. Все права защищены."
            : lng === "en"
            ? "© 2023 Venkon Communications. All rights reserved."
            : "© 2023 Venkon Communications. Barcha huquqlar himoyalangan."}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            textAlign: "right",
          }}
        >
          <div>PR@Venkon.uz</div>
          <a
            href="tel:+998907997979"
            style={{
              color: "#303030",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            +998 90 799-79-79
          </a>
          <div>
            {lng === "ru"
              ? "город Ташкент, Юнусабадский район, Боғишамол-19"
              : lng === "en"
              ? "Tashkent city, Yunusobod district, st.  Боғишамол-19"
              : "Тошкент шахри, Юнусобод тумани, Боғишамол-19"}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { TheFooter };
