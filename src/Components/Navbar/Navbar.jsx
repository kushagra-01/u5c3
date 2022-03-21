import { Link } from "react-router-dom";


const link=[
  {to:"/", title: "home"},
  {to:"/section/Mystery", title: "Mystery"},
  {to:"/section/Mythology", title: "Mythology"},
  {to:"/section/Technology", title: "Technology"},
  {to:"/section/history", title: "history"},
]

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
       {link.map((el)=>{
         
         return  <button>
           <Link key={el.to} style={{padding:"90px"}} to={el.to}>{el.title}</Link>
         </button>
         
       })}
      </div>
    </>
  );
};
