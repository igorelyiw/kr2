let getID=x=>document.getElementById(x);
let edit=getID('edit');

edit.onclick=function(){
    getID('textarea').value=getID('window').innerHTML;
    getID('window').style.display='none';
    getID('textarea').style.display='block';
    getID('navBtn').style.display='none';
    getID('editBtn').style.display='block';
}
getID('ok').onclick=function(){

     getID('window').innerHTML=getID('textarea').value;

    getID('window').style.display='block';
    getID('textarea').style.display='none';
    getID('navBtn').style.display='block';
    getID('editBtn').style.display='none';

}
getID('option1').onclick=function(){
getID('window').classList.toggle('font');
}
getID('option2').onclick=function(){
    getID('window').classList.toggle('italic');
    }
    getID('option3').onclick=function(){
        getID('window').classList.toggle('under');
        }
        getID('option4').onclick=function(){
            getID('window').classList.toggle('lineT');
            }
getID('posL').onclick=function(){
    getID('window').style.textAlign='left';
}
getID('posC').onclick=function(){
    getID('window').style.textAlign='center';
}
getID('posR').onclick=function(){
    getID('window').style.textAlign='right';
}
getID('sign').onclick=function(){
if(getID('login').value===''||getID('pass').value===''){
    getID('login').classList.add('red');
    getID('pass').classList.add('red');
getID('mes').textContent='Value is empty'
}
else if(getID('login').value!='admin'||getID('pass').value!='admin'){
getID('login').classList.add('red');
    getID('pass').classList.add('red');
getID('mes').textContent='Login or password is wrong!!!'
}
else{

}}

let f1=document.forms['f1'];
for(let i=0;i<f1.length;i++){
    f1.changeColor[i].onclick=function(){
        let boxStyle=getComputedStyle(f1.changeColor[i]);
        getID('window').style.color=boxStyle.backgroundColor;
    }
}
getID('buttonColor').onclick=function(){
 getID('images').style.display='none';   
 getID('uploadFile').style.display='none';     
 getID('colorBg').style.display='block';   
 
}
getID('buttonImages').onclick=function(){
 getID('images').style.display='block';   

    getID('colorBg').style.display='none';   
    getID('uploadFile').style.display='none';     
    
   }
   getID('buttonFiles').onclick=function(){
    getID('uploadFile').style.display='block';   
 getID('images').style.display='none';   
   
       getID('colorBg').style.display='none';   
      }

      let f2=document.forms['f2'];
      for(let i=0;i<f2.length;i++){
          f2.changeColor[i].onclick=function(){
              let boxStyle=getComputedStyle(f2.changeColor[i]);
              getID('window').style.backgroundImage=boxStyle.backgroundImage;
          }
      }
      let f3=document.forms['f3'];
      for(let i=0;i<f1.length;i++){
          f3.changeColor[i].onclick=function(){
              let boxStyle=getComputedStyle(f3.changeColor[i]);
              getID('window').style.backgroundColor=boxStyle.backgroundColor;
          }
      }
      getID('fileBtn').onclick=function(){
          let bg=getID('fileBg').value;
          getID('window').style.backgroundImage=bg;
      }
    //   create table
  getID('tableBtn').onclick=function(){
      let table=document.createElement('table');
      let tBody=document.createElement('tbody');
      for(let i=0;i<4;i++){
let tr=document.createElement('tr');

        for(let j=0;j<4;i++){
let td=document.createElement('td');
td.style.width='40'+'px';
td.style.height='40'+'px';
td.style.border='2'+ 'solid'+ 'black';
td.textContent='TD';
tr.appendChild(td);
        }
tr.appendChild(tBody);
      }
      table.appendChild(tBody);
      document.querySelector('body').appendChild(table);
      alert('work')
  }
