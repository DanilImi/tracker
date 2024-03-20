import { TrackingEventModel } from "../models/track.model";

const insertEvent = async (events: any) => {
  try {
    await TrackingEventModel.insertMany(events);
    return true;
  } catch (err) {
    console.error("Error saving tracking events", err);
    return false;
  }
};

export { insertEvent };
