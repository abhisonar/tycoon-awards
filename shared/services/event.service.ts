import { EVENT_DATA, IEvent } from "@shared/data/event.data";

export const getNextUpcomingEvent = (): IEvent => {
  return EVENT_DATA.sort(function (a, b) {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })[0];
};
