import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const contributors = [
  {
    name: "Utsav Bhattarai",
    photo: "/contributors/c8.webp",
    position: "",
    github: "https://github.com/utsavdotdev",
    x: "https://x.com/utsavdotdev",
    linkedin: "https://www.linkedin.com/in/utsavdotdev/",
  },
  {
    name: "Manjul Tamrakar",
    photo: "/contributors/c1.jpg",
    position: "",
    github: "https://github.com/Tamrakar182",
    x: "https://x.com/tamrakar999",
    linkedin: "https://www.linkedin.com/in/manjul-tamrakar/",
  },
  {
    name: "Anuroj Baskota",
    photo: "/contributors/c3.jpg",
    position: "",
    github: "#",
    x: "#",
    linkedin: "https://www.linkedin.com/in/anuroj-baskota-57bb661b1/",
  },
  {
    name: "Ananda Chaudhary",
    photo: "/contributors/c5.jpg",
    position: "",
    github: "https://github.com/anandacdr",
    x: "https://x.com/anandacdr",
    linkedin: "https://www.linkedin.com/in/ananda-chaudhary",
  },
  {
    name: "Ashwini Subedi",
    photo: "/contributors/c2.jpg",
    position: "",
    github: "https://github.com/notashwinii",
    x: "#",
    linkedin: "https://www.linkedin.com/in/notashwinii/",
  },
  {
    name: "Saksham Humagain",
    photo: "/contributors/c4.jpg",
    position: "",
    github: "https://github.com/Saksham444444",
    x: "#",
    linkedin: "https://www.linkedin.com/in/saksham-humagain-260b02257/",
  },
  {
    name: "Supreme Bhandari",
    photo: "/contributors/c6.jpg",
    position: "",
    github: "https://github.com/supremex04",
    x: "#",
    linkedin: "https://www.linkedin.com/in/supreme-bhandari-49b47b231/",
  },
  {
    name: "Bikash Mishra",
    photo: "/contributors/c7.jpg",
    position: "",
    github: "https://github.com/bikashmishraa",
    x: "#",
    linkedin: "https://www.linkedin.com/in/bikash-mishra-07bb48226/",
  },
];

const ContributorsDetails = () => {
  return (
    <Carousel className="w-full mt-12">
      <CarouselContent className="flex">
        {contributors.map((contributor, index) => (
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5 py-1 ml-2 md:ml-12" key={index}>
            <Card className="flex flex-col gap-6 p-3 sm:p-4">
              <div className="aspect-square overflow-hidden rounded-lg w-62 h-62">
                <img
                  src={contributor.photo}
                  alt={contributor.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                <h4 className="text-base font-semibold sm:text-lg truncate">
                  {contributor.name}
                </h4>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <a
                    href={contributor.github}
                    className="hover:text-primary transition"
                  >
                    <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={contributor.x}
                    className="hover:text-primary transition"
                  >
                    <TwitterIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href={contributor.linkedin}
                    className="hover:text-primary transition"
                  >
                    <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ContributorsDetails;

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
