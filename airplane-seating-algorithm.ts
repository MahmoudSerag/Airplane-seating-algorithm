type Seat = string | null;

// Function to create a seating chart with the given number of rows and columns
const createSeatingChart = (rows: number, columns: number): Seat[][] => {
  const seatingChart: Seat[][] = new Array(rows);
  for (let i = 0; i < rows; i++) {
    seatingChart[i] = new Array(columns).fill(null);
  }
  return seatingChart;
};

// Function to assign seats to passengers in a seating chart
const assignSeats = (
  seatingChart: Seat[][],
  passengerCount: number
): Seat[][] => {
  let seatedPassengers = 0;
  const rows = seatingChart.length;
  const columns = seatingChart[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns && passengerCount > 0; j++) {
      if (j === 0 || j === columns - 1 || j === 1) {
        if (seatingChart[i][j] === null) {
          seatingChart[i][j] = `P${++seatedPassengers}`;
          passengerCount--;
        }
      }
    }
  }

  return seatingChart;
};

// Function to create a seating chart for a given number of passengers and dimensions
const createSeatAudiences = (
  rows: number,
  columns: number,
  passengerCount: number
): Seat[][] => {
  const seatingChart = createSeatingChart(rows, columns);
  const assignedChart = assignSeats(seatingChart, passengerCount);
  return assignedChart;
};

// Example usage
const rowsAndColumns: [number, number][] = [
  [3, 2],
  [4, 3],
  [2, 3],
  [3, 4],
];

let passengerCount = 30;
const seatingChart: Seat[][][] = rowsAndColumns.map(([rows, columns]) => {
  const chart = createSeatAudiences(rows, columns, passengerCount);
  passengerCount -= rows * columns;
  return chart;
});

console.log(seatingChart);
