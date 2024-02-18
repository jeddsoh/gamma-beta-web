import React from "react";

import Section from "./containers/Section";
import Container from "./containers/Container";

import { Button, Chip } from "@nextui-org/react";

const Hero: React.FC = () => {
  return (
    <Section id="hero">
      <Container>
          <div className="text-center">
            <Button variant="flat" radius="full" size="sm">Check out our latest update!</Button>
            <h1 className="text-7xl font-extrabold mt-8">Making <em>good</em> men <em>better</em>.</h1>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Gamma Beta National Fraternity is an Asian-interest brotherhood
              committed to personal, professional, and academic growth.
            </p>
          </div>
          <div className="mx-auto flex justify-center gap-4 mt-8">
            <Button variant="shadow" color="primary" size="lg">Join Gamma Beta</Button>
          </div>
          <div className="h-96 bg-slate-900 mt-12 rounded-lg">
            {/* Replace this div with a visual */}
          </div>
      </Container>
    </Section>
  );
};

export default Hero;
