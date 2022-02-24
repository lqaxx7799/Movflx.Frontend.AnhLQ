module.exports = {
  enable:
    process.env.NODE_ENV === "production" ||
    [" build", ":build"].some((command) =>
      process.argv.join(" ").toLowerCase().includes(command)
    ),
  content: ["./src/**/*.{html,scss,ts}"],
  plugins: [],
  theme: {},
};
