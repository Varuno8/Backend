class ApiError extends Error {
  constructor(
    statusCode, // HTTP status code associated with the error
    message = "Something went wrong", // Error message, with a default value
    errors = [], // Additional error details (e.g., validation errors)
    stack = "" // Stack trace (optional)
  ) {
    super(message); // Call the parent class (Error) constructor with the message
    this.statusCode = statusCode; // Assign the provided status code to the instance
    this.data = null; // Initialize the `data` property to null (can be used for additional data)
    this.message = message; // Set the error message (inherited from Error class)
    this.errors = errors; // Store additional error details
    this.success = false; // Indicate that the operation was unsuccessful

    if (stack) {
      this.stack = stack; // If a stack trace is provided, use it
    } else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace (excludes constructor call)
    }
  }
}

export { ApiError };
