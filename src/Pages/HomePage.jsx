import React, { useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { EcommerceCard } from "../Components/Cards";
import { Authority } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

export default function HomePage() {
  const numberOfCards = 4;
  const cardData = [
    {
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/easy-dinner-ideas-fried-rice-1642629715.jpg?crop=1.00xw:0.801xh;0.00160xw,0.0756xh&resize=360:*",
      explanation: "Quick, Easy 30-Minutes (or Faster!) Dinner Recipes...",
    },
    {
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/dinner-ideas-kids-bagel-pizza-1659367291.jpg?crop=1.00xw:0.801xh;0,0.0385xh&resize=360:*",
      explanation: "64 Kid-Friendly Dinner Ideas That Adults Will Love...",
    },
    {
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/vegetable-side-dish-recipes-1657225110.jpeg?crop=1.00xw:0.799xh;0,0.121xh&resize=360:*",
      explanation: "Vegetable Side Dishes to Round Out Any Meal...",
    },
    {
      imgSrc:
        "https://hips.hearstapps.com/hmg-prod/images/healthy-chicken-recipes-flatbread-1673033008.jpg?crop=1.00xw:0.758xh;0,0.177xh&resize=360:*",
      explanation: "Healthy Chicken Recepies for Weeknight Dinners...",
    },
  ];

  const { user } = useContext(Authority);
  return (
    <>
      <Card className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/bbq-food-649360df98f7b.jpeg?crop=1.00xw:0.753xh;0,0.149xh&resize=1120:*"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            All Day Meal
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            BBQ Recipes for a Whole Summer of Cookouts
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            We've got you covered, from weeknight dinner to tailgating parties.
          </Typography>
          <a href="#" className="inline-block">
            <Link to={"/AllDayMeal"}>
              <Button variant="text" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </a>
        </CardBody>
      </Card>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {Array.from({ length: numberOfCards }).map((_, index) => (
          <EcommerceCard
            key={index}
            imgSrc={cardData[index]?.imgSrc || ""}
            explanation={cardData[index]?.explanation || ""}
          ></EcommerceCard>
        ))}
      </div>
    </>
  );
}
