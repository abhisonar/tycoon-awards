export interface IEvent {
  title: string;
  description: string;
  date: string;
  time?: string;
  posterSrc: string;
  isVideo?: boolean;
  posterSrc1?: string;
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
    title: 'Tycoons Of Maharashtra Awards - 2024',
    description:
      'Join us for an evening of celebration, recognition, and glamour as we honor the Tycoons of Maharashtra. Save the date for this prestigious event! 🏆✨',
    date: '2024-05-12',
    posterSrc:
      'https://res.cloudinary.com/marathiudyojak/image/upload/v1712174845/tycoon-awards/awards/12-05-2024/EventPoster1_12_05_2024_hgfjcp.webp',
    posterSrc1:
      'https://res.cloudinary.com/marathiudyojak/image/upload/v1712174844/tycoon-awards/awards/12-05-2024/EventPoster2_12_05_2024_ybdqjz.webp',
    address: {
      address1: '',
      city: 'Nashik',
    },
    chiefGuestName: 'Hruta Durgule',
  },
  {
    title: 'Mahaudyojak Ratndeep Purskar - 2024',
    description:
        'Join us for an evening of celebration, recognition, and glamour as we honor the Mahaudyojak Ratndeep Purskar 2024. Save the date for this prestigious event! 🏆✨',
    date: '2024-06-16',
    posterSrc:
        'https://res.cloudinary.com/marathiudyojak/video/upload/v1716197746/tycoon-awards/awards/12-05-2024/Cinematic_Event_Highlight_1_wqqew7.mp4',
    isVideo: true,
    posterSrc1:
        'https://res.cloudinary.com/marathiudyojak/image/upload/v1716200866/tycoon-awards/awards/16-06-2024/EventPoster2-16-06-2024_s8mapb.webp',
    address: {
      address1: '',
      city: 'Pune',
    },
    chiefGuestName: 'Sayali Sanjeev',
  },
];
