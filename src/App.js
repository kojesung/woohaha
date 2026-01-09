import { readAttendanceFile } from "./utils/readAttendanceFile.js";

class App {
  async run() {
    const { crews, attendanceMap } = await readAttendanceFile();
    console.log(crews);
    console.log(attendanceMap);
  }
}

export default App;
