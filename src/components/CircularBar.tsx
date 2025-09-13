"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

type DonutChartData = {
  label: string;
  value: number;
  color: string;
};

type DonutChartConfig = {
  showTotal?: boolean;
  totalLabel?: string;
};

type DonutChartWidgetProps = {
  title: string;
  data: DonutChartData[];
  config?: DonutChartConfig;
};

export default function DonutChartWidget({ title, data, config }: DonutChartWidgetProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white shadow rounded-2xl p-4 w-full max-w-md">
      <h3 className="text-gray-800 font-semibold mb-4">{title}</h3>

      <div className="flex items-center justify-between">
        <div className="relative w-52 h-40">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {config?.showTotal && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-lg font-bold">{total}</span>
              <span className="text-xs text-gray-500">{config.totalLabel ?? "Total"}</span>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="ml-6 space-y-2">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <span
                className="w-3 h-3 rounded-sm mr-2"
                style={{ backgroundColor: item.color }}
              />
              {item.label} ({item.value})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
