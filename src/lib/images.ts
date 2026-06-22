// Central image map so any component can resolve a string key to an imported URL.
import face1 from "@/assets/face-1.jpg";
import face2 from "@/assets/face-2.jpg";
import face3 from "@/assets/face-3.jpg";
import face4 from "@/assets/face-4.jpg";

import alum1 from "@/assets/alum-1.jpg";
import alum2 from "@/assets/alum-2.jpg";
import alum3 from "@/assets/alum-3.jpg";
import alum4 from "@/assets/alum-4.jpg";

import facLibrary from "@/assets/fac-library.jpg";
import facComputer from "@/assets/fac-computer.jpg";
import facResearch from "@/assets/fac-research.jpg";
import facAuditorium from "@/assets/fac-auditorium.jpg";
import facCafeteria from "@/assets/fac-cafeteria.jpg";
import facSports from "@/assets/fac-sports.jpg";
import facMedical from "@/assets/fac-medical.jpg";
import facTransport from "@/assets/fac-transport.jpg";

import clubComputer from "@/assets/club-computer.jpg";
import clubBusiness from "@/assets/club-business.jpg";
import clubDebate from "@/assets/club-debate.jpg";
import clubRobotics from "@/assets/club-robotics.jpg";
import clubDrama from "@/assets/club-drama.jpg";
import clubPhoto from "@/assets/club-photo.jpg";
import clubSports from "@/assets/club-sports.jpg";
import clubSocial from "@/assets/club-social.jpg";

import ach1 from "@/assets/ach-1.jpg";
import ach2 from "@/assets/ach-2.jpg";
import ach3 from "@/assets/ach-3.jpg";
import ach4 from "@/assets/ach-4.jpg";

import calendarBg from "@/assets/calendar-bg.jpg";

import res1 from "@/assets/res-1.jpg";
import res2 from "@/assets/res-2.jpg";
import res3 from "@/assets/res-3.jpg";

import hero2 from "@/assets/hero-2.png.asset.json";
import hero3 from "@/assets/hero-3.png.asset.json";
import hero4 from "@/assets/hero-4.png.asset.json";
import hero5 from "@/assets/hero-5.png.asset.json";
import hero6 from "@/assets/hero-6.png.asset.json";
import hero7 from "@/assets/hero-7.png.asset.json";

export const IMG: Record<string, string> = {
  "face-1": face1,
  "face-2": face2,
  "face-3": face3,
  "face-4": face4,
  "alum-1": alum1,
  "alum-2": alum2,
  "alum-3": alum3,
  "alum-4": alum4,
  "fac-library": facLibrary,
  "fac-computer": facComputer,
  "fac-research": facResearch,
  "fac-auditorium": facAuditorium,
  "fac-cafeteria": facCafeteria,
  "fac-sports": facSports,
  "fac-medical": facMedical,
  "fac-transport": facTransport,
  "club-computer": clubComputer,
  "club-business": clubBusiness,
  "club-debate": clubDebate,
  "club-robotics": clubRobotics,
  "club-drama": clubDrama,
  "club-photo": clubPhoto,
  "club-sports": clubSports,
  "club-social": clubSocial,
  "ach-1": ach1,
  "ach-2": ach2,
  "ach-3": ach3,
  "ach-4": ach4,
  "calendar-bg": calendarBg,
  "res-1": res1,
  "res-2": res2,
  "res-3": res3,
  "hero-2": hero2.url,
  "hero-3": hero3.url,
  "hero-4": hero4.url,
  "hero-5": hero5.url,
  "hero-6": hero6.url,
  "hero-7": hero7.url,
};

export function img(key: string): string {
  return IMG[key] ?? "";
}

export const GALLERY_KEYS = ["hero-2", "hero-3", "hero-4", "hero-5", "hero-6", "hero-7"];
