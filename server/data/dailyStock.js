import mongoose from "mongoose"

const stockSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.type.ObjectId,
      required: true
    },
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

const StockSchema = mongoose.model('StockSchema', stockSchema);


  export default StockSchema