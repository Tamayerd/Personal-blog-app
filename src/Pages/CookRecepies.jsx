import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function CookRecepies() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        maxWidth: "1200px", 
        padding: "1rem",
        gap: "1rem",
      }}
    >
      {data.length > 0 ? (
        data.map((recipe) => (
          <Card
            key={recipe.id}
            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-7" 
          >
            <Link to={`/mealrecepies/${recipe.id}`}>
              <CardHeader floated={false} className="h-80">
                <img
                  src={recipe.photo}
                  alt="recipe-photo"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </CardHeader>
              <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2">
                  {recipe.name}
                </Typography>
                <Typography color="blue-gray" className="mb-4">
                  {recipe.description}
                </Typography>
                <Typography color="blue-gray">
                  Published on: {recipe.publish_date}
                </Typography>
              </CardBody>
            </Link>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
