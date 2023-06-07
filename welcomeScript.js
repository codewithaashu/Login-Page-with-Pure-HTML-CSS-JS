tableRow = document.getElementById("tableData");
const storedData = JSON.parse(localStorage.getItem("users"));
let body = "";
storedData.map((curr) => {
  body += `<tr>
                <td>${curr.name}</td>
                <td>${curr.email}</td>
                <td>${curr.mobile}</td>
            </tr>`;
});
tableRow.innerHTML = body;
