import { useState } from "react";
import type { Day } from "../types/availability";

const DAYS: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const HOURS = Array.from({ length: 14 }, (_, i) => i + 8); // 8am–9pm

function AvailabilityGrid() {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggle(day: Day, hour: number) {
    const key = `${day}-${hour}`;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  function isSelected(day: Day, hour: number) {
    return selected.has(`${day}-${hour}`);
  }

  return (
    <div className="overflow-x-auto">
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="w-16"></th>
            {DAYS.map((day) => (
              <th key={day} className="px-2 py-1 text-sm font-medium">
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {HOURS.map((hour) => (
            <tr key={hour}>
              <td className="pr-2 text-sm text-gray-600">
                {hour}:00
              </td>

              {DAYS.map((day) => (
                <td key={day}>
                  <button
                    onClick={() => toggle(day, hour)}
                    className={`w-10 h-10 rounded border 
                      ${
                        isSelected(day, hour)
                          ? "bg-blue-500 border-blue-500"
                          : "bg-white hover:bg-blue-50"
                      }`}
                    aria-label={`${day} at ${hour}:00`}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AvailabilityGrid;
