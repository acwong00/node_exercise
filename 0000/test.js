var fs = require('fs')
  , gm = require('gm')
  , readStream = fs.createReadStream("acwong.jpg");
gm(readStream,'acwong.jpg')
.options({imageMagick: true})
.size({bufferStream: true}, function(err, size){
    if (err) {
        throw err;
    } else {
        var width = parseInt(size.width);
        var height = parseInt(size.width);
        this.fill("#ff0000");
        this.drawCircle(width-30, 30, width-30, 0);
        this.fill("#ffffff");
        this.fontSize("50");
        this.drawText(width-45, 50, "7");
        this.write("acwong2.jpg", function(err){
            if (err) {
                throw err;
            } else {
                console.log("done");
            }
        });
    }
});
