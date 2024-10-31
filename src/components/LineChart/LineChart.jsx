import {LineChart as LChart, Line,XAxis,YAxis} from 'recharts';

const LineChart = () => {

    const students = [
        { id: 1, name: "Alice", math: 78, english: 82, science: 88 },
        { id: 2, name: "Bob", math: 85, english: 79, science: 92 },
        { id: 3, name: "Charlie", math: 92, english: 90, science: 85 },
        { id: 4, name: "David", math: 66, english: 74, science: 70 },
        { id: 5, name: "Eva", math: 74, english: 81, science: 78 },
        { id: 6, name: "Frank", math: 88, english: 86, science: 80 },
        { id: 7, name: "Grace", math: 90, english: 87, science: 95 },
        { id: 8, name: "Henry", math: 81, english: 75, science: 72 },
        { id: 9, name: "Isabella", math: 95, english: 93, science: 91 },
        { id: 10, name: "Jack", math: 70, english: 65, science: 68 },
      ];

    return (
        <div>
            <LChart width={600} height={400} data={students}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math'} stroke='red'></Line>
                <Line dataKey={'english'} stroke='yellow'></Line>
                <Line dataKey={'science'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;