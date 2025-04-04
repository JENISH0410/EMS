import express from express

const app = express()
const PORT = 5052

app.listen(PORT,()=>{
    console.log(`App is running at PORT:${PORT}`)
})

app.get('/',()=>{
    console.log("ping check")
})