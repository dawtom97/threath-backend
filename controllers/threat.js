import mongoose from 'mongoose';
import { Threat } from '../models/threatModel.js';

export const createThreat = async (req, res) => {
  const body = req.body;
  const newThreat = new Threat(body);

  try {
    await newThreat.save();
    res.status(201).json(newThreat);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllThreats = async (req, res) => {
  try {
    const threats = await Threat.find();
    res.status(200).json(threats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getThreat = async (req, res) => {
  try {
    const threat = await Threat.findById(req.params.id);
    res.status(200).json(threat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteThreat = async (req, res) => {
  try {
    const threat = await Threat.findByIdAndDelete(req.params.id);
    if (!threat) {
      return res
        .status(404)
        .json({ message: `No threat with id: ${req.params.id}` });
    }
    res.status(200).json(threat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateThreat = async (req, res) => {
  try {
    const threat = await Threat.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!threat) {
      return res
        .status(404)
        .json({ message: `No threat with id: ${req.params.id}` });
    }
    res.status(200).json(threat);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
