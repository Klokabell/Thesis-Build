import mongoose from "mongoose"

const StockSchema = new mongoose.Schema({
    Date: {
      type: Date,
      required: true
    },
    Open: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    High: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
   Low: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
    },
    Close: {
        type: mongoose.Schema.Types.Decimal128,
        required: true
    },
    Volume: {
        type: Number,
        required: true
    }
  })