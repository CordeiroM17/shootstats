import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    rounds: {
      type: Number,
      min: 1,
      max: 50,
      required: true,
    },
    shootsPerRound: {
      type: Number,
      min: 1,
      max: 20,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PracticeModel = model('practices', schema);
