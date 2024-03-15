import React, { useState } from "react";

const App = () => {
  const [list1, setList1] = useState([
    { title: "item1", checked: false },
    { title: "item2", checked: false },
    { title: "item3", checked: false },
  ]);
  const [list2, setList2] = useState([
    { title: "itemA" },
    { title: "itemB" },
    { title: "itemC " },
  ]);

  const handleChange = (i) => {
    let temp = [...list1];
    temp[i].checked = !temp[i].checked;
    setList1(temp);
  };
  const swap=()=>{
    let set1=[...list1]
    let set2 = [...list2]
    set1.forEach((e,i) => {
      if(e.checked){
        let temp = set1[i].title;
        set1[i].title= set2[i].title;
        set2[i].title=temp;
      }
      set1[i].checked=false
    })
    console.log(set1);
    console.log(set2);
    setList1(set1);
    setList2(set2);
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>List1</h1>
          {list1.map((item, i) => {
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {handleChange(i)}}
                />
                {item.title}
              </li>
            );
          })}
        </div>
        <div>
          <h1>List2</h1>
          {list2.map((item, i) => {
            return <li key={i}>{item.title} </li>;
          })}
        </div>
      </div>

      <button onClick={swap} style={{marginLeft:"300px",marginTop:"30px"}}>Swap</button>
    </div>
  );
};

export default App;
