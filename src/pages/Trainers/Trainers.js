import React from "react";
import {
  TrainersContainer,
  TrainersGrid,
  TrainerCard,
  TrainerPhoto,
  TrainerName,
  TrainerSpecialty,
  TrainerBio,
} from "./Trainers.styles";

const trainers = [
  {
    name: "David Lee",
    specialty: "Strength Training",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    bio: "David specializes in strength training and muscle building to help clients gain power and endurance.",
  },
  {
    name: "Anna Kim",
    specialty: "Yoga & Flexibility",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    bio: "Anna guides members through yoga and flexibility programs to improve balance and relaxation.",
  },
  {
    name: "Mark Thompson",
    specialty: "Cardio & HIIT",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Mark is an expert in cardio and high-intensity interval training to maximize fat burning and stamina.",
  },
  
];

const Trainers = () => {
  return (
    <TrainersContainer>
      <h1>Meet Our Trainers</h1>
      <TrainersGrid aria-label="Trainer profiles">
        {trainers.map(({ name, specialty, photo, bio }) => (
          <TrainerCard key={name} tabIndex={0}>
            <TrainerPhoto src={photo} alt={`Photo of ${name}`} loading="lazy" />
            <TrainerName>{name}</TrainerName>
            <TrainerSpecialty>{specialty}</TrainerSpecialty>
            <TrainerBio>{bio}</TrainerBio>
          </TrainerCard>
        ))}
      </TrainersGrid>
    </TrainersContainer>
  );
};

export default Trainers;
