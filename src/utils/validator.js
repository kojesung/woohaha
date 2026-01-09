/**
 * 비어있지 않은지 검증
 */
export const validateNotEmpty = (input, errorMessage = "[ERROR] 입력된 값이 비어있습니다.") => {
  const trimmed = input.trim();
  if (!trimmed) throw new Error(errorMessage);
  return trimmed;
};

/**
 * 숫자 검증 및 변환
 */
export const validateNumber = (input, errorMessage = "[ERROR] 숫자를 입력해 주세요.") => {
  const num = Number(input.trim());
  if (isNaN(num)) throw new Error(errorMessage);
  return num;
};

/**
 * 범위 내 숫자 검증
 */
export const validateNumberInRange = (input, min, max) => {
  const num = validateNumber(input);
  if (num < min || num > max) {
    return false;
  }
  return num;
};
