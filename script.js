document
  .getElementsByClassName("button1")[0]
  .addEventListener("click", function () {
    let GetTask = document.getElementsByClassName("Task")[0].value.trim();
    let GetDeadline = document.getElementsByClassName("date")[0].value;
    let GetPriority = document.getElementsByClassName("priority")[0].value;

    if (!GetTask || !GetDeadline || !GetPriority) {
      alert("Please fill out everything!!");
      return;
    }

    const TaskCont = document.createElement("div");
    TaskCont.className = "taskContainer";

    const Checkbox = document.createElement("input");
    Checkbox.type = "checkbox"
    Checkbox.class = "checkbox"

    Checkbox.addEventListener("change", function(){
        if(this.checked){
           TaskCont.style.transition = "opacity 0.8s"
           TaskCont.style.opacity = "0"
        }
        setTimeout(() => {
            TaskCont.remove()
        }, 800);
        
    })

    const taskText = document.createElement("span");
    taskText.className = "taskText"
    taskText.innerHTML = `<strong>Task:</strong> ${GetTask} <br><strong class ="dead">Deadline:</strong> ${GetDeadline}<br> <strong class = "pri">Priority:</strong> ${GetPriority}`

    const deletebtn = document.createElement('button')
    deletebtn.className = "delete"
    deletebtn.innerText = "Delete Task"

    deletebtn.addEventListener("click", function(){
        TaskCont.remove()
    })

    TaskCont.appendChild(Checkbox);
    TaskCont.appendChild(taskText);
    TaskCont.appendChild(deletebtn)

    

    document.getElementsByClassName("taskList")[0].appendChild(TaskCont)

    document.getElementById('task').value = ''
    document.getElementById('date').value = ''
    document.getElementById('Priority').value = ''
  });
  document.getElementsByClassName("button2")[0].addEventListener("click", function(){
    document.getElementsByClassName("tdl")[0].style.backgroundColor = "black"
    document.getElementsByClassName("EnterTask")[0].style.color = "white"
    document.getElementsByClassName("EnterDate")[0].style.color = "white"
    document.getElementsByClassName("EnterPriority")[0].style.color = "white"
    document.getElementsByClassName("tdl1")[0].style.backgroundColor = "black"
    document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(70, 69, 69)"
    
  })
  
  
