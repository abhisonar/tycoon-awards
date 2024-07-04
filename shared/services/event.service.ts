import { EVENT_DATA, IEvent } from "@shared/data/event.data";

export const getNextUpcomingEvent = (): IEvent => {
  const currentDate = new Date();
  return EVENT_DATA.filter(item => new Date(item.date) >= currentDate).sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  })[0];
};

export const getNextUpcomingEvents = (): IEvent[] => {
  const currentDate = new Date();
  return EVENT_DATA.filter(item => new Date(item.date) >= currentDate).sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
};
