const express = require('express');

const app = express();

const bodyparser = require('body-parser');

var cors = require('cors');

const morgan =  require('morgan');

app.use(morgan('dev'));

app.use(cors())

app.use(bodyparser.json());


app.listen(process.env.PORT||4000);

app.get("/", (req,res)=>{
    res.send("đây là trang chủ")
})

addVideo = (video)=>{
  const fs = require('fs');
  let rawdata = fs.readFileSync('info.json');
  let videos = JSON.parse(rawdata);
  console.log(videos); 
  videos.videos.push(video)
  console.log(videos)
  var jsonContent = JSON.stringify(videos);
  console.log(jsonContent);
  fs.writeFile("info.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      console.log("JSON file has been saved.");
  }); 
}

app.post("/downloadyoutubevideo", (req,res)=>{
  var emp = req.body;
  const readline = require('readline');
  const path = require('path');
  const fs = require('fs');
  const ytdl = require('ytdl-core');
  const url = emp.url;
  var slit = url.split('/')
  const output = path.resolve(__dirname, `${slit[slit.length-1]}.mp4`);
  const id = slit[slit.length-1];
  var vid = null
  ytdl.getInfo(id).then(info => {
    console.log('title:', info.videoDetails.title);
    console.log('rating:', info.player_response.videoDetails.averageRating);
    console.log('uploaded by:', info.videoDetails.author.name);
    vid = 
    {
      id: slit[slit.length-1],
      title: info.videoDetails.title
    }
  });
  
  const video = ytdl(url);
  let starttime;
  video.pipe(fs.createWriteStream(output));
  video.once('response', () => {
    starttime = Date.now();
  });
  video.on('progress', (chunkLength, downloaded, total) => {
    const percent = downloaded / total;
    const downloadedMinutes = (Date.now() - starttime) / 1000 / 60;
    const estimatedDownloadTime = (downloadedMinutes / percent) - downloadedMinutes;
    readline.cursorTo(process.stdout, 0);
    process.stdout.write(`${(percent * 100).toFixed(2)}% downloaded `);
    process.stdout.write(`(${(downloaded / 1024 / 1024).toFixed(2)}MB of ${(total / 1024 / 1024).toFixed(2)}MB)\n`);
    process.stdout.write(`running for: ${downloadedMinutes.toFixed(2)}minutes`);
    process.stdout.write(`, estimated time left: ${estimatedDownloadTime.toFixed(2)}minutes `);
    readline.moveCursor(process.stdout, 0, -1);
  });
  video.on('end', () => {
    process.stdout.write('\n\n');
    addVideo(vid)
    res.send('done')
  }); 
}) 



app.get('/createjs', (req,res)=>{
  const fs = require('fs');
  let rawdata = fs.readFileSync('info.json');
  let videos = JSON.parse(rawdata);
  let lyrics = `export default urls={\n`
  for (let index = 0; index < videos.videos.length; index++) {
    lyrics = lyrics + `"${videos.videos[index].id}": require('./../../DownloadFilePro/${videos.videos[index].id}.mp4'),\n`
  }
  lyrics = lyrics + '}'

    fs.writeFile('./../Components/Others/info.js', lyrics, (err) => {
    
    if (err) throw err;

    console.log('Lyric saved!');
});
  res.send('done')
})