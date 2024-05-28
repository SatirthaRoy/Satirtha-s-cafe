import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const CustomPieChart = ({menu}) => {
  const dessertItems = menu.filter(item => item.category === "dessert")
  const soupItems = menu.filter(item => item.category === "soup")
  const pizzaItems = menu.filter(item => item.category === "pizza")
  const saladItems = menu.filter(item => item.category === "salad");
  const data = [
    { name: dessertItems[0]?.category, value: dessertItems.length },
    { name: soupItems[0]?.category, value: soupItems.length },
    { name: pizzaItems[0]?.category, value: pizzaItems.length },
    { name: saladItems[0]?.category, value: saladItems.length },
  ];
  return (
        <ResponsiveContainer width='100%' height={400}>
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={140}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
  )
}

export default CustomPieChart