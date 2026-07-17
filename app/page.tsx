import Reveal from "../components/Reveal";
import CampaignAssistant from "../components/CampaignAssistant";
import MediaGallery,{MediaItem} from "../components/MediaGallery";

const services=[["OOH & DOOH","Strategic planning and buying across roadside, street furniture, transit, airports and premium digital inventory."],["Experiential","Pop-ups, sampling, mobile tours, brand ambassadors and memorable real-world activations."],["Retail Media","Shopper-focused solutions inside and around pharmacies, supermarkets, malls and lifestyle destinations."],["Digital Marketing","Paid social, search, programmatic display, content amplification and measurable cross-channel campaigns."],["Transit & Airports","High-frequency media solutions across rail, subway, streetcar, airport and commuter environments."],["Production","Creative adaptation, printing, special builds, installation oversight and proof of performance."]];
const media: MediaItem[] = [
  {
    title: "Times Square Digital Spectacular",
    category: "PREMIUM DOOH",
    image: "/media/times-square-digital-spectacular.jpg",
    description:
      "Iconic digital visibility in one of the world’s most valuable and recognizable media destinations.",
  },
  {
    title: "Miami Digital Billboard",
    category: "DIGITAL BILLBOARD",
    image: "/media/miami-digital-billboard.jpg",
    description:
      "High-impact digital coverage across Miami’s key commuter and lifestyle corridors.",
  },
  {
    title: "Toronto Streetcar",
    category: "TRANSIT",
    image: "/media/toronto-streetcar.jpg",
    description:
      "Mobile urban visibility connecting brands with commuters throughout downtown Toronto.",
  },
  {
    title: "Bus Shelter",
    category: "STREET FURNITURE",
    image: "/media/bus-shelter.jpg",
    description:
      "Street-level visibility in high-traffic neighborhoods and pedestrian environments.",
  },
  {
    title: "Airport Digital Network",
    category: "AIRPORT MEDIA",
    image: "/media/airport-digital-network.jpg",
    description:
      "Premium digital exposure reaching business and leisure travelers throughout their airport journey.",
  },
  {
    title: "Transit Network",
    category: "TRANSIT MEDIA",
    image: "/media/transit-network.jpg",
    description:
      "High-frequency presence across subway, rail and major commuter transportation systems.",
  },
  {
    title: "Experiential Activation",
    category: "EXPERIENTIAL",
    image: "/media/experiential-activation.jpg",
    description:
      "Immersive brand experiences designed to create direct engagement and memorable consumer interaction.",
  },
  {
    title: "Retail Digital Screens",
    category: "RETAIL MEDIA",
    image: "/media/retail-digital-screens.jpg",
    description:
      "Digital shopper marketing solutions positioned close to the point of purchase.",
  },
  {
    title: "Mall Media",
    category: "SHOPPING DESTINATIONS",
    image: "/media/mall-media.jpg",
    description:
      "Premium placements reaching shoppers inside leading retail and lifestyle destinations.",
  },
  {
    title: "Programmatic DOOH Dashboard",
    category: "PROGRAMMATIC",
    image: "/media/programmatic-dooh-dashboard.jpg",
    description:
      "Data-driven campaign planning, activation, optimization and reporting across digital inventory.",
  },
];