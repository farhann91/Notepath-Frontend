import React from "react";
import "./Content.css";
import Tasks from "./Tasks/Tasks";
import Todos from "./Todos/Todos";
import Charts from "./Charts/Charts";
import Edit from "./Todos/Edit/Edit";
import Settings from "./Settings/Settings";
import { Route, Switch } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <Switch>
        <Route path="/dashboard" exact component={Todos} />
        <Route path="/dashboard/todos" exact component={Todos} />
        <Route path="/dashboard/tasks" exact component={Tasks} />
        <Route path="/dashboard/edit/:id" exact component={Edit} />
        <Route path="/dashboard/charts" exact component={Charts} />
        <Route path="/dashboard/settings" exact component={Settings} />
      </Switch>
    </div>
  );
};

export default Content;
