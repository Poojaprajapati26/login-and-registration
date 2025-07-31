function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <span class="time-stamp">Added at: ${time}</span>
    <div class="actions">
      <button class="complete-btn" onclick="toggleTask(this)">✔</button>
      <button class="delete-btn" onclick="deleteTask(this)">✖</button>
    </div>
  `;

  document.getElementById("task-list").appendChild(li);
  input.value = "";

  updateProgress();
}

function toggleTask(button) {
  const li = button.closest("li");

  if (!li.classList.contains("completed")) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const doneTime = document.createElement("span");
    doneTime.className = "time-stamp";
    doneTime.textContent = `✔ Completed at: ${time}`;
    li.appendChild(doneTime);
  }

  li.classList.toggle("completed");
  updateProgress();
}

function deleteTask(button) {
  const li = button.closest("li");
  li.remove();
  updateProgress();
}

function updateProgress() {
  const tasks = document.querySelectorAll("#task-list li");
  const completed = document.querySelectorAll("#task-list li.completed");
  const bar = document.getElementById("progress-bar");

  const total = tasks.length;
  const percent = total === 0 ? 0 : (completed.length / total) * 100;

  bar.style.width = percent + "%";
}