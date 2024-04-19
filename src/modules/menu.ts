import { Div, Elem, Link } from "src/models/aliases";
import { smoothScroll } from "./smoothScroll";

export const menuFunc = (openStyle: string, closeStyle: string) => {
    const popupWindow: Div | null =document.querySelector(".popup-menu");
    const popupMenu: Div | null =document.querySelector(".popup-dialog-menu");
    const linkMenu: Elem | null = document.querySelector(".menu__icon");
  
    const openMenu = (e: Event) => {
    e.preventDefault()
    
      if (e.target === linkMenu) {
        popupWindow!.style.visibility = "visible";
        popupMenu!.style.transform = openStyle;
      } else if (
        (e.target as Elem).closest(".close-menu") ||
        e.target === popupWindow
      ) {
        popupWindow!.style.visibility = "hidden";
        popupMenu!.style.transform = closeStyle;
      } else if((e.target as Elem).matches(".menu-link")){
          popupWindow!.style.visibility = "hidden";
          popupMenu!.style.transform = closeStyle;
          smoothScroll((e.target as Link).hash)
      }
    };
  
    linkMenu?.addEventListener("click", openMenu);
    popupWindow?.addEventListener("click", openMenu);
  };
  