"use client";

import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Workout } from "../types/workout";

type FitLogContextType = {
  plan: Workout[];
  saved: Workout[];
  doneIds: number[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markAsDone: (id: number) => void;
};

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export function FitLogProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [doneIds, setDoneIds] = useState<number[]>([]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      toast.info("Already in today's plan");
      return;
    }
    setPlan((current) => [...current, workout]);
    toast.success("Added to today's plan");
  };

  const saveForLater = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.info("Already saved");
      return;
    }
    setSaved((current) => [...current, workout]);
    toast.success("Saved for later");
  };

  const removeFromPlan = (id: number) => {
    setPlan((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from today's plan");
  };

  const removeFromSaved = (id: number) => {
    setSaved((current) => current.filter((item) => item.id !== id));
    toast.success("Removed from saved");
  };

  const markAsDone = (id: number) => {
    setDoneIds((current) => (current.includes(id) ? current : [...current, id]));
    toast.success("Workout marked as done");
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        doneIds,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markAsDone,
      }}
    >
      {children}
      <ToastContainer
        position="bottom-right"
        autoClose={2200}
        hideProgressBar
        theme="dark"
      />
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);
  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }
  return context;
}
