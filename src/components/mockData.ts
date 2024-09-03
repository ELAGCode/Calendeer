import { calendarCellType } from "./Calendar";

export const mockData: calendarCellType[] = [
  {
    id: 0,
    hasNote: false,
    hasSchedule: false,
    note: {
      text: "",
    },
    schedule: {
      date: "",
      details: "",
    },
    day: 28,
    month: 8,
    year: 2023,
  },
  {
    id: 1,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2022,
  },
  {
    id: 2,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2021,
  },
  {
    id: 3,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2020,
  },
  {
    id: 4,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2021,
  },
  {
    id: 5,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2026,
  },
  {
    id: 6,
    hasNote: true,
    hasSchedule: true,
    note: {
      text: "Hello, this is a note.",
    },
    schedule: {
      date: new Date().toDateString(),
      details: "N/A",
    },
    day: 25,
    month: 8,
    year: 2028,
  },
];
