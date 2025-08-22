import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { API } from '../../../apis/Api';

const Excersice = () => {
  let [excersice, setexcercise] = useState([]);

  let fetch = async () => {
    try {
      let res = await axios.get(API.excercise);
      console.log("res = ", res);
      setexcercise(res.data.data);
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log("State = ", excersice);

  return (
    <>
      <ToastContainer />
      <h3 className="mt-5 pt-5 display-4 text-center">Exercise & Wellness Hub</h3>
      <div className="container mt-5">
        <div className="row">
          {excersice?.map((val, index) => {
            return (
              <div className="col-lg-4 col-md-6 mt-5" key={index}>
                <div
                  className="card h-100 shadow-sm"
                  style={{ borderRadius: "15px", overflow: "hidden" }}
                >
                  {/* Image */}
                  <img
                    className="card-img-top img-fluid"
                    src={val.imgurl}
                    alt={val.name}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                      backgroundColor: "#f8f9fa",
                    }}
                  />

                  {/* Body */}
                  <div className="card-body d-flex flex-column text-center">
                    <h4 className="card-title">{val.name}</h4>
                    <p className="card-text">{val.description}</p>
                    <p className="card-text text-muted fst-italic">“{val.quote}”</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Excersice;
