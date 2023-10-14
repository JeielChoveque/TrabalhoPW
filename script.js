// Dados dos resultados da eleição
const candidatos = ['Candidato 1', 'Candidato 2', 'Candidato 3'];
const votos = [2500, 1800, 1200];

// Configuração do gráfico
const ctx = document.getElementById('grafico').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: candidatos,
        datasets: [{
            label: 'Votos',
            data: votos,
            backgroundColor: ['#007BFF', '#FF5733', '#33FF57'],
            borderColor: 'rgba(0, 0, 0, 0.2)',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
