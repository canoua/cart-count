<template> 
  <div class="section">
    <div class="form">
      <h2>Список заправок</h2>
            <div class="table-container">
        <table>
          <thead>
            <tr>
              <th scope="col">Дата</th>
              <th scope="col">Количество картриджей</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Chris</th>
              <td>HTML tables</td>
              <td>22</td>
            </tr>
            <tr>
              <th scope="row">Dennis</th>
              <td>Web accessibility</td>
              <td>45</td>
            </tr>
            <tr>
              <th scope="row">Sarah</th>
              <td>JavaScript frameworks</td>
              <td>29</td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

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