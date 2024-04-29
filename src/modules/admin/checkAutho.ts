import { UserAutho } from "src/models/statusAutho";
export const checkAutho = () => {
  const coockies = document.cookie;

  const examAuthorized = (status: string) => {
    if (status !== UserAutho.yes) {
      window.location.pathname = "/admin/index.html";
    }
  };

  coockies.split(";").forEach((str) => {
    if (str.includes("userToken")) {
      examAuthorized(str.split("=")[1].trim());
    }
  });
};
