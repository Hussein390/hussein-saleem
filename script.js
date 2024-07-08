// Start Landing Section
const Div = document.createElement('div');
const mainDiv = document.getElementById('isOpen');

Div.classList.add('flex', 'flex-col', 'gap-y-3', 'mt-5', 'pl-1');

const menuItems = [
  {
    text: 'The WPPOOL Index',
    redirect: '#index'
  },
  {
    text: 'All Companies',
    redirect: '#companies'
  },
  {
    text: 'Potential Future Listings',
    redirect: '#potential'
  },
  {
    text: 'State of USA',
    redirect: '#usa'
  },
  {
    text: 'Stories & Ideas',
    redirect: '#stories'
  },
  {
    text: 'About WPPOOL',
    redirect: '#about'
  },
  {
    text: 'WPPOOL Portfolio Companies',
    redirect: '#portfolio'
  },
  {
    text: 'Visit WPPOOL',
    redirect: 'https://wppool.dev/'
  },
];

menuItems.forEach(item => {
  const Button = document.createElement('button');
  Button.textContent = item.text;
  Button.className = 'hover:text-slate-400 text-black text-left';
  Button.addEventListener('click', () => {
    window.location.href = item.redirect;
    mainDiv.classList.add('-right-[320px]')
    mainDiv.classList.remove('right-[10px]')
  });
  Div.appendChild(Button);
});
Div.children[Div.children.length - 1].classList.add('mt-3', 'text-blue-500');


// Hide & Show the mnue
mainDiv.appendChild(Div);
document.getElementById('open').addEventListener('click', e => {
  mainDiv.classList.remove('-right-[320px]')
  mainDiv.classList.add('right-[10px]')
})
document.getElementById('close').addEventListener('click', e => {
  mainDiv.classList.add('-right-[320px]')
  mainDiv.classList.remove('right-[10px]')
})

// Style the Header When hit a new section
const firstSection = document.querySelector('section').scrollHeight;
const header = document.querySelector('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > lastScroll) {
    header.style.top = '-110px'
  } else {
    header.style.top = '5px'
  }
  if (window.scrollY > firstSection) {
    header.classList.add('bg-[#F3F3F3]', 'p-3', 'rounded-md');
    header.querySelectorAll('div, div *').forEach(item => {
      item.classList.add('text');
    })
    header.querySelector('div a').classList.add('border-blue-500')
    document.querySelector('#border-black').classList.add('border-blue-500')
  }
  else {
    header.querySelector('div a').classList.remove('border-blue-500')
    document.querySelector('#border-black').classList.remove('border-blue-500')
    header.classList.remove('bg-[#F3F3F3]', 'p-3', 'rounded-md');
    header.querySelectorAll('div, div *').forEach(item => {
      item.classList.remove('text');
    })
  }
  lastScroll = scroll
})


// End Landing Section

const sectorBtn = document.querySelector('#tors');
const div = document.querySelector('#smoth')
const buttons = document.querySelectorAll('#links div')
const ipoBtn = document.getElementById('ipoBtn')
const ipoOpen = document.getElementById('ipoOpen')

let isopen = false
function openDrop(id, btn) {
  btn.addEventListener('click', () => {
    isopen = !isopen
    id.style.gridTemplateRows = isopen ? '1fr' : ' 0fr';
    id.firstElementChild.style.display = isopen ? 'flex' : 'none';
  })
}
openDrop(div, sectorBtn)
openDrop(ipoOpen, ipoBtn)

ipoOpen.querySelectorAll('div button').forEach(item => {
  item.addEventListener('click', () => {
    ipoOpen.firstElementChild.style.display = 'none'
  })
})
div.querySelectorAll('div button').forEach(item => {
  item.addEventListener('click', () => {
    div.firstElementChild.style.display = 'none'
  })
})

buttons.forEach(ele => {
  ele.addEventListener('click', () => {
    buttons.forEach(e => {
      e.classList.remove('bg-blue', 'text-white')
      e.firstElementChild.classList.remove('text-white')
      e.firstElementChild.classList.add('text-grey-400')
      e.lastElementChild.classList.remove('text-white')
      e.lastElementChild.innerHTML = '+'
    })
    ele.classList.add('bg-blue', 'text-white')
    ele.firstElementChild.classList.add('text-white')
    ele.lastElementChild.innerHTML = '-'
  })
})

// Make the Charts
let myChart;
let jsonData
const ctx = document.getElementById('myChart');

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Wppool : 34234',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderWidth: 1,
      titleMarginBottom: 22
    },
    {
      label: 'Google 2342',
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderWidth: 1,
      titleMarginBottom: 22
    },
    {
      label: 'Apple 23423',
      data: [18, 12, 20, 29, 76, 37, 100],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderWidth: 1,
      titleMarginBottom: 8,
      labelTextColor: '#fff'
    }
  ]
};


createChart(data, 'line')


function setChartType(type) {
  myChart.destroy();
  createChart(data, type)
}
function createChart(data, type) {
  myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: {
      maitainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            labelColor: function (context) {
              return {
                padding: 10,
              };
            },
            // labelTextColor: function (context) {
            //   return '#fff';
            // }
          }
        },
        colors: {
          forceOverride: true
        }
      }
    }
  });
}
// End The Wppool Index Section

// Start Search Companies
const names = document.querySelectorAll('#Company')
document.getElementById('searchInput').addEventListener('input', e => {
  const value = e.target.value.toLowerCase();

  names.forEach(item => {
    const isVisble = item.textContent.toLowerCase().includes(value)
    item.parentElement.classList.toggle('hidden', !isVisble)
  })
})


// Start State of USA Section
const stateOfUSA = document.getElementById('state')
const theYear = document.querySelector('#year')
const years = document.querySelector('#years')

openDrop(theYear, stateOfUSA)

function selectYear(year) {
  yearText.textContent = year;
  isopen = false
  theYear.style.gridTemplateRows = isopen ? '1fr' : ' 0fr';
  years.style.display = isopen ? 'flex' : 'none';
}

// Image Slider


const btns = document.querySelectorAll('#buttons button');
function Slider() {
  const imagesContainer = document.querySelector('#images'); // Parent container of images
  const images = document.querySelectorAll('#images img');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = btn.id === 'next' ? 1 : -1;
      const scroll = images[0].clientWidth * direction; // Use the width of one image
      imagesContainer.scrollBy({ left: scroll, behavior: 'smooth' });
    });
  });
}

window.addEventListener('load', Slider);



// Up & Down Scroll Button
const bottom = document.querySelector('#bottom').scrollHeight;
const sections = document.querySelectorAll('section');

document.getElementById('up-down').addEventListener('click', () => {
  if (window.scrollY >= bottom) {
    document.querySelector('#up-down i').classList.add('rotate-[180deg]')
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    document.querySelector('#up-down i').classList.remove('rotate-[180deg]')
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }
});
