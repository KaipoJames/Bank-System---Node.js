const express = require('express');
const path = require("path");

const app = express();

const index = {
    pageName: "index"
}
const about = {
    pageName: "about"
}
const contact = {
    pageName: "contact"
}

// Implement ejs tamplate engine to render html file from views folder
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Tell our app to look in the styles folder for styling
app.use(express.static("public/"));

app.get("/", (req, res) => {
    res.render("index", index);
});
app.get("/about", (req, res) => {
    res.render("about", about);
});
app.get("/contact", (req, res) => {
    res.render("contact", contact);
});

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is listening on port 5000");
});