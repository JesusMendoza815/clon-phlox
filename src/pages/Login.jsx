import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.scss";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import loading from "../assets/Spinner-1s-200px.svg";
function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoding] = useState(false);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const loginToken = async (url, user, password) => {
    try {
      setLoding(true);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      signIn(token);

      navigate("/home");
      setLoding(false);
      setError({ error: false });
    } catch (error) {
      setError({ error: false });
    }
  };

  return (
    <main>
      {isLoading && (
        <div>
          <h1>Loading...</h1> <img src={loading} alt="" />{" "}
        </div>
      )}
      {!isLoading && error && <h2>Hubo un erro al mostrar los personajes</h2>}
      {!isLoading && !error && (
        <>
          <Navbar />
          <h1 className="flex justify-center titleLogin">
            Welcome please Login
          </h1>
          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                class="mx-auto h-30 w-auto"
                src="https://media.tenor.com/Tg8iZVA-pecAAAAM/nickimperiod.gif"
                alt="Your Company"
              />
              <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={user}
                      autocomplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={({ target }) => {
                        setUser(target.value);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      id="password"
                      value={password}
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={({ target }) => {
                        setPassword(target.value);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => {
                      loginToken(
                        "https://fakestoreapi.com/auth/login",
                        user,
                        password
                      );
                    }}
                    type="submit"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <a
                  href="#"
                  class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Join us
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
}

export default Login;