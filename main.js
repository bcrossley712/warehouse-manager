//Array
let packages = [
  { heavy: true, priority: false, fragile: false, to: 'Mick', from: 'Mark', contents: 'Bowling Balls', lost: false },
  { heavy: false, priority: true, fragile: true, to: 'Mark', from: 'Mick', contents: 'Ping Pong Balls', lost: false },
  { heavy: true, priority: false, fragile: true, to: 'Mick', from: 'Jeremy', contents: 'Bocce Balls', lost: false },
  { heavy: false, priority: false, fragile: false, to: 'Jeremy', from: 'Mark', contents: 'Footballs', lost: false },
  { heavy: true, priority: true, fragile: true, to: 'Mark', from: 'Mick', contents: 'Polo Balls', lost: false },
  { heavy: false, priority: true, fragile: false, to: 'Mick', from: 'Jeremy', contents: 'Soccer Balls', lost: false },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', from: 'Mick', contents: 'Baseballs', lost: false },
  { fragile: true, priority: false, heavy: false, from: 'Mick', to: 'Mark', contents: 'Volleyballs', lost: false },
  { fragile: false, priority: true, heavy: true, from: 'Mark', to: 'Mick', contents: 'Kick Balls', lost: false },
  { fragile: true, priority: false, heavy: true, from: 'Mick', to: 'Jeremy', contents: 'Beach Balls', lost: false },
  { fragile: false, priority: false, heavy: false, from: 'Jeremy', to: 'Mark', contents: 'Rugby Balls', lost: false },
  { fragile: true, priority: true, heavy: true, from: 'Mark', to: 'Mick', contents: 'Wiffle Balls', lost: false },
  { fragile: false, priority: true, heavy: false, from: 'Mick', to: 'Jeremy', contents: 'Tennis Balls', lost: false },
  { fragile: true, priority: false, heavy: true, from: 'Jeremy', to: 'Mick', contents: 'Pool Balls', lost: false }
]
let current = []

//Functions
function draw() {
  let template = ``
  for (let i = 0; i < current.length; i++) {
    const package = current[i];
    template += `
    <div class="col-12 col-sm-4 col-md-2 text-center">
      <div class="m-1 my-3 card shadow" onclick="guess('${package.contents}')">
        <img class="img-fluid rounded-top p-2"
          src="https://tse1.mm.bing.net/th?id=OIP.LFzvEXP5MmwMTj_qjbt9jQHaHw&pid=Api&P=0&w=169&h=177" alt="package">
        <h5 class="fw-bold">Contents: ${package.contents}</h5>
      </div>
    </div>
      `
  }
  document.getElementById('package').innerHTML = template
}

function filter(search) {
  let lostPackage = packages.find(package => package.lost)
  current = current.filter(package => package[search] === lostPackage[search])
  draw()
}

function newSearch() {
  packages.forEach(package => package.lost = false)
  const randIndex = Math.floor(Math.random() * packages.length)
  packages[randIndex].lost = true
  current = packages
  draw()
}

function guess(contents) {
  let lostPackage = packages.find(package => package.lost)
  if (lostPackage.contents == contents) {
    alert("You found it!")
  } else (
    alert("Wrong!")
  )
}

newSearch()