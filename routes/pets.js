const handlePets = (req, res) => {
  if (req.method === "GET") {
    let listOfPets = [{ id: 1, name: "hoya", sex: "male", neutered: true }];
    res.end(JSON.stringify(listOfPets));
  }
};
module.exports = handlePets;
