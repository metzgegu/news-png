const { createCanvas } = require("canvas");
const fs = require("fs");

const { formatTitle } = require("./util");

const width = 1000;
const height = 700;
const lineHeight = 40;

exports.draw = (items) => {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    
    context.fillStyle = "#fff";
    context.fillRect(0, 0, width, height);
    
    context.font = "bold 15pt 'PT Sans'";
    context.textAlign = "left";
    context.fillStyle = "#000";


    
    let currentLineX = 30
    
    items.forEach((post) => {
        const titles = formatTitle(post)
        let innerItemPosX = currentLineX
        context.fillText('- ', 10, innerItemPosX)
        titles.forEach(title => {
            context.fillText(title, 30, innerItemPosX)
            innerItemPosX = innerItemPosX + 25
        })
        
        currentLineX = innerItemPosX + lineHeight - 25
    })

    const buffer = canvas.toBuffer("image/png");
    const dir = './dist';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    fs.writeFileSync("./dist/image.png", buffer);
}
