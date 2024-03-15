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
    posterSrc:
      "https://res.cloudinary.com/marathiudyojak/image/upload/v1710528321/tycoon-awards/awards/May_12_2023/Event_12_May_2023_paqvmz.webp",
    address: {
      address1: "",
      city: "Nashik",
    },
    chiefGuestName: "Hruta Durgule",
  },
];
