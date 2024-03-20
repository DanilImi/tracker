import mongoose from 'mongoose';

export interface TrackingEvent {
    event: string;
    tags: string[];
    url: string;
    title: string;
    ts: number;
  }
  
const TrackingEventSchema = new mongoose.Schema<TrackingEvent>({
    event: String,
    tags: [String],
    url: String,
    title: String,
    ts: Number
});

export const TrackingEventModel = mongoose.model<TrackingEvent>('TrackingEvent', TrackingEventSchema);