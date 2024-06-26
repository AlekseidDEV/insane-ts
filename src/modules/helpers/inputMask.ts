import { Input } from "src/models/aliases";

export function maskPhone(selector: string, masked = "+7 (___) ___-__-__") {
  const elems = document.querySelectorAll(selector);

  function mask(event: Event) {
    const template = masked,
      def = template.replace(/\D/g, ""),
      val = (event.target as Input).value.replace(/\D/g, "");
    let i = 0,
      newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
    i = newValue.indexOf("_");
    if (i !== -1) {
      newValue = newValue.slice(0, i);
    }
    let reg = template
      .slice(0, (event.target as Input).value.length)
      .replace(/_+/g, function (a) {
        return "\\d{1," + a.length + "}";
      })
      .replace(/[+()]/g, "\\$&");
    let numReg = new RegExp("^" + reg + "$");
    if (
      !numReg.test((event.target as Input).value) ||
      (event.target as Input).value.length < 5
    ) {
      (event.target as Input).value = newValue;
    }
    if (event.type === "blur" && (event.target as Input).value.length < 5) {
      (event.target as Input).value = "";
    }
    if (event.type === "mouseup") {
      (event.target as Input).setSelectionRange(4, 4);
    }
  }

  elems.forEach((elem) => {
    elem.addEventListener("input", mask);
    elem.addEventListener("focus", mask);
    elem.addEventListener("blur", mask);
    elem.addEventListener("mouseup", mask);
  });
}
