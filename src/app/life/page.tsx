import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { about, baseURL, person } from "@/resources";

const life = {
  path: "/life",
  title: "Life",
  description: `Personal life and interests of ${person.name}`,
};

export async function generateMetadata() {
  return Meta.generate({
    title: life.title,
    description: life.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(life.title)}`,
    path: life.path,
  });
}

export default function Life() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={life.path}
        title={life.title}
        description={life.description}
        image={`/api/og/generate?title=${encodeURIComponent(life.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {life.title}
      </Heading>
      <Column fillWidth gap="xl" paddingX="24" paddingBottom="40">
        <Column fillWidth gap="12">
          <Heading as="h2" variant="heading-strong-l">
            Athletics
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            <p>I started playing basketball at 11 years old, and instantly fell in love with it. It was the main reason as to why I wanted to come to the US.
            In Brazil, I won 5 state championships and was named the #1 point guard in the state 3 times.
            At 16 years old, I was awarded a scolarship to Wisconsin Lutheran High School in Milwaukee, WI.
            There, I made the varsity team on the numbber 1 team in the state of Wisconsin.
            One of my teammates Kon II Knueppel is now a player for the Charlotte Hornets in the NBA, so I have to be a Hornets fan now!
            Since I went to high school in Milwaukee, my favorite team is the bucks, but beforehand, I was a Golden State Warriors fan. </p> 
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            <p>I started Varsity Track and Field my Senior year of hs. After basketball season, I wanted something to keep me busy and active.
              Turns out I was pretty good at it! I qualified for state in the 4x400m relay as the starter, and the 4x200m relay.
              I went on to run track in college for UW-Eau Claire as a long sprinter.
            </p>
          </Text>
        </Column>
        <Column fillWidth gap="12">
          <Heading as="h2" variant="heading-strong-l">
            Hobbies and Interests
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            I love playing basketball, coding, reading books, and spending time with friends and family. I am in my element when I am doing any outdoor activities, such as hiking, going to the beach, playing sports, or traveling to new places.
            I enjoy animes, I am currently catching up on One Piece.
            I am a fitness enthusiast and love going to the gym and staying active. As well as nutritiion, eating healthy and taking care of my body.
          </Text>
        </Column>
        <Column fillWidth gap="12">
          <Heading as="h2" variant="heading-strong-l">
            Photos
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            
          </Text>
        </Column>
      </Column>
    </Column>
  );
}
