
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';


inquirer
  .prompt([
    {
        message:"Type the URL to generate Qr-code",
        name:"URL",
    }

  ])
  .then((answers) => {
    const url = answers.URL;
 
    var qr_png= qr.image(url);
    qr_png.pipe(fs.createWriteStream('qr_code.png'));
    fs.writeFile('url.txt', url, err => {
        if (err) {
          console.error(err);
        }
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
    
    } else {
      
    }
  });