import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";
import { db } from "@/lib/prisma";
import { get } from "http";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ConsumptionMethodOptions from "./components/consumption-method-options";

interface RestaurantePageProps {
  params: Promise<{ slug: string }>;
}

export default async function RestaurantePage({
  params,
}: RestaurantePageProps) {
  const { slug } = await params;

  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound();
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMethodOptions
          slug={slug}
          imageUrl="/dine_in.png"
          altText="Para comer aqui"
          buttonText="comer aqui"
          option="DINE_IN"
        />
        <ConsumptionMethodOptions
          slug={slug}
          imageUrl="/takeaway.png"
          altText="Para levar"
          buttonText="levar"
          option="TAKEAWAY"
        />
      </div>
    </div>
  );
}
