const express = require("express");
const zod = require("zod");
const app = express();

const schema  = zod.array(zod.number());

app.use(express.json());

const schema1 = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US")),
    kidney: zod.array(zod.number())  // Match the property name with the JSON data
});

// app.get("/health-checkup" , function(req , res){
//     const kidneys = req.body.kidneys;

//     const response = schema.safeParse(kidneys) // for validation
//     // const response1 = schema1.safeParse(kidneys) // for validation

//     if(!response.success){
//         res.status(411).json({
//             msg : "input is wrong"
//         })
//     }
//     // if(!response1.success){
//     //     res.status(411).json({
//     //         msg : "input is wrong obj"
//     //     })
//     // }

//     res.send({
//         response
//     })
//     // res.send({
//     //     response1
//     // })
// });

// Change the route to POST since you are sending JSON in the body
app.post("/health-checkup", function(req, res) {
    // Parse the entire request body with schema1
    const response1 = schema1.safeParse(req.body);

    // Check if validation was successful
    if (!response1.success) {
        return res.status(400).json({
            msg: "Input validation failed",
            errors: response1.error.errors // Send specific validation errors
        });
    }

    // If validation succeeds, proceed with the intended response
    res.json({
        msg: "Input validation successful",
        data: response1.data
    });
});

app.listen(3000);