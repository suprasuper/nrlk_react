import React from "react";
import { useMsal } from "@azure/msal-react";

export default function MicrosoftButton() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance
      .loginPopup({
        scopes: ["User.Read"],
      })
      .then((response) => {
        console.log("Connecté avec Microsoft :", response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <button
      onClick={handleLogin}
      className="btn btn-primary btn-block mt-3"
      style={{ maxWidth: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
        alt="Microsoft logo"
        style={{ width: "20px", marginRight: "8px" }}
      />
      Se connecter avec Microsoft
    </button>
  );
}
