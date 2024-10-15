import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: [true, "Need a video file"],
    },
    thumbnail: {
      type: String, //cloudinary url
      required: [true, "Need a proper thumbnail"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Need a title"],
    },
    description: {
      type: String,
      required: [true, "Need a description of the video"],
    },
    duration: {
      type: Number, //cloudinary url
      required: [true, "There wasn't a duration with the video"],
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: trues }
);

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
