const mongoose = require("mongoose")
const dbName = "projectDB"

mongoose.connect("mongodb://localhost/" + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Ypu are connected to the database " + dbName)
    })
    .catch((err) => {
        console.log("you had a problem onnectin to the database config: " + err)
    })