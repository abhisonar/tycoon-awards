export interface IEvent {
  title: string;
  description: string;
  date: string;
  time?: string;
  posterSrc: string;
  address: IEventAddress;
  chiefGuestName: string;
}

export interface IEventAddress {
  address1?: string;
  city?: string;
  landmark?: string;
}

export const EVENT_DATA: Array<IEvent> = [
  {
    title: "Tycoons Of Maharashtra Awards - 2024",
    description:
      "Join us for an evening of celebration, recognition, and glamour as we honor the Tycoons of Maharashtra. Save the date for this prestigious event! 🏆✨",
    date: "2024-05-12",
    posterSrc: "/assets/hero/hero-1.jpg",
    address: {
      address1: "SwissTraffalgaar Luxury Hotel",
      city: "Nashik",
    },
    chiefGuestName: "Hruta Durgule",
  },
];
