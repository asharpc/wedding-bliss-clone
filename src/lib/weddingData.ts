export const weddingData = {
  event_type: "Nikah (Marriage) and Reception",
  groom: {
    name: "Jouhar Pc",
    father: "Moideen kutty Pc & Ummu kulsu",
    grandfather: "Late Pc Yousuf Haji & Late Kunji Pathumma",
    location: "Valiyapeedika, Kunnunmpuram, ArNagar, Malappuram"
  },
  bride: {
    name: "Fathima Minha PP",
    father: "Muhammed rafeeq & Asmabi",
    grandfather: "Pariparamban Kunji Muhammed & Late Thacholi Pathumma",
    location: "Vk padi, Tirurangadi, Malappuram"
  },
  nikah: {
    date: "2026-04-23",
    time: "10:00 AM",
    venue: "Pullat Convention Center",
    venue_address: "Pullat Convention Centre, Malappuram, Kerala 676306",
    google_maps_link: "https://maps.app.goo.gl/ZwuoZ93wJxYJpM8X8"
  },
  reception: {
    time: "11:30 AM",
    date: "2026-04-25",
    venue: "Pullat Convention Center",
    venue_address: "Pullat Convention Centre, Malappuram, Kerala 676306",
    google_maps_link: "https://maps.app.goo.gl/ZwuoZ93wJxYJpM8X8"
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
