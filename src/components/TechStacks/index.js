import React from "react";
import TechCard from "./TechCard";
import { Typography } from "@material-ui/core";

function Index({ stacks, techs }) {
  return (
    <div>
      <div>
        <Typography variant="h4">Tech Stacks</Typography>
        <Typography>
          These are a few examples of the technologies I use to build web
          applications
        </Typography>
      </div>
      {stacks.map((stack) => {
        return (
          <div key={stack.name}>
            <Typography variant="h5">{stack.name}</Typography>
            <p>{stack.description}</p>

            {stack.tech.map((eachTechInStack) => {
              const id = eachTechInStack.id;

              const tech = techs.find((item) => item.id === id);

              return <TechCard info={tech} key={eachTechInStack.id} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Index;
