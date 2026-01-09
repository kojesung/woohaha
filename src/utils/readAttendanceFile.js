import fs from "fs";

export const readAttendanceFile = async () => {
  const content = await fs.promises.readFile("public/attendances.csv", "utf-8");
  const lines = content.trim().split("\n");
  const rows = lines.slice(1, -1).map((line) => line.trim());
  const crews = getCrewList(rows);
  const attendanceMap = getAttendanceRecordPerCrew(rows);
  return { crews, attendanceMap };
};

const getCrewList = (rows) => {
  let crews = [];
  rows.forEach((row) => {
    const [nickname, _] = row.split(",");
    crews.push(nickname);
  });
  return [...new Set(crews)];
};

const getAttendanceRecordPerCrew = (rows) => {
  const studentMap = new Map();
  rows.forEach((row) => {
    const [nickname, dateTime] = row.split(",");
    const [date, time] = dateTime.split(" ");
    if (!studentMap.get(nickname)) {
      studentMap.set(nickname, new Map([[new Date(date), time]]));
    } else {
      studentMap.get(nickname).set(new Date(date), time);
    }
  });
  return studentMap;
};
