export interface IEvent {
  title: string;
  description: string;
  date: string;
  time?: string;
  posterSrc: string;
  address: IEventAddress;
}

export interface IEventAddress {
  address1?: string;
  city?: string;
  landmark?: string;
}

export const EVENT_DATA: Array<IEvent> = [
  {
    title: "Asian Iconic Award - 2024",
    description:
      "Iconic Business Awards Present 1st Edition Of Asian Iconic awards the Most Prestigious awards Of Business Of 2024, Awards Scheduled to be held on 11 th February 2024 in Mumbai (jio World ) with honorable.",
    date: "2024-03-11",
    posterSrc: "/assets/hero/hero-1.jpg",
    address: {
      city: "Nashik",
    },
  },
];
