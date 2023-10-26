import mongoose, { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      maxlength: 30,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: 30,
      required: true,
    },
    age: {
      type: Number,
      min: 18,
      max: 120,
      required: true,
    },
    practices: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'practices',
        },
      ],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ShooterModel = model('shooters', schema);
