const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// const email = "services_foundit@outlook.com";
// const password = "BobbyTheGreat1#";

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello vro!')
})

app.post('/', async (req, res) => {
    
    const { email, hour, date } = req.body;
    console.log("🚀 ~ file: index.js ~ line 22 ~ app.post ~ email", email)

    const transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
            user: "services_foundit@outlook.com",
            pass: "BobbyTheGreat1#"
        }
    }); 
    
    const message = {
        from: "services_foundit@outlook.com",
        to: email,
        subject: "Test mail for Unihack 4th Edition 2022" + hour + date,
        text: "This mail was MEAGA MEGA a full success!"
    }

    const info = await transporter.sendMail(message);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.send('Email Sent!')
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));





// transporter.verify((err, info) => {
//     if(err){
//         console.log(err);
//     } else console.log("[LOG]: Mail is ready to send.");
// })

// transporter.sendMail(options, (err, info) => {
//     if(err){
//         console.log("[ERROR]: " + err);
//         return;
//     }

//     console.log("[SENT]: " + info.response);
// });





//BobbyTheGreat1#