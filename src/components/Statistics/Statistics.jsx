import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    fetch("assignmentMarks.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
  ];

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <section>
      <div
        className="bg-cover bg-center h-3/4 p-16 relative"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3637943/pexels-photo-3637943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-purple-950 opacity-20"></div>
        <h1 className="text-purple-900 text-center text-5xl font-bold">
          Figures
        </h1>
      </div>
      <section className=" bg-purple-100 p-10 lg:flex lg:justify-center lg:items-center">
        <div>
          <h1 className="my-8 text-4xl text-purple-900 font-semibold text-center">
            A chart of my Assignment Marks{" "}
          </h1>
          <hr className="border border-purple-800 mb-8" />

          <BarChart
            width={1000}
            height={500}
            data={marks}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="assignNo" />
            <YAxis />
            <Bar
              dataKey="assignMark"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {marks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
      </section>
    </section>
  );
};

export default Statistics;
