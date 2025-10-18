
const input=document.getElementById('taskInput');
const list=document.getElementById('taskList');
let tasks=JSON.parse(localStorage.getItem('tasks')||'[]');
function render(){list.innerHTML='';tasks.forEach((t,i)=>{const li=document.createElement('li');li.textContent=t.text;if(t.done)li.classList.add('done');li.onclick=()=>toggle(i);const btn=document.createElement('button');btn.textContent='X';btn.onclick=e=>{e.stopPropagation();remove(i)};li.appendChild(btn);list.appendChild(li);});localStorage.setItem('tasks',JSON.stringify(tasks));}
function addTask(){const text=input.value.trim();if(!text)return;tasks.push({text,done:false});input.value='';render();}
function toggle(i){tasks[i].done=!tasks[i].done;render();}
function remove(i){tasks.splice(i,1);render();}
render();
