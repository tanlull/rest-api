// Full Documentation - https://docs.turbo360.co
const express = require("express");
const { route } = require(".");
const router = express.Router();

const Player = require('../models/Player')
const Team = require('../models/Team')

const players = [
	{firstName:"eli", lastName:"manning", position:"qb", age:37, team:"nyg"},
	{firstName:"tom", lastName:"brady", position:"qb", age:41, team:"nep"},
	{firstName:"jj", lastName:"watt", position:"de", age:28, team:"hou"}
]

const teams = [
  { name: "giants", city: "new york", conference: "nfc" },
  { name: "patriots", city: "new england", conference: "afc" },
  { name: "texans", city: "houston", conference: "afc" },
];

const db = {
  team: teams,
  player: players,
};

router.get('/team',(req,res)=>{
  Team.find(null)
  .then(data =>{
    res.json({
      confirmation:'Success',
      message:data
    })
  })
  .catch(err =>{
    res.json({
      confirmation:'fail',
      message:err.message
    })
  })
})

router.get("/:resource", (req, res) => {
  const resource = req.params.resource;
  const data = db[resource];

  if (data == null) {
    res.json({
      confirmation: "fail",
      data: "resource undefined ",
    });
    return;
  }

  res.json({
    confirmation: "successs",
    data: data,
  });
});

module.exports = router;