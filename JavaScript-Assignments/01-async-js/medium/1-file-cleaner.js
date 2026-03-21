// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');

fs.readFile('file.txt', 'utf8', function(err, data) {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("Before:", data);

    let cleaned = "";
    let words = data.split(" ");  // Split the input string into an array of words using space as a delimiter

    for (let word of words) {
        if (word !== "") {
            cleaned += word + " ";
        }
    }
    
    cleaned = cleaned.trim();

    console.log("After:", cleaned);

   
    fs.writeFile('file.txt', cleaned, function(err) {
        if (err) {
            console.log("Error writing file:", err);
            return;
        }
        console.log("File cleaned successfully!");
    });
});