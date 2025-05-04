const mongoose = require('mongoose')

const designationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "companies",
        required: true,
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
    },
})

const DesignationModel = model("designation", designationSchema);

module.exports = DesignationModel;