"use client";

import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { AdminLayoutProps, AuthContext } from "./context";
import { useRouter } from "next/navigation";

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedIsAuth = localStorage.getItem("isAuth");
    setIsAuth(!!storedIsAuth); // !! преобразует значение в boolean
  }, []);

  const handleIsAuth = (bool: boolean) => {
    setIsAuth(bool);
  };

  const closeAdmin = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <>
      <html>
        <body className="wrapper">
          <AuthContext.Provider value={{ isAuth, handleIsAuth }}>
          <main className="my-container">
            <div>
              {isAuth && (
                <div
                  style={{
                    margin: "10px 0px 20px 0px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Link
                      href="/adminvenkon/adminhome"
                      className="my-link"
                      style={{ marginRight: "10px", margin: "0 5px 0 0" }}
                    >
                      Home page
                    </Link>
                    <Link
                      href="/adminvenkon/adminwhy"
                      className="my-link"
                      style={{ margin: "0px" }}
                    >
                      Why us page
                    </Link>
                  </div>
                  <button onClick={() => closeAdmin()}>Выход</button>
                </div>
              )}
            </div>
            {children}
          </main>
          </AuthContext.Provider>
        </body>
      </html>
    </>
  );
};

export default AdminLayout;
