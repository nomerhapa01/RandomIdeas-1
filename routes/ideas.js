const express = require("express");
const router = express.Router();

//### get all ideas
router.get("/", (req, res) => {
  res.json({ success: true, data: ideas });
});

//### get a single idea
router.get("/:id", (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  res.json({ success: true, data: idea });
});

module.exports = router;

const ideas = [
  {
    id: 1,
    text: "Growth is painful. Change is painful. But nothing is as painful as staying stuck somewhere you don't belong",
    tag: "Agriculture",
    username: "Superman",
    date: "2017-01-02",
  },
  {
    id: 2,
    text: "If you have good habits, time becomes your ally. All you need is patience",
    tag: "Science",
    username: "Ironman",
    date: "2019-03-05",
  },
  {
    id: 3,
    text: "Within you is a stillness and a sanctuary to which you can retreat at any time and be yourself",
    tag: "Physics",
    username: "Victor Wenbanyama",
    date: "2023-04-08",
  },
];
