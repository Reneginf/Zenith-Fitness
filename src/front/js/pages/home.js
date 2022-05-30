import React, { useContext } from "react";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar />
      <div class="card bg-dark text-white h-100 w-100">
        <img
          src="https://phantom-marca.unidadeditorial.es/746e69f29df0fa7da1f9df1cffc2af10/crop/0x20/1499x861/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/12/16419960151339.jpg"
          class="card-img"
          alt="..."
        ></img>
        <div class="card-img-overlay ">
          {store.user ? (
            <div className="ml-auto">
              <Link to="/demo">
                <button className="btn btn-primary">Dashboard</button>
              </Link>
            </div>
          ) : (
            <div className="position-absolute top-50 start-50 translate-middle card w-25 bg-transparent">
              <Link to="/login">
                <button className="btn btn-primary mx-2 btn-info w-100 h-50">
                  Login
                </button>
              </Link>
              <br></br>
              <Link to="/register">
                <button className="btn btn-primary mx-2 btn-info w-100 h-50">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
