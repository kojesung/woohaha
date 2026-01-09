import { validateNotEmpty, validateNumber, validateNumberInRange } from "./utils/validator";

class Parser {
  static functionMenuParser(input) {
    const trimmed = validateNotEmpty(input);
    if (trimmed.toUpperCase() === "Q") return "Q";
    if (!validateNumberInRange(trimmed, 1, 4)) throw new Error("[ERROR] 잘못된 형식을 입력하였습니다.");
    return Number(trimmed);
  }

  // 크루원에 속했는지 + 오늘 날짜에 출석 기록 있는지 확인
  static attendanceCheckNicknameParser(input, crews, studentObject, today) {
    const trimmed = validateNotEmpty(input);
    if (!crews.includes(trimmed)) throw new Error("[ERROR] 등록되지 않은 닉네임입니다.");
    // TODO student class에서 오늘 날짜 있는지 확인
  }

  // 출석 시간이 8~23시 사이인지 확인
  static attendanceTimeParser(input) {
    const trimmed = validateNotEmpty(input);
    const [time, minute] = trimmed.split(":").map((element) => validateNumber(element));
    if (time > 23 || time < 8) throw new Error("[ERROR] 캠퍼스 운영 시간에만 출석이 가능합니다.");
    if (time === 23 && minute !== 0) throw new Error("[ERROR] 캠퍼스 운영 시간에만 출석이 가능합니다.");
    return { hour: time, minute };
  }

  // 단순 크루원에 속했는지만 확인
  static attendanceNormalNicknameParser(input, crews) {
    const trimmed = validateNotEmpty(input);
    if (!crews.includes(trimmed)) throw new Error("[ERROR] 등록되지 않은 닉네임입니다.");
    return trimmed;
  }

  static attendanceEditDateParser(input, today) {
    const trimmed = validateNotEmpty(input);
    const todayDate = today.getDate();
    if (!validateNumberInRange(trimmed, 1, todayDate)) throw new Error("[ERROR] 아직 수정할 수 없습니다.");
    return Number(trimmed);
  }
}

export default Parser;
