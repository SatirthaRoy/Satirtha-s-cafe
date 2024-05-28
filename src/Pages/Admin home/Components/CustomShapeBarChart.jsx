import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomShapeBarChart = ({menu}) => {

  // data of different categories
  const dessertItems = menu.filter(item => item.category === "dessert")
  const soupItems = menu.filter(item => item.category === "soup")
  const pizzaItems = menu.filter(item => item.category === "pizza")
  const saladItems = menu.filter(item => item.category === "salad");
  const data =[
    {
      name: dessertItems[0]?.category,
      length: dessertItems.length
    },
    {
      name: soupItems[0]?.category,
      length: soupItems.length
    },
    {
      name: pizzaItems[0]?.category,
      length: pizzaItems.length
    },
    {
      name: saladItems[0]?.category,
      length: saladItems.length
    }
  ];

  return (
      <ResponsiveContainer width='100%' height={400}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="length"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  );
};

export default CustomShapeBarChart;
