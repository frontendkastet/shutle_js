// const fields = ['name', 'company', 'email', 'phone', 'balance', 'registered']; 
// TODO: расширить tableConfig
const tableConfig = [
  {
    header: 'Имя',
    key: 'name',
    balance: "balance"
  }
];

const getTHead = () => {
  const tHead = document.createElement('thead');
  tableConfig.forEach((cell) => {
    const cellHead = document.createElement('th');
    cellHead.innerHTML = cell.header;
    tHead.appendChild(cellHead);
  })
  return tHead;
}
const createTable = (data) => {
  const table = document.createElement('table');
  const tHead = getTHead();
  table.appendChild(tHead);
  const tBody = document.createElement('tbody');
  if (data) {
    data.forEach(item => {
      const tr = document.createElement('tr');

      tableConfig.forEach((cell) => {
        const td = document.createElement('td');
        td.innerHTML = item[cell.key];
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