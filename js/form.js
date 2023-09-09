const input = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const button = document.querySelector(".t182__btn");
const lastInput = document.querySelector(".t-input-group.t-input-group_cb");
const form = document.querySelector("#form");

const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data,
  });

  return res;
};

const clearInput = () => {
  input.forEach((item) => {
    item.value = "";
  });
  textArea.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let statusMessage = document.createElement("div");
  statusMessage.style.fontSize = "20px";
  statusMessage.style.width = "100%";
  statusMessage.style.textAlign = "center";

  lastInput.appendChild(statusMessage);

  const formData = new FormData(form);

  postData("mailer/smart.php", formData)
    .then(() => {
      statusMessage.style.color = "green";
      statusMessage.textContent = "письмо отправлено, ожидайте звонка.";
    })
    .catch(() => {
      statusMessage.style.color = "red";
      statusMessage.style.color = "ошибка при отправки письма.";
    })
    .finally(() => {
      clearInput();
      setTimeout(() => {
        statusMessage.remove();
      }, 7000);
    });
});
