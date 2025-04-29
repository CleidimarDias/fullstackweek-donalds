import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ConsumptionMethod } from "@prisma/client";

interface ConsumptionMethodOptionsProps {
  slug: string;
  imageUrl: string;
  altText: string;
  buttonText: string;
  option: ConsumptionMethod;
}

const ConsumptionMethodOptions = ({
  slug,
  imageUrl,
  altText,
  buttonText,
  option,
}: ConsumptionMethodOptionsProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image className="object-contain" fill src={imageUrl} alt={altText} />
        </div>

        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {" "}
            {buttonText}{" "}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMethodOptions;
