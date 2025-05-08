import React, {use} from "react";
import TeamCard from "./TeamCard";
const teamsPromise = fetch("/teams.json").then((res) => res.json());
const Teams = () => {
  const teams = use(teamsPromise);
  return (
    <section className="pb-10  mb-10">
      
      <h1 className="text-center font-bold text-3xl">Meet Our Team</h1>
      <p className="text-lg text-base-200 mt-2 text-center">
        These people work on making our product best.
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {teams.map((team) => (
          <TeamCard team={team} key={team.id}></TeamCard>
        ))}
      </div>
    </section>
  );
};

export default Teams;
