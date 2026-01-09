import Parser from "../src/Parser";
import { DateTimes } from "@woowacourse/mission-utils";

describe("Parser class test", () => {
  test("1~4, Q 기능 입력 파싱 정상 테스트", () => {
    const selectedFunction = Parser.functionMenuParser("1");
    expect(selectedFunction).toBe(1);
  });
  test("1~4, Q 기능 입력 파싱 에러 반환 테스트", () => {
    expect(() => Parser.functionMenuParser("k")).toThrow("[ERROR]");
  });
  test("출석 확인 닉네임 입력 테스트", () => {
    const nickname = Parser.attendanceCheckNicknameParser("짱수", ["짱수", "쿠키", "빙티"], student);
    expect(nickname).toBe("짱수");
  });
  test("출석 확인 닉네임 입력 에러 테스트", () => {
    expect(() => Parser.attendanceCheckNicknameParser("짱수", ["쿠키", "빙티"], student)).toThrow("[ERROR]");
  });
  test("출석 확인 시간 입력 테스트", () => {
    const time = Parser.attendanceTimeParser("10:30");
    expect(time).toEqual({ hour: 10, minute: 30 });
  });
  test("출석 확인 시간 입력 에러 테스트", () => {
    expect(() => Parser.attendanceTimeParser("23:30")).toThrow("[ERROR]");
  });
  test("입력한 닉네임이 크루원에 속했는지", () => {
    const nickname = Parser.attendanceNormalNicknameParser("짱수", ["짱수", "쿠키", "빙티"]);
    expect(nickname).toBe("짱수");
  });
  test("출석 수정 날짜 입력 테스트", () => {
    const today = DateTimes.now();
    const date = Parser.attendanceEditDateParser("3", today);
    expect(date).toBe(3);
  });
});
