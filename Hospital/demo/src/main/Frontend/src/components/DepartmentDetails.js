import "./DepartmentDetails.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import immg from "./image/un.png";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

function DepartmentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/doctors/${id}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row justify-content-around">
          {data !== undefined
            ? data.map((e) => {
                return (
                  <div className=" my-5 py-4 Sh-card" style={{ width: "18rem" }}>
                  {/* <div className=" my-5 py-4 Sh-card"> */}
                    <div className="card-body text-center grid-five">
                      <img src={immg} alt="" width="250px" />
                      <h4>
                        Dr. {e.firstName} {e.lasttName}
                      </h4>
                      <p className="text-dep">Phone Number: {e.phoneNumber}</p>
                      <p className="text-dep">Gender: {e.gender}</p>
                      <button
                        type="button"
                        className="btn-b"
                        onClick={() => {
                          navigate(`/Doctor/${e.id}`);
                        }}
                      >
                        View Available Appointments
                        <span className="fas fa-chevron-right"></span>
                      </button>
                    </div>
                  </div>
                );
              })
            : "Wait"}
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default DepartmentDetails;
