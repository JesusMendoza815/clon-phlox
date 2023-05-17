import React, { useEffect, useState } from "react";

export const useLoginFetch = (url, user, password) => {
  const [tokenUser, setToken] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const loginUser = async (url, user, password) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            username: user,
            password: password,
          }),
        });
        if (!response.ok) {
          throw {
            error: true,
            status: response.status,
            statusText: !response.statusText
              ? "Ocurrio un error"
              : response.statusText,
          };
        }
        let data = await response.json();
        setToken(data);
        setError({ error: false });
      } catch (error) {
        setError({ error: false });
      }
    };

    loginUser(url, user, password);
  }, [url]);
  return { tokenUser, error };
};
