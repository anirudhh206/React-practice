function Button(){
  return (
    <button>You are using my button</button>
  );
}


export default function my_app(){
  return (
    <div>
    <h1>This is my first app</h1>
      <Button />
    </div>
  );
}


// you should not use lower case in the 
// calling button or other things as it is treated as html default functions 

// the above syntax we have seen is JSX 
// jsx is stricter thatn html 
// You have to close tags like <br />. Your component also can’t return multiple JSX tags.
// you have ot wrap them in like <div></div>  or empty <> </>


<h1> For displaying data</h1>

function Display(){
  return (
    <h1>
      {user.name}
    </h1>
  );
}
let isloggedin= true;
export default function main(){ 
  let content ;

  if (isloggedin){
    content= <adminportal />
  }
  else{
    content = <loginform />
  }
  return (
    <div>
      {content}
    </div>
  );
  
}