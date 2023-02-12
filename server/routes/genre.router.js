const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('req.params.id:', req.params.id);
  let queryText = `SELECT "genres"."name", "movies"."title" FROM "movies"
  JOIN "movies_genres" ON "movies_genres"."movie_id" = "movies"."id"
  JOIN "genres" ON "genres"."id" = "movies_genres"."genre_id"
  WHERE "movies"."title" = '${req.params.id}';`;
  pool.query(queryText)
  .then((response) => {
    console.log('response.rows:', response.rows);
    res.send(response.rows);
  }).catch((error) => {
    console.log('error in genre.router GET request', error);
    res.sendStatus(500);
  });
});

module.exports = router;