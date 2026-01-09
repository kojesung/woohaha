import { Console } from "@woowacourse/mission-utils";

class InputView {
  static async inputFunction(todayDate, todayDay) {
    return await Console.readLineAsync(`오늘은 12월 ${todayDate}일 ${todayDay}입니다. 기능을 선택해 주세요.`);
  }

  static async inputAttendanceCheckNickname() {
    return await Console.readLineAsync("닉네임을 입력해 주세요.");
  }

  static async inputAttendanceCheckTime() {
    return await Console.readLineAsync("등교 시간을 입력해 주세요.");
  }

  static async inputAttendanceEditNickname() {
    return await Console.readLineAsync("출석을 수정하려는 크루의 닉네임을 입력해 주세요.");
  }

  static async inputAttendanceEditDate() {
    return await Console.readLineAsync("수정하려는 날짜(일)를 입력해 주세요.");
  }

  static async inputAttendanceEditTime() {
    return await Console.readLineAsync("언제로 변경하겠습니까?");
  }

  static async inputAttendanceRecordNickname() {
    return await Console.readLineAsync("닉네임을 입력해 주세요.");
  }
}

export default InputView;
