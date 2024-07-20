let mainCard = document.querySelector(".card");
let thankCard = document.querySelector(".thank-card");
let submitBtn = document.querySelector(".card .submit-btn");
let ul = document.querySelector(".numbers");
let li_s = document.querySelectorAll(".num");
let select_text = document.querySelector(".select");

li_s.forEach((num, index) => {
  let li = li_s[index];
  li.addEventListener("click", function (event) {
    if (li.classList.contains("active")) {
      li.classList.remove("active");
    } else {
      li_s.forEach((item) => item.classList.remove("active"));
      li.classList.add("active");
      test();
    }
    let select = li.innerHTML;
    select_text.textContent = `You Selected ${select} out of 5`;
  });
});
function test() {
  submitBtn.addEventListener("click", function () {
    mainCard.classList.add("hide");
    thankCard.classList.add("show");
  });
}
