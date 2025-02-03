"use strict";

let menu_form = document.getElementById("menu_form");

let table_body_con = document.getElementById("body_con");

menu_form.addEventListener("submit", form_data);
// console.log(menu_form," menu form data");

let customer_arr = [];

document.addEventListener("DOMContentLoaded", () => {
  const loc = JSON.parse(localStorage.getItem("app"));
  console.log(loc);
  customer_arr = loc || [];
  render_table();
});

function form_data(event) {
  event.preventDefault();
  // console.log("inside data form",event);
  let customer_name = event.target.cus_name.value; //input
  let order_customer = event.target.type_de.value; //drop down list
  let price = Math.random() * 10;
  // console.log(customer_name,"customer_name");
  // console.log(order_cus,"order_cus");
  // if condition for image // order
  customer_arr.push({
    customer_name,
    order_customer,
    price,
    img: `../images/${order_customer}.jpg`,
  });
  localStorage.setItem("app", JSON.stringify(customer_arr));
  render_table();
}

function price_order(min, max) {
  return Math.random() * (max - min) + min;
}
// console.log(this,"= data this out function")

function render_table() {
  table_body_con.innerHTML = "";
  const loc = JSON.parse(localStorage.getItem("app")) || [];

  loc.map((customer) => {
    let tr_el = document.createElement("tr");
    let td_el = document.createElement("td");
    let td_el_custName = document.createElement("td");
    let td_el_payment = document.createElement("td");
    let td_el_cusOrder = document.createElement("td");

    let td_el_img = document.createElement("img");
    td_el_img.setAttribute("src", customer.img);

    td_el_custName.innerHTML = customer.customer_name;
    td_el_cusOrder.innerHTML = customer.order_customer;
    td_el_payment.innerHTML = customer.price;

    // Append children
    td_el.appendChild(td_el_img);
    tr_el.appendChild(td_el);
    tr_el.appendChild(td_el_custName);
    tr_el.appendChild(td_el_cusOrder);
    tr_el.appendChild(td_el_payment);

    table_body_con.appendChild(tr_el);
  });
}
