import React from "react";
import "./Features.css";

import focus from "../../../assets/images/digital.jpg";
import hourGlass from "../../../assets/images/hour-glass.jpg";

const Features = () => {
  return (
    <div>
      <div
        className="headertext container"
        data-aos="fade-down"
        style={{ color: "#585050", fontWeight: "300" }}
      >
        <h3 style={{ fontWeight: "300", textTransform: "capitalize" }}>
          Notepath key features
        </h3>
        <p>
          With the emergence cheap internet access accross the African
          continent, a new era has dawned on the eastern Africa region. As all
          business rush online we ensure that they dont forget the key details
          of there path. This is dear to us at Notepath thats why our platiform
          provides user friendly task management online system. A few companies
          have been trying to walk our shoes but its clearly now who the leaders
          are.
        </p>
      </div>

      <div className="fatures">
        <div className="containered1">
          <div className="container feature-item " data-aos="fade-up">
            <div className="image" data-aos="fade-right">
              <img src={focus} alt="focus" height="100%" width="100%" />
            </div>
            <div className="text" data-aos="fade-left">
              <h5>Todo App (Task Management)</h5>
              <p>
                God is in the details, with our easy to use task management
                feature, we provide our clients with pin point level of accuracy
                as all the tasks are noted down day by day.
              </p>
            </div>
          </div>
        </div>
        <div className="containered2">
          <div className="container feature-item2" data-aos="fade-up">
            <div className="image" data-aos="fade-right">
              <img src={hourGlass} alt="focus" height="100%" width="100%" />
            </div>
            <div className="text" data-aos="fade-left">
              <h5>Pomodoro Timer (Time Management)</h5>
              <p>
                Day by day we aproach our grave. This means that no task
                perfomed everyday nomatter how small should be useless. With our
                time managaement pomodoro feature, one knows what tasks are to
                be perfomed and when to perfom them. This is still done in a way
                that does not lead to burn out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
