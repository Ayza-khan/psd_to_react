const path=require("path");
module.exports={
    mode: "development",
    entery: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:["style-loader","css-loader"]
        }
        ]
    }
}