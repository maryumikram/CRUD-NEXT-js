import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: String,
        description: String
    }, {
    timestamps: true,
}
);
// console.log("mongoose.models", mongoose.models)
const Topic = mongoose.models.Topic_List || mongoose.model("Topic_List", topicSchema)

export default Topic;
