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
            <h1 className="text-7xl font-extrabold mt-8">Making Good Men Better</h1>
            <p className="text-lg mt-4 max-w-xl mx-auto">
              Gamma Beta National Fraternity is an Asian-interest brotherhood
              spanning six chapters across Texas and Oklahoma.
            </p>
          </div>
          <div className="mx-auto flex justify-center gap-4 mt-8">
            <Button variant="ghost" color='primary'>Get in Touch</Button>
            <Button variant="shadow" color="primary">Join Gamma Beta</Button>
          </div>
          <div className="h-96 bg-slate-900 mt-12 rounded-lg">
            {/* Replace this div with a visual */}
          </div>
      </Container>
    </Section>
  );
};

export default Hero;
