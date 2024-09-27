const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  let islandCount = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to mark all connected land as visited
  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 'W') {
      return;
    }

    // Mark the current land as visited by changing it to water
    grid[i][j] = 'W';

    // Visit all neighboring cells (up, down, left, right)
    dfs(i - 1, j); // up
    dfs(i + 1, j); // down
    dfs(i, j - 1); // left
    dfs(i, j + 1); // right
  }

  // Loop through the entire grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Whenever a land is found, it's the start of a new island
      if (grid[i][j] === 'L') {
        islandCount++;
        dfs(i, j); // Explore the entire island
      }
    }
  }

  return islandCount;
};

module.exports = getTotalIsles;
