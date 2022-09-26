
import FinallyRendered from '../images/FinallyRendered.png'
import piglatin from '../images/piglatin.png'
import rubygame from '../images/rubygame.png'
import grubber from '../images/grubber.png'
import pokedex from '../images/pokedex.png'

const svg = {
  javascript : <i className="devicon-javascript-plain colored"></i>,
  html : <i className="devicon-html5-plain colored"></i>,
  css : <i className="devicon-css3-plain colored"></i>,
  tailwind :<i className="devicon-tailwindcss-plain colored"></i>,
  react : <i className="devicon-react-original colored"></i>,
  ruby : <i className="devicon-ruby-plain colored"></i>,
  postgresql : <i className="devicon-postgresql-plain colored"></i>,
  angular : <i className="devicon-angularjs-plain colored"></i>,
  mongodb : <i className="devicon-mongodb-plain colored"></i>,
  python : <i className="devicon-python-plain colored"></i>,
  vscode : <i className="devicon-vscode-plain colored"></i>,
  unity : <i className="devicon-unity-original colored"></i>,
  photoshop : <i className="devicon-photoshop-plain colored"></i>,
  blender : <i className="devicon-blender-original colored"></i>,
  bootstrap : <i className="devicon-bootstrap-plain colored"></i>, 
  rails : <i className="devicon-rails-plain colored"></i>,

}   


export const ProjectData = [
{
  title: 'Portfolio',
  image: `${FinallyRendered}`,
  languages: [svg.javascript, svg.html, svg.css, svg.blender, svg.react,],
  github: 'https://github.com/SOMarrah/Portfolio',
  description: 'My current portfolio created in a React App. Using 3d Modeling software Blender I created custom objects to import into a React application. Using the React Three Fiber library I was able to render those into a fully interactable 3d environment.',
  liveLink: '',
},
{
  title: 'PokeDex',
  image: `${pokedex}`,
  languages: [svg.html, svg.css, svg.javascript, svg.react, svg.tailwind],
  github: 'https://github.com/SOMarrah/Portfolio',
  description: 'A PokeDex using the PokeApi. Pulling over 800 pokemon and rendering them on the screen. Using tailwind for the styling. I was able to dynamically render colors based on the Pokemon typing and stats. The searchbar allows the user to search by name or by type.',
  liveLink: '',
},
{
  title: 'Grubber',
  image: `${grubber}`,
  languages: [ svg.html, svg.css, svg.javascript, svg.react, svg.rails, svg.bootstrap, svg.postgresql],
  github: 'https://github.com/ChompyStackers/Grubber',
  description: 'A monolithic full stack application using React in Rails. Using Api endpoints in the React application to connect to the Rails application we were able to fetch data inside of the PostgreSQL server hosted on heroku. This application utilized Yelp and Ip Apis - IpApi to gather the user location, and Yelp to then provide a list of restaurants nearest to the user based on their search. You can add your favorite restaurants to your profile and then randomize a selection. This was a capstone project working with 3 others for LEARN Academy.',
  liveLink: 'https://grubberapp.herokuapp.com/',
},
{
  title: 'Swineslator',
  image: `${piglatin}`,
  languages: [svg.html, svg.css, svg.javascript, svg.react],
  github: 'https://github.com/learn-academy-2022-charlie/pig-latin-swineslator',
  description: 'This was a pair programming project completed at LEARN Academy. We created a pig latin translator using regex and state inside of a React application.',
  liveLink: 'https://codesandbox.io/s/swineslator-y93csv?file=/src/index.js',
},
{
  title: 'Blue Shirt Bandit',
  image: `${rubygame}`,
  languages: [svg.ruby],
  github: 'https://github.com/learn-academy-2022-charlie/ruby-challenges/blob/main/blue-shirt-bandit.rb',
  description: 'This was a mob programming text-based adventure game coded in Ruby. I worked with three others to develop a story. The game is a conditional tree based on user inputs. Some of the text is rendered using ASCII Art',
  liveLink: 'https://onlinegdb.com/N4az3gOjy',
},
]