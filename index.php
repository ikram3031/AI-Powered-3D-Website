<?php
// Printing and commenting in PHP
echo "Hello World!"; // Output: Hello World!

// Variables and concatenation
$name = "John";
$age = 25;
echo "My name is " . $name . " and I am " . $age . " years old."; // Output: My name is John and I am 25 years old.

// Functions and variable scope
function addNumbers($num1, $num2)
{
    $sum = $num1 + $num2;
    return $sum;
}

$result = addNumbers(5, 10);
echo "The sum is: " . $result; // Output: The sum is: 15

// Echo/Print statements
echo "<br>";
print "This is a print statement."; // Output: This is a print statement.

// Comparison operators (== and ===)
$x = 5;
$y = "5";
if ($x == $y) {
    echo "x and y are equal.";
} else {
    echo "x and y are not equal.";
}

// Data types and var_dump()
$number = 10;
$floatNumber = 3.14;
$string = "Hello";
$array = [1, 2, 3];
$boolean = true;

var_dump($number, $floatNumber, $string, $array, $boolean);

// String operations
$phrase = "I love PHP programming!";
echo "<br>";
echo strlen($phrase); // Output: 23
echo str_word_count($phrase); // Output: 4
echo strrev($phrase); // Output: !gnimmargorp PHP evol I
echo strpos($phrase, "PHP"); // Output: 11
echo str_replace("PHP", "JavaScript", $phrase); // Output: I love JavaScript programming!

// Constants
define("PI", 3.14);
echo "<br>";
echo PI; // Output: 3.14

// Operators
$x = 5;
$y = 3;
echo "<br>";
echo $x + $y; // Output: 8
echo $x++; // Output: 5 (post-increment)
echo ++$x; // Output: 7 (pre-increment)
echo $x--; // Output: 7 (post-decrement)
echo --$x; // Output: 5 (pre-decrement)
echo $x += $y; // Output: 8 (add and assign)

// Conditionals (if-else)
$grade = 85;
echo "<br>";
if ($grade >= 90) {
    echo "Excellent!";
} elseif ($grade >= 80) {
    echo "Good!";
} elseif ($grade >= 70) {
    echo "Average!";
} else {
    echo "Needs improvement!";
}

// Loops (while)
echo "<br>";
$i = 1;
while ($i <= 5) {
    echo $i . " ";
    $i++;
}

// Loops (for)
echo "<br>";
for ($j = 1; $j <= 5; $j++) {
    echo $j . " ";
}

// Default function parameters
function greet($name = "Guest")
{
    echo "<br>";
    echo "Hello, " . $name . "!";
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!

// Typecasting
$num = 10.5;
$intNum = (int)$num;
echo "<br>";
echo $intNum; // Output: 10

// Returning values from functions
function multiply($num1, $num2)
{
    return $num1 * $num2;
}

$product = multiply(5, 4);
echo "<br>";
echo "The product is: " . $product; // Output: The product is: 20
?>
