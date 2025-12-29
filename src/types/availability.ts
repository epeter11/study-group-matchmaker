export type Day =
  | "Mon"
  | "Tue"
  | "Wed"
  | "Thu"
  | "Fri"
  | "Sat"
  | "Sun";

export interface TimeSlot {
  day: Day;
  hour: number; // 0–23
}
