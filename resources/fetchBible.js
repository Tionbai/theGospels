// const fs = require('fs');
// const axios = require('axios');

// const gospels = [
//   {
//     name: 'matthew',
//     chapters: 28,
//   },
//   {
//     name: 'mark',
//     chapters: 16
//   },
//   {
//     name: 'luke',
//     chapters: 24
//   },
//   {
//     name: 'john',
//     chapters: 21
//   }
// ]

// const getAllVerses = () => {

//   gospels.map(async (gospel) => {
//     const result = {
//         chapters: []
//       };

//     for (let i = 1; i <= gospel.chapters; i++) {
//       const url = `https://bible-api.com/${gospel.name}+${i}?translation=kjv`
//       const response = await axios.get(url)
//       const data = await response.data;
//       result.chapters.push(
//             {
//               id: i,
//               verses: []
//             }
//       )

//       for (let j = 0; j < data.verses.length; j++) {
//         result.chapters[i - 1].verses.push(
//           {
//             id: data.verses[j].verse,
//             text: data.verses[j].text.split('\n').join(' ').trim()
//           }
//         )
//       }
//     }

//     const stringifiedResult = JSON.stringify(result, null, 4);

//     fs.writeFile(`${gospel.name.toString()}.json`, stringifiedResult, (err) => {
//       if (err) return console.log(err);
//       console.log('Saved to file');
//     })
//   })

// }

// getAllVerses();
