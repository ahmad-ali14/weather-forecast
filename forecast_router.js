
router.post('/forecast', (req, res)=>{
  console.log(req.body);
  let long = req.body.geo.long;
  let lat = req.body.geo.lat;


fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${long}?units=uk2`)
  .then(rees => rees.json())
  .then(data => res.json(data));
  
});


router.post('/forecast_change', (req, res)=>{
  console.log(req.body);
  let city = req.body.city;


fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=${process.env.MAP_QUEST_API_KEY}&location=${city}`)
  .then(rees => { return rees.json()} )
   .then(data => { return res.json(data.results);});
  
});
