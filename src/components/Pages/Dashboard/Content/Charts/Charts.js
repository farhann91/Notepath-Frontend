import React, { Component } from "react";
import "./Charts.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

class Charts extends Component {
  state = {
    chartData: {
      labels: ["Success rate", "Failure rate"],
      datasets: [
        {
          label: "Tasks",
          data: [276, 132],
          backgroundColor: ["#3382DE", "#F88616"],
          borderWidth: 1,
        },
      ],
    },
  };

  // Variables to hold the number of success and failure iterations
  success = [];
  failure = [];
  successCollector = [];
  failureCollector = [];

  // Fetching the tasks from the database
  fetchProducts = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(
      "https://emzzin-notepath.herokuapp.com/tasks",
      {
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      }
    );
    const fetchedUsers = await response.json();
    fetchedUsers.tasks.map((task) => {
      if (task.status === "success") {
        this.successCollector.push(task.status);
      }
      if (task.status === "fail") {
        this.failureCollector.push(task.status);
      }
    });

    this.setState({
      chartData: {
        labels: ["Accomplished tasks", "Unaccomplished tasks"],
        datasets: [
          {
            label: "Tasks",
            data: [this.successCollector.length, this.failureCollector.length],
            backgroundColor: ["#3382DE", "#F88616"],
            borderWidth: 1,
          },
        ],
      },
    });
  };

  // Call the task fetcher on component did mount
  componentDidMount() {
    this.fetchProducts();
  }

  render() {
    return (
      <div className="chartWrapper">
        <div
          className="headertext container"
          data-aos="fade-down"
          style={{ color: "#585050", fontWeight: "300" }}
        >
          <h3 style={{ fontWeight: "300", textTransform: "capitalize" }}>
            Performance chart
          </h3>
          <p>
            The rates are automatically generated from the pattern formed from
            your task completion rate. These should give a client a clear idea
            how his plan and execution proportion lies and act accordingly.
          </p>
        </div>
        <Bar data={this.state.chartData} options={{}} />
      </div>
    );
  }
}
// <Pie data={this.state.chartData} options={{}} />;

export default Charts;
