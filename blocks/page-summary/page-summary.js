export default function decorate(block) {
  const title = document.createElement('h2');
  title.innerText = 'On this page:';
  block.firstElementChild.prepend(title);
}
