const express = require('express');
const router = express.Router();

// PUG VARIANT
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => {
  res.render('index', {
    title: 'my life'
  });
});

/* GET about page */
router.get('/about', function (req, res) {
  res.render('about', {
    title: 'About me',
    name: 'Nathan'
  });
  router.use(express.static('public'));
});

// Query example. Using type and routing to send the user who visit this link to a vid.
// router.get('/sister', (req, res) => {
//   router.use(express.static('public/videos'));
//   res.sendFile('/twerk.mp4');
//   res.get('Content-Type');
//   res.type('png');
// });

router.get('/sis', (req, res) => {
  res.writeHead(200, {'Content-Type': 'image/jpg'});
  res.sendFile('/public/images/sister.jpg');
  res.end("CACHE MANIFEST");
});

/* Sending files based on the query they enter in the addressbar */
router.get('/images/:fileName', function (req, res, next) {

  let options = {
    root: path.join(__dirname, 'public')
  };

  res.sendFile(req.params.fileName, options, (err) => {
    if (err) next(err);
    else console.log('sent:', fileName);
  });
});


/*
// route for when there is no page found.
router.get('*', (req, res) => {
  router.use(express.static('public'));
  res.render('error', {title: '404'});
});
*/

module.exports = router;