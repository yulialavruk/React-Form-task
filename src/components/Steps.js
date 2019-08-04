import React from "react";
import classNames from "classnames";

export default class Steps extends React.Component {
  render() {
    const stepsName = [
      {
        id: 0,
        name: "Basic"
      },
      {
        id: 1,
        name: "Contacts"
      },
      {
        id: 2,
        name: "Avatar"
      },
      {
        id: 3,
        name: "Finish"
      }
    ];
    const { stepActive } = this.props;
    return stepsName.map(step => (
      <div
        className={classNames({
          step: true,
          "step-active": stepActive === step.id,
          "step-finish": stepActive > step.id
        })}
        key={step.id}
      >
        <div className="step-number">{step.id + 1}</div>
        <div className="step-title">{step.name}</div>
      </div>
    ));
  }
}
