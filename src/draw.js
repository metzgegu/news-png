const { createCanvas } = require("canvas");
const fs = require("fs");

const { formatTitle } = require("./util");

const width = 800;
const height = 500;
const lineHeight = 30;


exports.draw = (items) => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);
    
    context.font = "bold 13pt 'PT Sans'";
    context.textAlign = "left";
    context.fillStyle = "#000";


    
    let currentLineX = 30
    
    items.forEach((post) => {
        const titles = formatTitle(post)
        let innerItemPosX = currentLineX
        context.fillText('- ', 10, innerItemPosX)
        titles.forEach(title => {
            context.fillText(title, 30, innerItemPosX)
            innerItemPosX = innerItemPosX + 15
        })
        
        currentLineX = innerItemPosX + lineHeight - 15
    })

    const buffer = canvas.toBuffer("image/png");
    const dir = './dist';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    fs.writeFileSync("./dist/news.png", buffer);
}
