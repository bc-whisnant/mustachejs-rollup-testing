let testing = () => {
  console.log('Testing bundling');
};

let sampleData = [
  {
    name: 'Testing 1',
    image: 'assets/images/headerimg.jpg',
  },
  {
    name: 'Testing 2',
    image: 'assets/images/headerimg.jpg',
  },
];

testing();

let renderHello = () => {
  var template = document.getElementById('template').innerHTML;
  var rendered = Mustache.render(template, { sampleData });
  document.getElementById('target').innerHTML = rendered;
};

window.onload = renderHello;

export { renderHello };
