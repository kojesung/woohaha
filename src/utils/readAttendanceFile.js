import fs from "fs";

export const readAttendanceFile = async () => {
  const content = await fs.promises.readFile("public/attendances.csv", "utf-8");
  const lines = content.trim().split("\n");
  const rows = lines.slice(1, -1).map((line) => line.trim());
  return rows;
};
