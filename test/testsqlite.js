const sqlite = require('sqlite3');
let db = new sqlite.Database('./db/test.db', (err) => {
  if (err) {
    console.error(err.message);
    let initSQL = 'CREATE TABLE IF NOT EXISTS tb_url (' +
      ' url_id      TEXT PRIMARY KEY, ' +
      ' url         TEXT NOT NULL,' + 
      ' code        TEXT NOT NULL, ' +
      ' expire_date DATETIME NOT NULL, ' + 
      ' count       INTEGER DEFAULT 0,';
    db.run(initSQL,(err) => {
      if(err) {
        console.error(err.message);
      }
    });
  }
  console.log('Connected to the test database.');
});


let sql = 'SELECT  as id, Name as name FROM tb_test_table';

db.serialize(() => {
  db.each(sql,
    sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE,
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.id + '\t' + row.name);
    });

  
});

db.close();