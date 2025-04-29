import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { notFound } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import RestaurantHeader from "./components/header";
import RestaurantCategories from "./components/categories";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const isConsumptionMethodValid = (consumptionMethod: String) => {
  return ["DINE_IN", "TAKEAWAY"].includes(
    consumptionMethod.toLocaleUpperCase() as string,
  );
};

export default async function RestaurantMenuPage({
  params,
  searchParams,
}: RestaurantMenuPageProps) {
  const { slug } = await params;
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    return notFound();
  }

  const restaurante = await getRestaurantBySlug(slug);

  if (!restaurante) {
    return notFound();
  }

  return (
    <div>
      <RestaurantHeader restaurant={restaurante} />;
      <RestaurantCategories restaurant={restaurante} />
    </div>
  );
}
