export function init() {

  let coll = document.getElementsByClassName(`ct-collapsible`);

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener(`click`, function () {
      this.classList.toggle(`ct-expand`);
      let content = this.nextElementSibling;
      if (content.style.maxHeight === `${content.children.length * 60}px`) {
        content.style.maxHeight = `0`;
      } else {
        content.style.maxHeight = `${content.children.length * 60}px`;
      }
    });
  }

}
