<template>
  <div class="section">
    <form class="form" action="">
      <h2>Список картриджей, ожидающих заправку</h2>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Модель</th>
              <th scope="col">Штрихкод</th>
              <th scope="col">Ячейка</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">TK-1200</th>
              <td>21520000545662</td>
              <td>2</td>
              <td>
                <input type="checkbox">
              </td>
            </tr>
            <tr>
              <th scope="row">FX-10</th>
              <td>21520000548562</td>
              <td>5</td>
              <td>
                <input type="checkbox">
              </td>
            </tr>
            <tr>
              <th scope="row">12A</th>
              <td>21520000548565</td>
              <td>12</td>
              <td>
                <input type="checkbox">
              </td>
            </tr>
          </tbody>
        </table>
      </div> 
      <input type="submit" value="отправить">
    </form>
  </div>
</template>

<style scoped>
  .table-container {
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgb(140 140 140);
  }
  table {
    border-collapse: collapse;
    width: 100%;
    font-family: sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }

  caption {
    caption-side: bottom;
    padding: 10px;
    font-weight: bold;
  }

  thead,
  tfoot {
    background-color: rgb(228 240 245);
  }

  th,
  td {
    border-right: 1px solid #000;
    padding: 8px 10px;
    border-radius: inherit;
  }

  th:last-child,
  tr:last-child,
  td:last-child {
    border-right: none;
  }

  td:last-of-type {
    text-align: center;
  }

  tbody > tr:nth-of-type(even) {
    background-color: rgb(237 238 242);
  }

  tfoot th {
    text-align: right;
  }

  tfoot td {
    font-weight: bold;
  }

  .form__cart-list-all {
    width: 60%;
  }
</style>