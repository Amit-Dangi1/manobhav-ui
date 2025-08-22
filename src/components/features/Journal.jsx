import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify/unstyled';
import { API } from '../../../apis/Api';
 
const Journal = () => {
  let [entry, setentry] = useState("");
  let [data, setdata] = useState([]);

  
  const handelSubmit = async () => {
    try {
      if (!entry.trim()) {
        toast.error("Entry cannot be empty");
        return;
      }

      let res = await axios.post(API.journal,  {entry} ,{
      withCredentials:true
    });
      toast.success("Entry saved successfully!");

      setentry(""); 
      entrydata(); 

    } catch (error) {
      console.log(error);
      toast.error("Something went wrongb Add");
    }
  };

   const entrydata = async () => {
    try {
      let res = await axios.get(API.getjournal,{
      withCredentials:true
    });
    console.log("Journal Data = ",res.data.data);
    
      setdata(res.data.data);  
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong Fetch");
    }
  };

  useEffect(() => {
    entrydata();
  }, []);

 
  const deletentry = async (index) => {
    try {
      await axios.delete(`${API.deletejournal}${index}`,{
      withCredentials:true
    });
      toast.success("Entry deleted");
      entrydata();  
    } catch (error) {
      console.log(error);
      toast.error("Something went Wrong delete");
    }
  };

  return (
    <>
    <ToastContainer/>
       <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="display-5 mb-4 text-primary fw-bold">
          Your Personal Journal
        </div>

        <div className="card p-4 bg-dark text-light shadow-lg rounded w-50">
          <h4 className="mb-3">Write Your Thoughts</h4>
          <textarea
            className="form-control mb-3"
            rows="5"
            placeholder="What's on your mind today?"
            value={entry}
            onChange={(e) => setentry(e.target.value)}
          ></textarea>
          <button
            type="button"
            onClick={handelSubmit}
            className="btn btn-info fw-bold w-25"
          >
            Save Entry
          </button>
        </div>
      </div>

       <div className="container ">
        <h4>Your Journal Entries</h4>
        {data.length === 0 ? (
          <p className="text-muted">
            No entries yet. Start writing your first entry.
          </p>
        ) : (
          <ul className="list-group">
            {data?.map((item, index) => (
              <li
                key={index}
                className="  mt-3 p-4 rounded-start-pill list-group-item d-flex justify-content-between align-items-center border shadow w-50"
              >
                <span className='lead'>{item}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletentry(index)}
                >
                 <i className="bi bi-trash-fill">
                  +
                 </i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Journal;
