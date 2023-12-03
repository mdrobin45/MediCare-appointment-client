import Chart from "react-apexcharts";

const options = {
   chart: {
      type: "bar",
      stacked: true,
      toolbar: {
         show: true,
      },
   },
   plotOptions: {
      bar: {
         horizontal: false,
         borderRadius: 5,
         dataLabels: {
            total: {
               enabled: true,
            },
         },
      },
   },
   dataLabels: {
      enable: true,
   },
   stroke: {
      show: true,
      width: 1,
      colors: ["transparent"],
   },
   xaxis: {
      categories: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
      ],
   },
   yaxis: {
      title: {
         text: "Patient by Gender",
      },
   },
   fill: {
      opacity: 1,
   },
   tooltip: {
      y: {
         formatter: (val) => {
            return val;
         },
      },
   },
};
const series = [
   {
      name: "Male",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 55, 78, 90],
   },
   {
      name: "Female",
      data: [76, 85, 101, 98, 87, 105, 41, 36, 26, 91, 114, 94],
   },
   {
      name: "Children",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 98, 87, 105],
   },
];
const PatientChart = () => {
   return (
      <div>
         <Chart options={options} series={series} type="bar" height={350} />
      </div>
   );
};

export default PatientChart;
