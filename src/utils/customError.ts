class NewError extends Error {
  constructor(message: string, status: string) {
    super(message);
    this.stack = status;
  }
}

export default NewError;  