const byteSize = (str) => {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size property of the Blob object, which represents the size in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Get user input using prompt
const userInput = prompt("Enter some string.");

// Call the byteSize function with the user input
alert(byteSize(userInput));

