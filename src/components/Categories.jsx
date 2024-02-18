import React ,{useState , useEffect} from 'react'
import rectangle from '../assets/rectangle.png'
import phone from '../assets/phone.png'
import computer from '../assets/computer.png'
import smartwatch from '../assets/SmartWatch.png'
import camera from '../assets/Camera.png'
import headphones from '../assets/headphone.png'
import gaming from '../assets/Gaming.png'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CategoryProd from './CategoryProd.jsx'


const Categories = ({funcky}) => {

  const navigate = useNavigate();

  const [prodcat,setProdcat] = useState([]);
  const [prodcat1,setProdcat1] = useState([]);
  const [prodcat2,setProdcat2] = useState([]);
  const [prodcat3,setProdcat3] = useState([]);
  const [prodcat4,setProdcat4] = useState([]);
  const [prodcat5,setProdcat5] = useState([]);


  const [phonee,setPhone] = useState([1]);
  const [comp,setComp] = useState([2]);
  const [watch,setWatch] = useState([3]);
  const [cam,setCam] = useState([4]);
  const [hp,setHp] = useState([5]);
  const [gg,setGg] = useState([6]);



  useEffect(() => {
    axios.get(`http://localhost:3000/category/catprodz/${phonee}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });
        axios.get(`http://localhost:3000/category/catprodz/${comp}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat1(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });
        axios.get(`http://localhost:3000/category/catprodz/${watch}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat2(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });
        axios.get(`http://localhost:3000/category/catprodz/${cam}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat3(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });
        axios.get(`http://localhost:3000/category/catprodz/${hp}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat4(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });
        axios.get(`http://localhost:3000/category/catprodz/${gg}`)
        .then((response) => {
          console.log('gg data from category',prodcat);
          setProdcat5(response.data);

        })
        .catch((error) => {
            console.error("Error fetching :", error);
        });

}, []);





  return (
    <div class="relative w-4/5 mt-20 p-8 mx-auto">
        <div class="gap-20">
            <div class="flex mt-2 gap-6">
                <img  class="h-10 w-15 " src={rectangle} alt="" />
                <h1 class="text-red-500 font-bold text-xl	">Categories</h1>
            </div> 
            <h1 class="text-black font-bold text-4xl	">Browse By Category</h1>
            <div class="flex justify-center w-fill h-60 mt-10">
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={phone} alt=""  onClick={() =>{navigate("/CategoryProd" ,funcky(prodcat))}} /></a>
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={computer} alt="" onClick={() =>{navigate("/CategoryProd" ,funcky(prodcat1)  )}} /></a>
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={smartwatch} alt=""onClick={() =>{navigate("/CategoryProd",funcky(prodcat2))}} /></a>
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={camera} alt="" onClick={() =>{navigate("/CategoryProd" ,funcky(prodcat3))}} /></a>
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={headphones} alt=""onClick={() =>{navigate("/CategoryProd",funcky(prodcat4))}} /></a>
                <a ><img class=" hover:bg-red-400 h-60 p-4" src={gaming} alt=""onClick={() =>{navigate("/CategoryProd",funcky(prodcat5))}} /></a>
            </div>     
        </div>
    </div>
  )
}

export default Categories
