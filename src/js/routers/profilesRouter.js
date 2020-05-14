const express = require("express");
const Profile = require("../models/ProfileModel");

const router = new express.Router();

router.get("/profiles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Profile.findById(id);
    res.send({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get("/profiles", async (req, res) => {
  try {
    const data = await Profile.find({});
    res.send({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.delete("/profiles/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Profile.findOneAndDelete({ _id });
    res.send({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post("/profiles", async (req, res) => {
  try {
    const { id, ...details } = req.body;
    const data = new Profile({ ...details });
    await data.save();
    res.status(201).send({ data });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.put("/profiles", async (req, res) => {
  try {
    const { _id, ...updates } = req.body;
    const data = await Profile.findById(_id);
    Object.assign(data, updates);
    data.save();
    res.send({ data: data.toJSON() });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
