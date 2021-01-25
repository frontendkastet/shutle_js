const fields = ['name', 'company', 'email', 'phone', 'balance', 'registered']; 
// TODO: расширить tableConfig
const tableConfig = [
  {
    header: 'Name', 
    key: 'name'
  },
  {
  header: 'Company', 
  key: 'company'
  },
  {
    header: 'Email', 
    key: 'email'
  },
  {
    header: 'Phone Number', 
    key: 'phone'
  },
  {
    header: 'Balance', 
    key: 'balance'
  },
  {
    header: 'Registration date', 
    key: 'registered'
  },
  
];



const getTHead = () => {
  const tHead = document.createElement('thead');
  tHead.style.color = "";
  tHead.style.background = "rgb(13, 23, 004)";
  tableConfig.forEach((cell) => {
    const cellHead = document.createElement('th');
    cellHead.innerHTML = cell.header;
    cellHead.style.border = '1px solid '
    tHead.appendChild(cellHead);
  })
  return tHead;
}
const createTable = (data) => {
  const table = document.createElement('table');
  table.style.border = '1px solid grey';
  table.style.margin = '0 auto';
  const tHead = getTHead();
  table.appendChild(tHead);
  const tBody = document.createElement('tbody');
  if (data) {
    data.forEach(item => {
      const tr = document.createElement('tr');

      tableConfig.forEach((cell) => {
        const td = document.createElement('td');
        td.innerHTML = item[cell.key];
        td.style.padding = "0 50px 0 0"
        td.style.border = "1px solid";
        tr.appendChild(td);
      });

      tBody.appendChild(tr);
    })
  }
  table.appendChild(tBody);
  document.body.appendChild(table);
};

const getTable = () => {
  const url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';
  fetch(url)
    .then(response => response.json())
    .then(response => createTable(response))
    .catch(error => createTable());
}

getTable();