import { Form, Input } from "src/models/aliases";
import { UserData } from "src/models/userInt";
import { UserAutho } from "src/models/statusAutho";

export const autorized = () => {
  const form: Form | null = document.querySelector("form");
  const nameInput: Input | null = form!.querySelector("#name");
  const passInput: Input | null = form!.querySelector("#pass");
  const spanErrorName = nameInput!.nextElementSibling;
  const spanErrorPass = passInput!.nextElementSibling;

  const passwordValid = (inputPass: string, dataPass: string) => {
    const date = new Date();
    const dateLiveCoockie = new Date(
      date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000),
    );
    const expires = dateLiveCoockie.toUTCString();

    if (inputPass !== dataPass) {
      (spanErrorPass as HTMLElement).style.display = "flex";
    } else {
      (spanErrorPass as HTMLElement).style.display = "none";
      document.cookie = `userToken=${UserAutho.yes}; expires=${expires}; path=/;`;
      window.location.pathname = "admin/table.html";
    }
  };

  const getDataUser = (login: string) => {
    return fetch(`http://localhost:1808/user?login=${login}`)
      .then((res) => res.json())
      .catch((error) => {
        console.error(`ошибка ${error}`);
      });
  };

  form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    if (nameInput!.value !== "" && passInput!.value !== "") {
      getDataUser(nameInput!.value).then((data: UserData[]) => {
        if (data.length === 0) {
          (spanErrorName as HTMLElement).style.display = "flex";
        } else {
          (spanErrorName as HTMLElement).style.display = "none";
          passwordValid(passInput!.value, data[0].pass);
        }
      });
    } else {
      alert("заполните поля");
    }
  });
};
