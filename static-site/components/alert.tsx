import React, { useState, useEffect } from "react";

import Container from "./container";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  const provider = "github";
  const redirect = "/"; //window.location.pathname;
  const [userInfo, setUserInfo] = useState<{
    userDetails: string | undefined;
  }>();

  useEffect(() => {
    (async () => {
      setUserInfo(await getUserInfo());
    })();
  }, []);

  async function getUserInfo() {
    try {
      const response = await fetch("/.auth/me");
      const payload = await response.json();
      const { clientPrincipal } = payload;
      return clientPrincipal;
    } catch (error) {
      console.error("No profile could be found");
      return undefined;
    }
  }

  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview && (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          )}
        </div>
        <div className="py-2 text-center">
          {userInfo ? (
            <a href={`/.auth/logout?post_logout_redirect_uri=${redirect}`}>
              Logout ${userInfo.userDetails}
            </a>
          ) : (
            <a
              key={provider}
              href={`/.auth/login/${provider}?post_login_redirect_uri=${redirect}`}
            >
              Login
            </a>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
