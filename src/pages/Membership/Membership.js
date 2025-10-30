import React from "react";
import {
  MembershipContainer,
  PlansGrid,
  PlanCard,
  PlanName,
  PlanPrice,
  FeaturesList,
  FeatureItem,
  SignupButton,
} from "./Membership.styles";

const plans = [
  {
    name: "Basic",
    price: "$29/mo",
    features: [
      "Access to gym equipment",
      "Free locker access",
      "1 group class per week",
      "No personal training",
    ],
  },
  {
    name: "Standard",
    price: "$49/mo",
    features: [
      "Access to gym equipment",
      "Unlimited group classes",
      "2 personal training sessions",
      "Free nutrition consultation",
    ],
  },
  {
    name: "Premium",
    price: "$79/mo",
    features: [
      "All Standard features",
      "Unlimited personal training",
      "Access to sauna & spa",
      "Priority support",
    ],
  },
];

const Membership = () => {
  const handleSignup = (planName) => {
    alert(`Thank you for choosing the ${planName} plan! Signup functionality coming soon.`);
  };

  return (
    <MembershipContainer>
      <h1>Membership Plans</h1>
      <PlansGrid aria-label="Membership plans">
        {plans.map(({ name, price, features }) => (
          <PlanCard key={name} tabIndex={0} aria-label={`${name} membership plan`}>
            <PlanName>{name}</PlanName>
            <PlanPrice>{price}</PlanPrice>
            <FeaturesList>
              {features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </FeaturesList>
            <SignupButton
              type="button"
              onClick={() => handleSignup(name)}
              aria-label={`Sign up for ${name} plan`}
            >
              Sign Up
            </SignupButton>
          </PlanCard>
        ))}
      </PlansGrid>
    </MembershipContainer>
  );
};

export default Membership;
