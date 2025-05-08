import { Card, CardV2 } from "../Components/UI/Card";
import Carousel from "../Components/UI/carousel";
export default function Webpages() {
  const slides = [
    {
      title: "Slide 1",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    {
      title: "Slide 2",
      image:
        "https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg",
    },
    
  ];
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card
        title="Card 1"
        image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
        description="This is a description"
        link="https://www.google.com"
        highlight={true}
      />

      <div className="flex gap-4 items-center justify-center mt-10">
        <CardV2
          title="Card 2"
          image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
          description="This is a description"
          link="https://www.google.com"
        />
        <CardV2
          title="Card 2"
          image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
          description="This is a description"
          link="https://www.google.com"
        />
        <CardV2
          title="Card 2"
          image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
          description="This is a description"
          link="https://www.google.com"
        />
        <CardV2
          title="Card 2"
          image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
          description="This is a description"
          link="https://www.google.com"
        />
        <CardV2
          title="Card 2"
          image="https://i.pinimg.com/736x/e7/47/33/e747333492631fea6674188e73952731.jpg"
          description="This is a description"
          link="https://www.google.com"
        />
      </div>
      <Carousel slides={slides} />
    </div>
  );
}
