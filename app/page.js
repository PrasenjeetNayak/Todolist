"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  let rendertask = <h2 className="text-center">No task Available</h2>;
  if (mainTask.length) {
    rendertask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex justify-between mb-5">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h5 className="text-lg font-medium">{t.desc}</h5>
          </div>
          <button onClick={() => {
             let copytask=[...mainTask]
             copytask.splice(i,1)
             setmainTask(copytask)
          }} className="bg-red-400 text-white rounded font-bold px-4 py-2" >Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white text-5xl p-5 font-bold text-center ">
        My todolist
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setmainTask([...mainTask, { title, desc }]);
          settitle("");
          setdesc("");
        }}
      >
        <input
          value={title}
          onChange={(e) => settitle(e.target.value)}
          type="text"
          className="border-zinc-800 border-2 m-8 px-4 py-2 text-2xl"
          placeholder="Enter task here"
        />
        <input
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
          type="text"
          className="border-zinc-800 border-2 m-8 px-4 py-2 text-2xl"
          placeholder="Enter description here"
        />
        <button className="bg-black px-4 py-3 text-white text-2xl font-bold rounded mx-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-200">
        <ul>{rendertask}</ul>
      </div>
    </>
  );
};

export default page;
