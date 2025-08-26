import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify/unstyled";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { API } from "../../../apis/Api";

const ScoreForm = () => {
  let[scoredata,setscoredata] = useState();
    const [error, setError] = useState("");
  
  const questions = [
    "1. Little interest or pleasure in doing things?",
    "2. Feeling down, depressed, or hopeless?",
    "3. Trouble falling or staying asleep, or sleeping too much?",
    "4. Feeling tired or having little energy?",
    "5. Poor appetite or overeating?",
    "6. Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "7. Trouble concentrating on things, such as reading the newspaper or watching television?",
    "8. Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you have been moving around a lot more than usual?",
    "9. Thoughts that you would be better off dead or of hurting yourself in some way?",
  ];

  const options = [
    { text: "Not at all", value: 0 },
    { text: "Several days", value: 1 },
    { text: "More than half the days", value: 2 },
    { text: "Nearly every day", value: 3 },
  ];

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [total, setTotal] = useState(null);

  const handleSelect = (qIndex, value) => {
    
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();    
    if (answers.includes(null)) {
      setError("Please answer all questions before submitting.");
      return;
    }
    setError("")
    const score = answers.reduce((acc, cur) => acc + (cur ?? 0), 0);
    setTotal(score);
    try {
    
      
        let res = await axios.get(API.getscore+`${score}`);
console.log("Score data = ",res.data.score);
        setscoredata(res.data.score)

    } catch (error) {
      
    }
  };

  const getResult = (score) => {
    if (score <= 4) return "  Minimal depression";
    if (score <= 9) return "  Mild depression";
    if (score <= 14) return " Moderate depression";
    if (score <= 19) return " Moderately severe depression";
    return "Severe depression";
  };

  const handleSubmit2 = async()=>{
    try {

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  }

  return (
    <>
 
  
  <div className="container py-5 pt-5 mt-5">

    <div className="display-5 m-4 text-center">"Your Score is a Step Towards Support and Care"</div>
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body p-5">
          <h2 className="text-center mb-4 fw-bold text-primary">
            🧠 Depression Test
          </h2>
          <form onSubmit={handleSubmit}>
            {questions.map((q, qIndex) => (
              <div key={qIndex} className="mb-4">
                <p className="fw-semibold">{q}</p>
                <div className="d-flex flex-wrap gap-3 mt-2">
                  {options.map((opt, oIndex) => (
                    <div className="form-check" key={oIndex}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`q-${qIndex}`}
                        value={opt.value}
                        onChange={() => handleSelect(qIndex, opt.value)}
                        checked={answers[qIndex] === opt.value}
                        id={`q-${qIndex}-${oIndex}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`q-${qIndex}-${oIndex}`}
                      >
                        {opt.text}
                      </label>
                    </div>
                  ))}
                </div>
                <hr />
              </div>
            ))}

            {error && (
              <div className="alert alert-danger text-center rounded-3 shadow-sm">
                {error}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="btn text-white signbackcolor px-4 py-2 fw-semibold rounded-3 shadow-sm"
              >
                Submit
              </button>
            </div>
          </form>

          {total !== null && (
            <div className="alert alert-info mt-5 text-center rounded-3 shadow-sm">
              <h4 className="fw-bold">Your Score: {total}</h4>
              <p className="fs-5">{getResult(total)}</p>
              <p class="text-muted fst-italic mt-2">
  Scroll down to read the full explanation of your score ⬇️
</p>
            </div>
          )}
        </div>
      </div>
    </div>
   {scoredata?  <div className="container py-5 mt-5  pt-5">
    <div className="card shadow-lg rounded-4 mx-auto">
      <div className="card-body p-4">

         <h2 className="text-center mb-4 fw-bold">Your Depression Score</h2>

         <div className="d-flex justify-content-center mb-4">
          <span className="badge  fs-5 px-4 py-2 signbackcolor">{scoredata.total_score}</span>
        </div>

         <h4 className="text-success text-center">{scoredata.what_it_means}</h4>
        <p className="text-muted text-center">{scoredata.detailed_meaning_and_actions}</p>

         <blockquote className="blockquote border-start border-4 ps-3 my-4">
          <p className="mb-0 fst-italic">“{scoredata.inspiring_quote}.”</p>
        </blockquote>

         <div className="alert alert-info mt-4 rounded-3">
          <h5 className="alert-heading">Recommended Action</h5>
          <p className="mb-0">{scoredata.call_to_action}</p>
        </div>

      </div>
    </div>
  </div>:""}
    
  
    </>
  );
};

export default ScoreForm;
