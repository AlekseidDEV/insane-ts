export const menuFunc = (openStyle: string, closeStyle: string) => {
    const popupWindow: HTMLDivElement | null =document.querySelector(".popup-menu");
    const popupMenu: HTMLDivElement | null =document.querySelector(".popup-dialog-menu");
    const linkMenu: Element | null = document.querySelector(".menu__icon");
  
    const openMenu = (e: Event) => {
      if (e.target === linkMenu) {
        popupWindow!.style.visibility = "visible";
        popupMenu!.style.transform = openStyle;
      } else if (
        (e.target as HTMLElement).closest(".close-menu") ||
        e.target === popupWindow
      ) {
        popupWindow!.style.visibility = "hidden";
        popupMenu!.style.transform = closeStyle;
      } else if((e.target as HTMLElement).matches(".menu-link")){
          popupWindow!.style.visibility = "hidden";
          popupMenu!.style.transform = closeStyle;
          // smoothScroll()
      }
    };
  
    linkMenu?.addEventListener("click", openMenu);
    popupWindow?.addEventListener("click", openMenu);
  };
  