const { error } = console;

console.error = (message, ...rest) => {
  error.apply(console, [message, ...rest]);

  if (message instanceof Error) {
    throw message;
  }

  throw new Error(message);
};
