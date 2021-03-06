import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar, Usernav } from "../component/Usernav";

export const Profile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <>
      <Usernav />
      <div className="container">
        <br></br>
        <br></br>
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <h3 className="user-name">Your Profile:</h3>
                    <div className="user-avatar">
                      <img
                        src="https://melmagazine.com/wp-content/uploads/2021/01/66f-1.jpg"
                        alt="Maxwell Admin"
                      />
                    </div>
                  </div>
                  <div className="about">
                    <h4>Your Journey:</h4>
                    <h6>Building Muscle</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="card h-100">
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="mb-2 text-primary">Personal Details:</h4>
                  </div>
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="container">
                      <div class="row">
                        <div className="col">
                          <label for="fullName">Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="Tom Clancy
                            "
                          />
                        </div>
                        <div className="col">
                          <label for="fullName">Birthday</label>
                          <input
                            type="date"
                            className="form-control"
                            id="fullName"
                            placeholder="Birthday"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div className="">
                        <div className="form-group">
                          <label for="fullName">Current Weight in Lbs</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="220"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div className="">
                        <div className="form-group">
                          <label for="fullName">Current Height in Inches</label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            placeholder="77"
                          />
                        </div>
                      </div>
                      <br></br>
                      <div className="row gutters">
                        <div className="">
                          <div className="text-right gx-5">
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-md btn-secondary"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              id="submit"
                              name="submit"
                              className="btn btn-md btn-outline-info"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <h5>About Me:</h5>
                      <textarea
                        id="w3review"
                        name="w3review"
                        rows="7"
                        cols="70"
                      >
                        Just an absolute physical specimen trying to put on some muscle. I find that this website helps me reach my goals and keeps me on track!
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = {
  match: PropTypes.object,
};
