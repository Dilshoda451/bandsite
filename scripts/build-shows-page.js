const showsContainer = document.querySelector(".shows-container");

const showsData = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

showsData.forEach((el) => {
  let div = document.createElement("DIV");

  div.innerHTML = `
          <p class="txt1">DATE</p>
          <p class="txt2" style="font-weight: 600">${el.date}</p>
          <br />
          <p class="txt1">VENUE</p>
          <div class="venue">
          <p class="txt2">${el.venue}</p>
          </div>
          <br />
          <p class="txt1">LOCATION</p>
          <p class="txt2">${el.location}</p>
          <br />
          <button>BUY TICKETS</button>
          <hr />
`;
  div.classList.add("show");
  showsContainer.insertAdjacentElement("afterbegin", div);

  let hr = document.createElement("HR");
  hr.classList.add("shows-hr-tablet");
  showsContainer.insertAdjacentElement("afterbegin", hr);
});

let hr = document.createElement("HR");
hr.classList.add("shows-hr-tablet");
showsContainer.removeChild(showsContainer.firstElementChild);
showsContainer.insertAdjacentElement("afterend", hr);

let dateVenueLocation = document.createElement("DIV");
dateVenueLocation.classList.add("dvl-tablet");
dateVenueLocation.innerHTML = `
 <p class="txt1-1">DATE</p>
 <p class="txt1-1">VENUE</p>
 <p class="txt1-1">LOCATION</p>
`;
showsContainer.insertAdjacentElement("beforebegin", dateVenueLocation);
