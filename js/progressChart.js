const pieChart = new Chart(document.getElementById('experiencePieChart'), {
    type: 'doughnut',
    data: {
        labels: ['HTML/CSS/Javascript', 'Python', 'Java', 'C#', 'Swift'],
        color: '#ffffff',
        datasets: [
            {
                label: 'Percentage: ',
                backgroundColor: ['#f9da53', "#3f76a5", '#f0931b', '#a073da', '#ff3828'],
                data: [22, 34, 20, 9, 15]
            }
        ]
    },
    plugins: [ChartDataLabels],
    options: {
        plugins: {
            legend: {
                onClick: null,
                display: true,
                position: 'top',
                align: 'center',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14
                    }
                }
            },
            datalabels: {
                formatter: function(value, context) {
                    return value + "%";
                },
                color: '#ffffff',
                font: {
                    size: 20
                }
            }
        },
        layout: {
            padding: 10
        },
        responsive: true,
        maintainAspectRation: true,
        aspectRatio: 1
    }
});

const updateChart = () => {
    pieChart.update();
}