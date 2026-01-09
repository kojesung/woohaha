export const inputLoop = async (inputFn, parser) => {
  while (true) {
    try {
      const input = await inputFn();
      return parser(input);
    } catch (err) {
      MissionUtils.Console.print(err.message);
    }
  }
};
