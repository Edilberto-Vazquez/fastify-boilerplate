const fs = require('fs');

function loadSeed(filePath) {
  const data = fs
    .readFileSync(filePath)
    .toString('utf8')
    .split('\n')
    .map((row) =>
      row.split('\t').map((cell) => {
        return cell.trim().replace(/\r/, '');
      })
    );
  const headers = data[0];
  let populator = [];
  for (let x = 1; x < data.length - 1; x++) {
    const row = data[x];
    let objRow = {};
    for (let y = 0; y < headers.length; y++) {
      let val = row[y];
      val = val === '' ? null : val;
      objRow[headers[y]] = val;
    }
    populator.push(objRow);
  }
  return populator;
}

module.exports = loadSeed;
