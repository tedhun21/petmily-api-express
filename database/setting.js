const { Client } = require("pg");
const client = new Client({
  user: "songjihun",
  host: "127.0.0.1",
  database: "petmily",
  password: "",
  port: 5432,
});
client.connect();

const query = {
  text: "INSERT INTO users(id, name, email) VALUES($1, $2, $3)",
  values: [1, "John Doe", "john@example.com"],
};

client
  .query(query)
  .then((res) => console.log("User inserted successfully"))
  .catch((e) => console.error(e.stack))
  .finally(() => client.end());
