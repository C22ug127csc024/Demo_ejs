let express=require("express");
let app = express();
const port = 3000;

// app.get(express.json());

app.get("/",(req,res)=>{
    res.send(`<h1>welcome</h1>`)
})

let user = "expense tracker"

app.get("/expenseejs", (req, res) => { 
  res.render("expense.ejs",{user})
});

app.listen(port, console.log("server running on", port));