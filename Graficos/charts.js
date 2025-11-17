const labelsAtividades = ["P1", "P2", "AT1", "AT2"];

const materias = {
  "Engenharia de Software": [8.0, 7.5, 9.0, 8.5],
  "Desenvolvimento Web I": [7.0, 8.0, 7.5, 8.0],
  "Sistemas Operacionais e Redes de Computadores": [9.5, 9.0, 8.5, 9.0],
  "Design Digital": [6.5, 7.0, 6.0, 7.5],
  "Algoritmos e Lógica de Programação": [8.2, 8.7, 8.0, 8.4],
};

const avg = arr => arr.reduce((a,b)=>a+b,0) / arr.length;
const max = arr => Math.max(...arr);
const min = arr => Math.min(...arr);
function setStats(materia, prefixId){
  const v = materias[materia];
  document.getElementById(`avg${prefixId}`).textContent = avg(v).toFixed(1);
  document.getElementById(`max${prefixId}`).textContent = max(v).toFixed(1);
  document.getElementById(`min${prefixId}`).textContent = min(v).toFixed(1);
}

const cores = {
  base: "rgba(79,70,229,0.85)",
  fill: "rgba(79,70,229,0.15)",
  alt : "rgba(2,132,199,0.85)",
  altFill: "rgba(2,132,199,0.15)",
  pie: [
    "rgba(79,70,229,0.85)",
    "rgba(34,197,94,0.85)",
    "rgba(2,132,199,0.85)",
    "rgba(244,114,182,0.85)",
  ],
};


const axisOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: { legend: { position: "top" } },
  scales: {
    y: { beginAtZero: true, suggestedMax: 10, ticks: { stepSize: 1 } },
    x: { ticks: { autoSkip: false } }
  }
};

new Chart(document.getElementById("chartMatematica"), {
  type: "bar",
  data: {
    labels: labelsAtividades,
    datasets: [{
      label: "Engenharia de Software",
      data: materias["Engenharia de Software"],
      backgroundColor: cores.base
    }]
  },
  options: { ...axisOptions }
});
setStats("Engenharia de Software", "Matematica");


new Chart(document.getElementById("chartPortugues"), {
  type: "pie",
  data: {
    labels: labelsAtividades,
    datasets: [{
      label: "Desenvolvimento Web I",
      data: materias["Desenvolvimento Web I"],
      backgroundColor: cores.pie
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "right" } }
  }
});
setStats("Desenvolvimento Web I", "Portugues");


new Chart(document.getElementById("chartCiencias"), {
  type: "bar",
  data: {
    labels: labelsAtividades,
    datasets: [{
      label: "Sistemas Operacionais e Redes de Computadores",
      data: materias["Sistemas Operacionais e Redes de Computadores"],
      backgroundColor: cores.alt
    }]
  },
  options: { ...axisOptions, indexAxis: "y" }
});
setStats("Sistemas Operacionais e Redes de Computadores", "Ciencias");


new Chart(document.getElementById("chartHistoria"), {
  type: "line",
  data: {
    labels: labelsAtividades,
    datasets: [{
      label: "Design Digital",
      data: materias["Design Digital"],
      borderColor: cores.base,
      backgroundColor: cores.fill,
      tension: 0.35,
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  },
  options: { ...axisOptions }
});
setStats("Design Digital", "Historia");


new Chart(document.getElementById("chartGeografia"), {
  type: "line",
  data: {
    labels: labelsAtividades,
    datasets: [{
      label: "Algoritmos e Lógica de Programação",
      data: materias["Algoritmos e Lógica de Programação"],
      borderColor: cores.alt,
      backgroundColor: cores.altFill,
      tension: 0.35,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6
    }]
  },
  options: { ...axisOptions }
});
setStats("Algoritmos e Lógica de Programação", "Geografia");
