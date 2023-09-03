import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";




export function EcommerceCard({ title, imgSrc, explanation }) {


   
  return (
    <Card className="w-96" >
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={imgSrc}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
           {title}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {explanation}
          </Typography>
        </div>
    
      </CardBody>
      <CardFooter className="pt-0">
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
      </CardFooter>
    </Card>
  );
}
