class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      //this marks the instance in which the stack trace will be populated in the property "stack"
      //this.constructor is placed to omit unnecessary constructor call trace as it will appear everytime in the trace if omitted
      //captureStackTrace(targetInstance, omittedMethods)
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
