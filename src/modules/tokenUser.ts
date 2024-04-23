import { UserAutho } from "src/models/statusAutho";

export const tokenUser = () => {
  const setCoockie = (dayLive: number, status: string) => {
    const date = new Date();
    const dateLiveCoockie = new Date(
      date.setTime(date.getTime() + dayLive * 24 * 60 * 60 * 1000),
    );
    const expires = dateLiveCoockie.toUTCString();

    document.cookie = `userToken=${status}; expires=${expires}; path=/;`;
  };

  const getCoockie = () => {
    const cookies = document.cookie.split(";");
    const codeCoin: number[] = [];

    cookies.forEach((stringCoockie) => {
      if (!stringCoockie.match(/userToken/g)) {
        codeCoin.push(0);
      } else {
        codeCoin.push(1);
      }
    });

    const sumCodeCoin = codeCoin.reduce((sum, num) => {
      return (sum += num);
    }, 0);

    if (sumCodeCoin === 0) {
      setCoockie(1, UserAutho.not);
    }
  };

  getCoockie();
};
