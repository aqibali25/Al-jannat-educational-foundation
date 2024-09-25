import React, { useEffect } from "react";
import "../Styles/StatsSection.css";
import { initStatsAnimation } from "../../statsAnimation";
import chartIcon1 from "../../assets/chartIcon1.png";
import chartIcon2 from "../../assets/chartIcon2.png";
import chartIcon3 from "../../assets/chartIcon3.png";
import chartIcon4 from "../../assets/chartIcon4.png";

const StatsSection = () => {
  const stats = [
    {
      icon: chartIcon1,
      label: "Teachers",
      value: 32,
    },
    {
      icon: chartIcon2,
      label: "Students",
      value: 2158,
    },
    {
      icon: chartIcon3,
      label: "Courses",
      value: 46,
    },
    {
      icon: chartIcon4,
      label: "Years Exp.",
      value: 10,
    },
  ];

  useEffect(() => {
    initStatsAnimation();
  }, []);

  return (
    <section className="stats-section">
      <div className="overlay">
        <div className="container">
          <div className="row justify-space-around">
            {stats.map((stat, index) => (
              <div className="col-6 col-md-3 text-center mb-4" key={index}>
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="stat-icon mb-2"
                />
                <h2 className="stat-value" data-value={stat.value}>
                  0
                </h2>{" "}
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
