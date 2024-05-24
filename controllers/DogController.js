const dogs = [
    { name: "Clifford",
     color: "red", 
     size: "huge" },
    { name: "Scooby-Doo", 
    color: "brown", 
    size: "big" },
    { name: "Snowy", 
    color: "white", 
    size: "small" },
  ];
  
  
  
  const getDogs = (req, res) => {
      res.send(dogs)
    }
    
    const getDog = (req, res) => {
        res.send(dogs[req.params.id])
    }

    const getDogName = (req, res) => {
        res.send(dogs[req.params.id].name)
    }    
    
    const getDogColor = (req,res) => {
        const myColor = req.params.color
        const dogsWithColor = dogs.filter(dog => dog.color === myColor)
        res.send(dogsWithColor)
    }
    
    module.exports = {
        getDogs,
        getDog,
        getDogName,
        getDogColor
    }