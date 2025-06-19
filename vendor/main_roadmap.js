export function renderDiagram(nodes, edges) {
    const svg = document.getElementById('roadmap');
  
    // Render nodes
    nodes.forEach(node => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      rect.setAttribute('x', node.x);
      rect.setAttribute('y', node.y);
      rect.setAttribute('width', node.width);
      rect.setAttribute('height', node.height);
      rect.style.fill = node.fill;
      rect.addEventListener('click', () => showModal(node.title, node.content));
      svg.appendChild(rect);
  
      // Tambahkan teks, styling, dll.
    });
  
    // Render edges
    edges.forEach(edge => {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', edge.path);
      path.style.stroke = '#2b78e4';
      svg.appendChild(path);
    });
  }
  
  function showModal(title, content) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `<h3>${title}</h3><p>${content}</p><button>Tutup</button>`;
    modal.style.display = 'block';
  }