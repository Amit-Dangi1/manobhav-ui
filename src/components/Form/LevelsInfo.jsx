import React from "react";
import { useNavigate } from "react-router-dom";

export default function LevelsInfo() {
    let navigate = useNavigate();
  const levels = [
    { level: 1, title: "🌸 Fully Peaceful & Positive", desc: "Mind is calm, clear, and happy. You feel balanced and in full control of your emotions." },
    { level: 2, title: "😊 Very Good State", desc: "Mostly positive, small worries don’t disturb you much." },
    { level: 3, title: "🙂 Good & Relaxed", desc: "You feel good, motivated, and can handle challenges smoothly." },
    { level: 4, title: "😌 Balanced", desc: "Some stress but overall you can manage it without losing calmness." },
    { level: 5, title: "😐 Neutral", desc: "Neither too good nor too bad. Stable but not very happy." },
    { level: 6, title: "😕 Slightly Disturbed", desc: "Mild stress, distraction, or low mood but still manageable." },
    { level: 7, title: "😟 Stressed", desc: "Stress is affecting thoughts and focus. Hard to stay calm." },
    { level: 8, title: "😠 Angry/Anxious", desc: "High frustration, irritation, or anxiety affecting daily life." },
    { level: 9, title: "😭 Very Low State", desc: "Emotionally down, feeling hopeless, mentally tired." },
    { level: 10, title: "💔 Worst State", desc: "Extreme stress, anger, or sadness. Very unhealthy state of mind." },
  ];

  return (

    <div className="container mx-auto p-6 mt-5 pt-5">
    <button className="btn manobahv border bg-light fw-semibold " onClick={()=>navigate(-1)} type="button">Back</button>
      <h2 className="text-2xl font-bold text-center mb-6">
        Mano<span className="manobahv">bhav</span> Levels (1 to 10)
      </h2>
      <p className="text-center text-gray-600 mb-10">
        The higher your level, the better your emotional and mental state. 
        Level <b>1</b> means full positivity & peace, while Level <b>10</b> means the worst mental state.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {levels.map((l) => (
          <div
            key={l.level}
            className="border rounded-2xl shadow-md p-5 hover:shadow-lg transition bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">
              Level {l.level}: {l.title}
            </h3>
            <p className="text-gray-700">{l.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
