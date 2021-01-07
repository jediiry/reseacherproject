import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    const gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    const gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, "rgb(255, 171, 43, 1)");
    gradient.addColorStop(0, "rgb(255, 171, 43, 0.1)");

    gradient.addColorStop(1, "transparent");

    gradient2.addColorStop(0, "rgb(218, 4, 242, 1)");
    gradient2.addColorStop(0, "rgb(218, 4, 242, 0.25)");
    gradient2.addColorStop(1, "transparent");
    this.renderChart(
      {
        labels: ["Today", "P", "C", "A", "G", "j", "h", "P"],

        datasets: [
          {
            label: "paid",
            data: [64, 35, 16, 68, 67, 69, 29, 20.4],
            backgroundColor: gradient,
            borderColor: "#FFAB2B",
            borderWidth: 2,
          },
          {
            label: "unpaid",
            data: [25, 39, 13, 47, 68, 5, 89, 10],
            backgroundColor: "transparent",
            borderColor: "#DA04F2",
            borderWidth: 2,
          },
        ],
      },
      {
        // responsive: true,
        // maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem) {
              console.log(tooltipItem);
              return tooltipItem.yLabel;
            },
          },
          backgroundColor: "#fff",
          titleFontColor: "#000",
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: true,
            },
          ],
        },
      }
    );
  },
};
