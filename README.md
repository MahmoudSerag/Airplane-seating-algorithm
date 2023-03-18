# Description

<font size="3">Write a program that helps seat audiences in a flight based on the following input and rules.</font>

## Problem name

<font size="3">Airplane seating algorithm</font> 

## Rules for seating

<ol>
  <li>Always seat passengers starting from the front row to back, starting from the left to the right.</li>
  <li>Fill aisle seats first followed by window seats followed by center seats (any order in center	seats).</li>
</ol>

## Input to the program will be

<ul>
  <li>a 2D array that represents the rows and columns [[3,4], [4,5], [2,3],	[3,4]]</li>
  <li>Number of passengers waiting in queue.</li>
</ul>

## Example

## Input

![Input info](https://cdn.discordapp.com/attachments/978298076039098478/1086619952112484353/image.png)

## Expected output

![Input info](https://cdn.discordapp.com/attachments/978298076039098478/1086620262419673088/image.png)

## Time complexity

<font size="3">O(n * rows * columns)</font>

### Time explanation

<font size="3">Function uses two nested loops to iterate through each seat in the seating chart, and the input parameters rows and cols determine the size of the chart.</font>

## Space complexity

O(n * rows * columns)

### Space explanation

<font size="3">Function creates a 2D array of strings (seatingChart) with dimensions rows x cols to represent the seating chart. The space used by the other variables (seatedPassengers and passenger) is constant and does not depend on the input size, so they do not contribute to the space complexity.</font>

## License

Nest is [MIT licensed](LICENSE).
