const body = document.body;
body.getElementsByTagName("h1")[0].remove();

const title = document.createElement("h1");
title.innerText = "Lab7 Assignment";
title.setAttribute("style", "color: blue");

const task_subtitle = document.createElement("h2");
task_subtitle.innerText = "Task";
task_subtitle.setAttribute("style", "color: red");

const p = document.createElement("p");
p.innerHTML =
  "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";

const unordered_list = document.createElement("ul");

const item1 = document.createElement("li");
item1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
item1.style.color = "green";
item1.classList.add("even");

const item2 = document.createElement("li");
item2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
item2.style.color = "purple";
item2.classList.add("odd");

const item3 = document.createElement("li");
item3.innerHTML = "change content of the elements (<b>5 points</b>);";
item3.style.color = "green";
item3.classList.add("even");

const item4 = document.createElement("li");
item4.innerHTML = "change styles of the elements (<b>5 points</b>);";
item4.style.color = "purple";
item4.classList.add("odd");

const item5 = document.createElement("li");
item5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
item5.style.color = "green";
item5.classList.add("even");

const item6 = document.createElement("li");
item6.innerHTML = "change classes of the elements (<b>5 points</b>).";
item6.style.color = "purple";
item6.classList.add("odd");

const submission_subtitle = document.createElement("h2");
submission_subtitle.innerText = "Submission";
submission_subtitle.setAttribute("style", "color: red");

const p2 = document.createElement("p");
p2.innerText = "To submit your work, follow these instructions:";

const unordered_list2 = document.createElement("ul");

const item1_2 = document.createElement("li");
item1_2.innerHTML =
  "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
item1_2.style.color = "green";
item1_2.classList.add("even");

const item2_2 = document.createElement("li");
item2_2.innerHTML =
  "Clone this repository to your local machine and work inside it.";
item2_2.style.color = "purple";
item2_2.classList.add("odd");

const item3_2 = document.createElement("li");
item3_2.innerHTML =
  'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
item3_2.style.color = "green";
item3_2.classList.add("even");

const item4_2 = document.createElement("li");
item4_2.innerHTML =
  "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
item4_2.style.color = "purple";
item4_2.classList.add("odd");

const item5_2 = document.createElement("li");
item5_2.innerHTML =
  "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
item5_2.style.color = "green";
item5_2.classList.add("even");

const item6_2 = document.createElement("li");
item6_2.innerHTML =
  "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
item6_2.style.color = "purple";
item6_2.classList.add("odd");

const item7_2 = document.createElement("li");
item7_2.innerHTML =
  "After you finish your work, submit it to the Github (<b>2 points</b>).";
item7_2.style.color = "green";
item7_2.classList.add("even");

body.appendChild(title);
body.appendChild(document.createElement("hr"));
body.appendChild(task_subtitle);
body.appendChild(p);

unordered_list.appendChild(item1);
unordered_list.appendChild(item2);
unordered_list.appendChild(item3);
unordered_list.appendChild(item4);
unordered_list.appendChild(item5);
unordered_list.appendChild(item6);

body.appendChild(unordered_list);
body.appendChild(document.createElement("hr"));
body.appendChild(submission_subtitle);
body.appendChild(p2);

unordered_list2.appendChild(item1_2);
unordered_list2.appendChild(item2_2);
unordered_list2.appendChild(item3_2);
unordered_list2.appendChild(item4_2);
unordered_list2.appendChild(item5_2);
unordered_list2.appendChild(item6_2);
unordered_list2.appendChild(item7_2);

body.appendChild(unordered_list2);
body.appendChild(document.createElement("hr"));
