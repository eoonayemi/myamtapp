class CustomError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}

export default CustomError
