import { useState } from 'react';

const samplePolls = [
  {
    id: 1,
    question: 'Where should we have dinner on Day 1?',
    options: [
      { id: 'a', label: 'Italian Restaurant', votes: 5 },
      { id: 'b', label: 'Sushi Bar', votes: 3 },
      { id: 'c', label: 'Vegan Cafe', votes: 2 },
    ],
  },
  {
    id: 2,
    question: 'Which activity do you prefer for Day 2?',
    options: [
      { id: 'a', label: 'Hiking', votes: 4 },
      { id: 'b', label: 'Museum Visit', votes: 6 },
      { id: 'c', label: 'City Tour', votes: 1 },
    ],
  },
];

export default function Polls() {
  const [polls, setPolls] = useState(samplePolls);
  const [votedPolls, setVotedPolls] = useState({}); // keep track of polls user voted on

  function vote(pollId, optionId) {
    if (votedPolls[pollId]) return; // user can vote once per poll

    setPolls((prev) =>
      prev.map((poll) => {
        if (poll.id !== pollId) return poll;
        return {
          ...poll,
          options: poll.options.map((opt) =>
            opt.id === optionId ? { ...opt, votes: opt.votes + 1 } : opt
          ),
        };
      })
    );
    setVotedPolls((prev) => ({ ...prev, [pollId]: true }));
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Activity Polls</h2>
      {polls.map(({ id, question, options }) => (
        <div key={id} className="mb-6 bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-4">{question}</h3>
          <ul>
            {options.map(({ id: optId, label, votes }) => (
              <li
                key={optId}
                className={`p-2 mb-2 rounded cursor-pointer hover:bg-blue-100 ${
                  votedPolls[id] && 'opacity-60 cursor-not-allowed'
                }`}
                onClick={() => vote(id, optId)}
              >
                <span>{label}</span>{' '}
                <span className="float-right font-semibold">{votes} votes</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
