export const weddingData = {
  event_type: "Nikah (Marriage) and Reception",
  groom: {
    name: "Jouhar Pc",
    father: "Moideen kutty & Ummu kulsu",
    grandfather: "Late PC Haji & Late Umoomma",
    location: "Valiyapeedika, Kunnunmpuram"
  },
  bride: {
    name: "Fathima Minha PP",
    father: "Muhammed rafeeq & Asmabi",
    grandfather: "Pariparamban Haji & Late Pariparamban Ummooma",
    location: "Vk padi, Tirurangadi, Malappuram"
  },
  nikah: {
    date: "2026-04-23",
    time: "11:30 AM",
    venue: "Pullat Convention Center",
    venue_address: "Pullat Convention Centre, Malappuram, Kerala 676306",
    google_maps_link: "https://maps.app.goo.gl/qfZjbhwQeiFRZ4458"
  },
  reception: {
    time: "05:00 PM",
    date: "2026-04-25",
    venue: "Pullat Convention Center",
    venue_address: "Pullat Convention Centre, Malappuram, Kerala 676306",
    google_maps_link: "https://maps.app.goo.gl/qfZjbhwQeiFRZ4458"
  },
  notes: "Same venue for both Nikah and Reception."
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getEventDate = (): Date => {
  return new Date('2026-04-25T11:30:00');
};
