const express = require("express");
const router = express.Router();
const client = require("../../database/config"); // 상대 경로 확인

router.get("/", (req, res) => {
  const query = {
    text: "SELECT * FROM users",
  };

  client
    .query(query)
    .then((result) => res.json(result.rows))
    .catch((e) => {
      console.error(e.stack);
      res.status(500).json({ error: "Database query failed" });
    });
});

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const query = {
    text: `SELECT * FROM users WHERE id = $1 LIMIT 1`,
    values: [userId],
  };

  client
    .query(query)
    .then((result) => {
      if (result.rows.length > 0) {
        // 배열에서 첫 번째 요소를 객체로 반환
        res.json(result.rows[0]);
      } else {
        // 데이터가 존재하지 않을 경우 404 에러 반환
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((e) => {
      console.error(e.stack);
      res.status(500).json({ error: "Database query failed" });
    });
});

module.exports = router;
