import getRandomColor from './lib/getRandomColor';

class LinesBuilder {
  constructor(data, root) {
    this.data = data;
    this.root = root;
  }

  init() {
    this.setBaseParams();
    this.createLines();
  }

  setBaseParams() {
    this.root.style.height = '100vh';

    this.lineHeight = window.innerHeight / this.data.length;
  }

  createLineNode(line, index) {
    const lineNode = document.createElement('div');

    lineNode.id = `line-${index}`;
    lineNode.style.height = `${this.lineHeight}px`;
    lineNode.style.background = line.background;
    lineNode.style.display = 'flex';

    if (line.elements.length > 0) {
      line.elements.forEach(element => {
        const el = document.createElement('div');

        el.style.height = '100%';
        el.style.width = `${element.width}%`;
        el.style.background = element.background;

        lineNode.appendChild(el);
      });
    }

    if (line.updateTime > 0) {
      setInterval(() => this.updateLine(lineNode), line.updateTime);
    }

    return lineNode;
  }

  updateLine(lineNode) {
    const lineColor = getRandomColor();
    const lineEl = document.getElementById(lineNode.id);
    const lineChildren = Array.from(lineEl.children);

    lineChildren.forEach(el => {
      el.style.background = getRandomColor();
    });

    lineEl.style.background = lineColor;
  }

  createLines() {
    this.data.forEach((line, index) => {
      const lineNode = this.createLineNode(line, index);

      this.root.appendChild(lineNode);
    });
  }
}

export default LinesBuilder;
