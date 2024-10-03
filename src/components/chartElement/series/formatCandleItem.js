import { format } from "date-fns";

const formatCandleItem = (item, period) => {
  if (!item) return null;

  let dateKey = "Date";
  switch (period) {
    case "Daily":
      dateKey = "Date";
      break;
    case "Weekly":
      dateKey = "week";
      break;
    case "Monthly":
      dateKey = "month";
      break;
    case "Yearly":
      dateKey = "year";
      break;
  }

  if (!item.x || !Array.isArray(item.y)) {
    try {
      let date;
      if (["Weekly", "Monthly"].includes(period)) {
        const dateValue = item[dateKey];
        if (!dateValue || isNaN(Number(dateValue))) {
          throw new Error(`Invalid date value: ${dateValue}`);
        }

        const year = item.year || new Date().getFullYear();
        date = new Date(
          year,
          period === "Weekly" ? Number(dateValue) - 1 : Number(dateValue) - 1,
          1
        );
      } else if (period === "Daily") {
        date = new Date(item.Date);
      } else {
        // Yearly
        date = new Date(item.year, 0, 1);
      }

      return {
        x: format(
          date,
          period === "Daily"
            ? "d/M/yyyy"
            : period === "Yearly"
            ? "yyyy"
            : `${period === "Weekly" ? "eee d yyyy" : "MMM yyyy"}`
        ),
        y: [item.Open, item.High, item.Low, item.Close],
      };
    } catch (error) {
      console.error(`Error formatting item: ${error.message}`);
      return null;
    }
  }
  return item;
};

export default formatCandleItem;
