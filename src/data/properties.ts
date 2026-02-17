export interface Property {
  id: number;
  title: string;
  type: "land" | "house" | "apartment" | "office";
  location: string;
  price: number;
  size: string;
  image: string;
  featured: boolean;
  description: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Prime Land in Kimironko",
    type: "land",
    location: "Kimironko, Kigali",
    price: 45000000,
    size: "600 m²",
    image: "/placeholder-land-1.jpg",
    featured: true,
    description: "Perfect location for residential development near main road"
  },
  {
    id: 2,
    title: "Modern Villa in Kacyiru",
    type: "house",
    location: "Kacyiru, Kigali",
    price: 85000000,
    size: "350 m²",
    image: "/placeholder-house-1.jpg",
    featured: true,
    description: "Luxury 4-bedroom villa with modern amenities"
  },
  {
    id: 3,
    title: "Commercial Plot Nyarugenge",
    type: "land",
    location: "Nyarugenge, Kigali",
    price: 120000000,
    size: "1000 m²",
    image: "/placeholder-land-2.jpg",
    featured: true,
    description: "Excellent for commercial development in city center"
  },
  {
    id: 4,
    title: "Apartment in Remera",
    type: "apartment",
    location: "Remera, Kigali",
    price: 35000000,
    size: "120 m²",
    image: "/placeholder-apartment-1.jpg",
    featured: true,
    description: "2-bedroom furnished apartment with parking"
  },
  {
    id: 5,
    title: "Office Space Kiyovu",
    type: "office",
    location: "Kiyovu, Kigali",
    price: 55000000,
    size: "200 m²",
    image: "/placeholder-office-1.jpg",
    featured: true,
    description: "Premium office space in business district"
  },
  {
    id: 6,
    title: "Residential Land Gacuriro",
    type: "land",
    location: "Gacuriro, Kigali",
    price: 38000000,
    size: "500 m²",
    image: "/placeholder-land-3.jpg",
    featured: true,
    description: "Peaceful neighborhood with great views"
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-RW", {
    style: "currency",
    currency: "RWF",
    minimumFractionDigits: 0,
  }).format(price);
};
