let arr = ["dog", "cat", "monkey", "bear", "horse", "cow", "lizard", "h"];
let steve = document.getElementById("header");
let parent = document.getElementById("parent");

const homeIcon = [
  {
    title: "BUSINESS CONTINUITY",
    LinkUr: "https://sp1.sdcdn.app/pdf/MNDR-Success-Story.pdf",
    rec: "../images/landing/icon6.png",
    content:
      "Because we collect the most data AND because we have omni-dimensional analysis, we provide the lowest mean time from detect to contain to remediate.",
  },
  {
    title: "INTELLIGENCE FLOW",
    LinkUr: "/the-platform/",
    rec: "../images/landing/icon7.png",
    content:
      "Through our 24/7 Visibility Platform, on-shore analysts and constant reporting, you will always know what is happening, why and how your security is ever-improving.",
  },
  {
    title: "TIME PROTECTION",
    LinkUr: "/blog-pages/breach-response",
    rec: "../images/landing/icon8.png",
    content:
      "We collect more, analyze more and bother you less. We ensure that every Breach Response is precise, valid and actionable. Unlimited Breach Promise.",
  },
];


let obj = {
  test: {
    cat: "kitty",
  },
  test2: "cat",
  test3: "monkey",
  test4: "bear",
};

console.log(obj.test.cat);
// if (steve.innerHTML === 'Test') {
//     steve.innerHTML = 'Update 123'
// } else {
//     steve.innerHTML = 'Nothing here'
// }

for (let i = 0; i < homeIcon.length; i++) {
  let newHeader = document.createElement("h2");
  newHeader.innerHTML = homeIcon[i].title;
  parent.appendChild(newHeader);
}
