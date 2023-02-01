export const Team = ({ teamName, isHome }) => {
  return (
    <div className="team">
      <h1>{isHome ? "Home Team" : "Away Team"}</h1>
      <h2>{teamName}</h2>
    </div>
  );
};

export default Team;

// const colors = ['blue', 'black', 'red', 'green', 'beige']

// const bColors = colors.map((color, i, a) => {
// e = 'blue'
// i = 0
// a = ['blue', 'black', 'red', 'green', 'beige']

// e = 'black'
// i = 1
// a = ['blue', 'black', 'red', 'green', 'beige']

// e = 'red'
// i = 2
// a = ['blue', 'black', 'red', 'green', 'beige']

// e = 'green'
// i = 3
// a = ['blue', 'black', 'red', 'green', 'beige']

// e = 'beige'
// i = 4
// a = ['blue', 'black', 'red', 'green', 'beige']

//   return;
// })
