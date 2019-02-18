//pagetabs

//plantel

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//champions

function openPageC(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentC");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkC");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//primeiraliga

function openPageL(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentL");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkL");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//competicoes

function openPageCo(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontentCo");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkCo");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




//sort tables names + numbers

function sortTable(n)
{
  var tabela, rows, trocar, i, x, y, deveTrocar, resposta, flag = 0;
  tabela = document.getElementById("myTable");
  trocar = true;
  resposta = "ascendente";

  while (trocar==true)
  {
    // Nenhuma tropa foi feita:
    trocar = false;
    rows = tabela.rows;
    // Como a primeira linha é um header, o "for" vai ser um loop que passa por todas as linhas menos o header
    for (i = 1; i < (rows.length - 1); i++)
    {
      deveTrocar = false;
      // Vai buscar o elemento presente na linha atual e na seguinte
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];

      if (resposta == "ascendente")
      {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for maior que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      } else if (resposta == "descendente") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for menor que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      }
    }

    if (deveTrocar==true)
    {
      // Se a condição for válida, faz a troca dos dois valores, marca que a troca foi feita (trocar = true) e soma 1 á variável flag
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      trocar = true;
      flag ++;
    }
    else
    {
      // Se nenhuma troca foi feita e a resposta é "ascendente", muda a resposta para "descendente" e faz o loop todo denovo
      if (flag == 0 && resposta == "ascendente") {
        resposta = "descendente";
        trocar = true;
      }
    }
  }
}



function sortTable2(n)
{
  var tabela, rows, trocar, i, x, y, deveTrocar, resposta, flag = 0;
  tabela = document.getElementById("myTable2");
  trocar = true;
  resposta = "ascendente";

  while (trocar==true)
  {
    // Nenhuma tropa foi feita:
    trocar = false;
    rows = tabela.rows;
    // Como a primeira linha é um header, o "for" vai ser um loop que passa por todas as linhas menos o header
    for (i = 1; i < (rows.length - 1); i++)
    {
      deveTrocar = false;
      // Vai buscar o elemento presente na linha atual e na seguinte
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];

      if (resposta == "ascendente")
      {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for maior que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      } else if (resposta == "descendente") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for menor que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      }
    }

    if (deveTrocar==true)
    {
      // Se a condição for válida, faz a troca dos dois valores, marca que a troca foi feita (trocar = true) e soma 1 á variável flag
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      trocar = true;
      flag ++;
    }
    else
    {
      // Se nenhuma troca foi feita e a resposta é "ascendente", muda a resposta para "descendente" e faz o loop todo denovo
      if (flag == 0 && resposta == "ascendente") {
        resposta = "descendente";
        trocar = true;
      }
    }
  }
}


function sortTable3(n)
{
  var tabela, rows, trocar, i, x, y, deveTrocar, resposta, flag = 0;
  tabela = document.getElementById("myTable3");
  trocar = true;
  resposta = "ascendente";

  while (trocar==true)
  {
    // Nenhuma tropa foi feita:
    trocar = false;
    rows = tabela.rows;
    // Como a primeira linha é um header, o "for" vai ser um loop que passa por todas as linhas menos o header
    for (i = 1; i < (rows.length - 1); i++)
    {
      deveTrocar = false;
      // Vai buscar o elemento presente na linha atual e na seguinte
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];

      if (resposta == "ascendente")
      {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for maior que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      } else if (resposta == "descendente") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
        {
          // Se a condição a cima for válida (se a posição atual for menor que a seguinte), faz a troca e fecha o loop:
          deveTrocar = true;
          break;
        }
      }
    }

    if (deveTrocar==true)
    {
      // Se a condição for válida, faz a troca dos dois valores, marca que a troca foi feita (trocar = true) e soma 1 á variável flag
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      trocar = true;
      flag ++;
    }
    else
    {
      // Se nenhuma troca foi feita e a resposta é "ascendente", muda a resposta para "descendente" e faz o loop todo denovo
      if (flag == 0 && resposta == "ascendente") {
        resposta = "descendente";
        trocar = true;
      }
    }
  }
}



function mySearch() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

