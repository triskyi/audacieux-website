import { NextResponse } from "next/server";

// ServiceType enum values and display names/icons
const services = [
  { key: "HOUSE_SELLING", name: "House Selling", icon: "Home" },
  { key: "SMALL_HOUSE_RENTING", name: "Small House Renting (Ghetto)", icon: "Building2" },
  { key: "HOUSE_RENTAL_LEASING", name: "House Rental & Leasing", icon: "Key" },
  { key: "LAND_SELLING", name: "Plot Selling", icon: "MapPin" },
  { key: "WORKPLACE_LEASING", name: "Workplace (Office) Leasing", icon: "Briefcase" },
  { key: "APARTMENT_LEASING", name: "Apartment Leasing", icon: "Building" },
];

export async function GET() {
  return NextResponse.json(services);
}
