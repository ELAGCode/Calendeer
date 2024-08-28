import { calendarCellType } from "./Calendar";

export const mockData: calendarCellType[] = [
  {
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
