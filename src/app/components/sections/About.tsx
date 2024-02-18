import React from "react";

import Section from "./containers/Section";
import Container from "./containers/Container";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

const About: React.FC = () => {
  return (
    <Section id="about">
      <Container>
        <div className="text-center text-large">
          <h1>Six chapters across Texas and Oklahoma.</h1>
          <p className="text-foreground/60">One connected brotherhood.</p>
        </div>
        <div className="md:gap-8 gap-5 flex flex-col md:grid md:grid-cols-12 md:grid-rows-2 mt-14">
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Alpha Chapter</p>
                <h2 className="">UT Austin</h2>
              </div>
              <Image
                className="grayscale"
                width={64}
                alt="UT Austin Longhorns logo"
                src="/UTA-logo.png"
                radius="none"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Beta Chapter</p>
                <h2 className="">UT San Antonio</h2>
              </div>
              <Image
                className="grayscale"
                width={56}
                alt="UT Austin Longhorns logo"
                src="/UTSA-logo.png"
                radius="none"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Gamma Chapter</p>
                <h2 className="">Texas A&M University</h2>
              </div>
              <Image
                className="grayscale"
                width={36}
                alt="A&M logo"
                src="/TAMU-logo.png"
                radius="none"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Delta Chapter</p>
                <h2 className="">University of Oklahoma</h2>
              </div>
              <Image
                className="grayscale"
                width={32}
                alt="OU logo"
                src="/OU-logo.png"
                radius="none"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Epsilon Chapter</p>
                <h2 className="">Texas Tech University</h2>
              </div>
              <Image
                className="grayscale"
                width={36}
                alt="Texas Tech logo"
                src="/TTU-logo.png"
                radius="none"
              />
            </CardBody>
          </Card>
          <Card
            className="col-span-4 row-span-1 p-2 transition ease-in-out duration-300 shadow-none border-1 border-transparent hover:shadow-orange-glow hover:border-primary/40 group"
            isPressable
          >
            <CardBody className="flex flex-row items-center justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-tiny text-foreground/50 group-hover:text-primary">Zeta Chapter</p>
                <h2 className="">University of Houston</h2>
              </div>
              <Image
                className="grayscale"
                width={40}
                alt="University of Houston logo"
                src="/UH-logo.svg"
                radius="none"
              />
            </CardBody>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default About;
