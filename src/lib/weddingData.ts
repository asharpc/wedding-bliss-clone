export const weddingData = {
  event_type: "Nikah (Marriage) and Reception",
  groom: {
    name: "Abdul Lihan",
    father: "Abdul Nazeer & Vinitha Nazeer",
    grandfather: "Late AdakaParambil Abdul Kader Haji & Late Valiyara Aboobacker Haji",
    location: "East Fort, Thrissur"
  },
  bride: {
    name: "Rifha Fathima",
    father: "Abdul Rafeeque & Saleena",
    grandfather: "N Abdu Rahiman Haji & Late Chakkarathodi Cheku",
    location: "Noorengal, Melmuri, Malappuram"
  },
  nikah: {
    date: "2026-02-15",
    time: "11:30 AM",
    venue: "Rozia International Convention Centre",
    venue_address: "Near Calicut International Airport, Kodangad, Kondotty, Malappuram, Kerala 673638",
    google_maps_link: "https://www.google.com/maps/search/?api=1&query=Rozia+International+Convention+Centre,+Kondotty,+Malappuram,+Kerala+673638"
  },
  reception: {
    time: "05:00 PM",
    date: "2026-02-15",
    venue: "Rozia International Convention Centre",
    venue_address: "Near Calicut International Airport, Kodangad, Kondotty, Malappuram, Kerala 673638",
    google_maps_link: "https://www.google.com/maps/search/?api=1&query=Rozia+International+Convention+Centre,+Kondotty,+Malappuram,+Kerala+673638"
  },
  notes: "Same venue for both Nikah and Reception. Date is February 15, 2026. Venue is a premier convention centre near Calicut Airport in Kondotty area."
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
  return new Date('2026-02-15T11:30:00');
};
