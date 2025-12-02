const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const operations = {
  1: { name: "Add", fn: (a, b) => a + b },
  2: { name: "Subtract", fn: (a, b) => a - b },
  3: { name: "Multiply", fn: (a, b) => a * b },
  4: {
    name: "Divide",
    fn: (a, b) => (b === 0 ? "Error: Division by zero" : a / b),
  },
};

function askOperation() {
  console.log("\nChoose operation:");
  console.log("1) Add  2) Subtract  3) Multiply  4) Divide  5) Quit");

  rl.question("> ", (choice) => {
    if (choice === "5") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    const op = operations[parseInt(choice)];
    if (!op) {
      console.log("Invalid choice!");
      askOperation();
      return;
    }

    rl.question("Enter first number: ", (n1) => {
      rl.question("Enter second number: ", (n2) => {
        const a = parseFloat(n1);
        const b = parseFloat(n2);

        if (isNaN(a) || isNaN(b)) {
          console.log("Invalid numbers!");
        } else {
          console.log(`Result: ${op.fn(a, b)}`);
        }

        askOperation(); // Ask again!
      });
    });
  });
}

console.log("Welcome to the calculator!");
askOperation();
