import React from "react";
import PropTypes from 'prop-types';

function Food({name,image, raiting}){
  return(<div>
    <h1> i like  { name}</h1>
    <img src={image} alt={name}></img> 
    <h4> {raiting}/5</h4>

  </div>) }


const foodList=[{
  id:1,
  name:'earth',
  image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/220px-The_Earth_seen_from_Apollo_17.jpg'
  ,raiting:4.5
},
{ id:2,
  name:'jupitor',
image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/220px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg'
,raiting:4.5}]

function App() {
  return(<div> 

{foodList.map(dish => (<Food id={dish.id} name={dish.name} image={dish.image}  raiting={dish.raiting}/ >))}


        </div>);
}
//들어가야하는 자료형의 틀을 잡아주는역할 
Food.propTypes = {
  name:PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  raiting:PropTypes.string.isRequired,

}
export default App;
