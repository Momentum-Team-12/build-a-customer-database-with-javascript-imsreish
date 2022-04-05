console.log(customers);
{
  /* <div id="everyCustomer"><div id="eachCustomer">
        <img id="displayPicture" src="https://place-puppy.com/300x300"></img>
        <h1 id="displayName">Name placeholder</h1>
        <h3 id="displayEmail">email address placeholder</h3>
        <h4 id="displayAddressLine">Address line here</h4>
        <h4 id="displayDOB">DOB here</h4>
        <h4 id="displayLoyaltyDate">Customer since date here</h4>
    </div></div> */
}
// I want to build one of these for each customer

const allCustomersDiv = document.querySelector("#everyCustomer");

for (let customer of customers) {
  console.log(`${customer.name.first} ${customer.name.last}`);
  let customerDiv = document.createElement("div");
  customerDiv.classList.add("eachCustomer");
  let customerPicture = document.createElement("img");
  customerPicture.src = `${customer.picture.thumbnail}`;
  customerDiv.appendChild(customerPicture);
  let customerName = document.createElement("h1");
  customerName.innerText = `${customer.name.first} ${customer.name.last}`;
  customerDiv.appendChild(customerName);
  let customerEmail = document.createElement("h3");
  customerEmail.innerText = `${customer.email}`;
  customerDiv.appendChild(customerEmail);
  let customerAddress1 = document.createElement("h4");
  customerAddress1.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
  customerDiv.appendChild(customerAddress1);
  let customerAddress2 = document.createElement("h4");
  customerAddress2.innerText = `${customer.location.city}, ${customer.location.state} ${customer.location.postcode}`;
  customerDiv.appendChild(customerAddress2);
  let dob = document.createElement("h4");
  dob.innerText = `${customer.dob.date}`;
  customerDiv.appendChild(dob);
  let loyaltyDate = document.createElement("h4");
  loyaltyDate.innerText = `${customer.registered.date}`;
  allCustomersDiv.appendChild(customerDiv);
}
