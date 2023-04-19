class NewCustomError extends Error {
  constructor(status: string, message: string) {
    super(message);
    this.stack = status;
  }
}

export default NewCustomError;  