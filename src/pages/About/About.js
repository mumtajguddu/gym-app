import React from "react";
import {
  AboutContainer,
  Section,
  SectionTitle,
  SectionContent,
  TeamGrid,
  TeamMember,
  MemberPhoto,
  MemberName,
  MemberRole,
  MemberBio,
} from "./About.styles";

const team = [
  {
    name: "Jessica Smith",
    role: "Head Trainer",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    bio: "Jessica is passionate about helping clients achieve their fitness goals with personalized training plans.",
  },
  {
    name: "Michael Johnson",
    role: "Nutritionist",
    photo:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    bio: "Michael provides expert nutrition advice tailored to individual needs and lifestyles.",
  },
  {
    name: "Emily Davis",
    role: "Yoga Instructor",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    bio: "Emily specializes in yoga and mindfulness to help members find balance in body and mind.",
  },
];

const About = () => {
  return (
    <AboutContainer>
      <Section aria-labelledby="history-title">
        <SectionTitle id="history-title">Our History</SectionTitle>
        <SectionContent>
          <p>
            Founded in 2010, our gym has grown to become a leading fitness center
            in the community. We are committed to providing exceptional service
            and facilities to support your health and wellness journey.
          </p>
        </SectionContent>
      </Section>

      <Section aria-labelledby="mission-title">
        <SectionTitle id="mission-title">Our Mission</SectionTitle>
        <SectionContent>
          <p>
            To inspire and empower individuals to live healthier, happier lives
            through fitness, education, and community engagement.
          </p>
        </SectionContent>
      </Section>

      <Section aria-labelledby="team-title">
        <SectionTitle id="team-title">Meet Our Team</SectionTitle>
        <TeamGrid>
          {team.map(({ name, role, photo, bio }) => (
            <TeamMember key={name}>
              <MemberPhoto src={photo} alt={name} loading="lazy" />
              <MemberName>{name}</MemberName>
              <MemberRole>{role}</MemberRole>
              <MemberBio>{bio}</MemberBio>
            </TeamMember>
          ))}
        </TeamGrid>
      </Section>
    </AboutContainer>
  );
};

export default About;
