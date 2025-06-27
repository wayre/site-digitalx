"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

interface Comment {
  author_name: string;
  text: string;
  rating: number;
  relative_time_description: string;
  profile_photo_url: string;
}

interface CommentsCarouselProps {
  comments: Comment[];
}

const CommentsCarousel: React.FC<CommentsCarouselProps> = ({ comments }) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[autoplayPlugin.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
      onMouseEnter={autoplayPlugin.current.stop}
      onMouseLeave={autoplayPlugin.current.reset}
    >
      <CarouselContent className="-ml-4">
        {comments.map((comment, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1 h-full">
              <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center mb-4">
                    <Image
                      width={50}
                      height={50}
                      src={comment.profile_photo_url}
                      alt={comment.author_name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <strong className="block text-gray-800">
                        {comment.author_name}
                      </strong>
                      <span className="text-sm text-gray-500">
                        {comment.relative_time_description}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-5">
                    {comment.text}
                  </p>
                  <div className="mt-auto text-yellow-500">
                    {"★".repeat(comment.rating)}
                    {"☆".repeat(5 - comment.rating)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {comments.length > 3 && (
        <>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black hidden md:flex" />
        </>
      )}
    </Carousel>
  );
};

export default CommentsCarousel;
