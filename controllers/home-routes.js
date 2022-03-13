const router = require("express").Router();
const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Blog.findAll({
    attributes: [],
    include: [
      {
        model: {},
      },
      {},
    ],
  })
    .then((dbBlogData) => {
      console.log(dbBlogData[0]);
      const blogs = dbBlogData.map((post) => post.get({ plain: true }));
      res.render("homepage", { blogs });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
