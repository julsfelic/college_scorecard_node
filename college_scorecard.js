const parse = require('csv-parse');
const fs = require('fs');

function byState(data) {
  const stateColleges = data.filter(function(row) {
    return process.argv[3] == row["STABBR"]
  });

  stateColleges.forEach(function(college) {
    console.log(college["INSTNM"]);
  })
}

const rs = fs.createReadStream(__dirname + '/2013_college_scorecards.csv');
parser = parse({ columns: true }, function(err, data) {
  if (process.argv[2] == "byState") {
    byState(data);
  }
});

rs.pipe(parser);
