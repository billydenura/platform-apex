import { atom } from "recoil";
import { grupData } from "../types";
import logo1 from "../assets/instagram.svg";

export const GrupAtom = atom<grupData[]>({
  key: "data",
  default: [
    {
      title: "Kelompok 1",
      srcLogo: logo1,
      linkGrup: "/kelompok-contoh",
    },
    {
      title: "kel2",
      srcLogo: "wkwkwkwk",
      linkGrup: "/products/kel2",
    },
  ],
});
