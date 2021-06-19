let button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      let activity = document.getElementById("activity");
      activity.textContent = `🌟 ${data.activity} 🌟`;
      document.body.appendChild(activity);
    });
});
