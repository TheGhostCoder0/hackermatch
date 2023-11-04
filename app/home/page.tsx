"use client";
import { CreateTeamModal } from "@/components/CreateTeamModal";
import { useState } from "react";
import { DirectMessage } from "./components/DirectMessage";
import { FindTeammates } from "./components/FindTeammates";

enum State {
  FindTeammates,
  DirectMessage,
}

export default function findTeamates() {
  const [state, setState] = useState<State>(State.FindTeammates);
  const [showCreateTeamModal, setShowCreateTeamModal] = useState(false);

  return (
    <div
      className="px-10"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(150px, 25%) 1fr",
      }}
    >
      {/* sidebar */}
      <div className="flex flex-col p-2">
        <div>
          <button
            onClick={() => setState(State.FindTeammates)}
            className="text-xl bg-blue-500 text-white rounded-md hover:scale-110 transition duration-200 ease-in-out px-4 py-2"
          >
            Find Teammates
          </button>
        </div>

        <h1 className="text-xl font-bold mt-4 mb-2">Teams</h1>
        <div>
          <button
            onClick={() => setShowCreateTeamModal(true)}
            className="text-xl bg-blue-500 text-white rounded-md hover:scale-110 transition duration-200 ease-in-out px-4 py-2"
          >
            Create Team
          </button>
        </div>
        {showCreateTeamModal && (
          <CreateTeamModal
            title="Create Team"
            onClose={() => setShowCreateTeamModal(false)}
          />
        )}

        <h1 className="text-xl font-bold mt-4 mb-2">Direct Messages</h1>
        <div>You have no DMs :(</div>
      </div>

      {/* right content */}
      <div>
        {state == State.FindTeammates ? <FindTeammates /> : <DirectMessage />}
      </div>
    </div>
  );
}
