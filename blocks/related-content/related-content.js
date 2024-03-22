export default function decorate(block) {
    const title = document.createElement('p');
    title.innerText = 'Related Content';
    title.className = 'title';
    block.firstElementChild.prepend(title);
    const links = block.querySelectorAll('a');
    links.forEach(i => {
        i.classList.remove('button');
    });
  }
  