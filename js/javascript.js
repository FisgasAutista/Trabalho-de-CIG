//pagetabs

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

