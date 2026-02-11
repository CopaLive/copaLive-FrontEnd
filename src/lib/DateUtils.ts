import dayjs, { Dayjs, isDayjs } from "dayjs"

export abstract class DateUtils {
  static valueOf(date: Dayjs | Date | string): number {
    const d = isDayjs(date) ? date : dayjs(date);
    return d.valueOf();
  }
}