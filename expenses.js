// ===============================================
// Treasure Manager - Expenses Module
// ===============================================

const API_URL = "https://script.google.com/macros/s/AKfycbwqpXqeMEwVrY_T0SkFTrOVd91nGgyFgOz_xkm_L_mSIQRCBO65wZNAeh0BPPlL-sx6/exec";

// Load Data
fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    // Expense Split
    loadExpenseSplit(data.expenses.split);

    // Expense Categories
    loadCategory(
      "foodList",
      "foodTotal",
      data.expenses.food
    );

    loadCategory(
      "travelList",
      "travelTotal",
      data.expenses.travel
    );

    loadCategory(
      "poojaList",
      "poojaTotal",
      data.expenses.pooja
    );

    loadCategory(
      "templeList",
      "templeTotal",
      data.expenses.temple
    );

    loadCategory(
      "miscList",
      "miscTotal",
      data.expenses.misc
    );

  })

  .catch(error => {

    console.error("Error :", error);

  });



// ===============================================
// Expense Split
// ===============================================

function loadExpenseSplit(split) {

  let html = "";

  split.forEach(item => {

    html += `

      <tr>

        <td>${item.category}</td>

        <td style="text-align:right;">

          ₹${Number(item.amount).toLocaleString()}

        </td>

      </tr>

    `;

  });

  document.getElementById("expenseSplit").innerHTML = html;

}



// ===============================================
// Expense Cards
// ===============================================

function loadCategory(listId, totalId, data) {

  let html = "";

  let total = 0;

  data.forEach(item => {

    total += Number(item.amount);

    html += `

      <div class="expense-item">

          <div class="expense-left">

              <strong>${item.description}</strong>

              <br>

              <small>${item.date}</small>

          </div>

          <div class="expense-right">

              ₹${Number(item.amount).toLocaleString()}

          </div>

      </div>

    `;

  });

  document.getElementById(listId).innerHTML = html;

  document.getElementById(totalId).innerHTML =

      "Total : ₹" + total.toLocaleString();

}