/*
import Chart from 'chart.js/auto';

(async function() {
    new Chart(document.getElementById('chart'), {
        type: doughnut,
        data: {
            labels: ['Python', 'Swift', 'HTML/CSS/JavaScript', 'C#', 'Java', 'Miscellaneous'],
            datasets: [{
                label: 'Language Distribution',
                data: [30, 15, 20, 5, 25, 5],
                backgroundColor: ['#346e9e', '#fe502d', '#fed839', '#39008f', '#4f7896', '#6fbf73'],
                hoverOffset: 4
            }]
        }
    });
})();
*/

/*
import Chart from 'chart.js/auto'

(async function() {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    new Chart(
        document.getElementById('acquisitions'),
        {
        type: 'bar',
        data: {
            labels: data.map(row => row.year),
            datasets: [
            {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
            }
            ]
        }
        }
    );
})();

*/

const rating = document.getElementsByClassName('rating')[0];
const block = document.getElementsByClassName('block');

for (var i = 1; i < 100; i++) {
    rating.innerHTML += "<div class='block'></div>";
    block[i].style.transform = "rotate("+ 3.6 * i +"deg)";
    block[i].style.animationDelay = `${i/40}s`;
}

const counter = document.querySelector('.counter');
counter.innerText = 0;

const target = +counter.getAttribute('data-target');

const NumberCounter= () => {
    const value = +counter.innerText;
    if (value < target){
        counter.innerText = Math.ceil(value + 1);
        setTimeout(() => {
            NumberCounter()
        }, 20)
    }
}

NumberCounter()