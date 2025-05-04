const mongoose = require('mongoose')

const departmentSchema = new mongoose.Schema({
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

const DepartmentModel = model("department", departmentSchema);

module.exports = DepartmentModel;