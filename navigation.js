<style>
  /* NAvigation Start */

  .topnav {
    overflow: hidden;
    background-color: #f1f4f8;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .topnav a {
    display: inline-block;
    color: #2a1e66;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .active {
    background-color: #4caf50;
    color: white;
  }

  .topnav .icon {
    display: none;
  }

  .dropdown {
    display: inline-block;
    overflow: hidden;
  }

  .dropdown .dropbtn {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }

  .topnav a:hover,
  .dropdown:hover .dropbtn {
    background-color: #d3eee7;
  }

  .dropdown-content a:hover {
    background-color: #d3eee7;
    color: black;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media screen and (max-width: 600px) {
    .topnav a:not(:first-child),
    .dropdown .dropbtn {
      display: none;
    }
    .topnav a.icon {
      float: right;
      display: block;
    }
  }

  @media screen and (max-width: 600px) {
    .topnav.responsive {
      position: relative;
    }
    .topnav.responsive .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    .topnav.responsive a {
      float: none;
      display: block;
      text-align: left;
    }
    .topnav.responsive .dropdown {
      float: none;
    }
    .topnav.responsive .dropdown-content {
      position: relative;
    }
    .topnav.responsive .dropdown .dropbtn {
      display: block;
      width: 100%;
      text-align: left;
    }
  }

  /* NAvigation End */

  /* Paginaion Start */

  .center {
    text-align: center;
  }

  .pagination {
    display: inline-block;
  }

  .pagination a {
    color: #2a1e66;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #2a1e66;
    margin: 0 4px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 20px;
  }

  .pagination a.active {
    background-color: #2a1e66;
    color: white;
    border: 1px solid #4caf50;
  }

  .pagination a:hover:not(.active) {
    background-color: #d3eee7;
  }

  /* Paginaion End */
</style>

<script>
  function pagination() {
    var text =
      '<div class="center">' +
      '<div class="pagination"> <a href="#">&laquo;</a>' +
      '<a href="https://www.oyuna-erica.com/blog">1</a>' +
      '<a href="https://www.oyuna-erica.com/blog2">2</a>' +
      '<a href="https://www.oyuna-erica.com/blog3">3</a>' +
      '<a href="https://www.oyuna-erica.com/blog4">4</a>' +
      '<a href="https://www.oyuna-erica.com/blog5">5</a>' +
      '<a href="https://www.oyuna-erica.com/blog6">6</a>' +
      '<a href="https://www.oyuna-erica.com/blog7">7</a>' +
      '<a href="https://www.oyuna-erica.com/blog8">8</a>' +
      '<a href="https://www.oyuna-erica.com/blog9">9</a>' +
      '<a href="https://www.oyuna-erica.com/blog10">10</a>' +
      '<a href="https://www.oyuna-erica.com/blog11">11</a>' +
      '<a href="https://www.oyuna-erica.com/blog12">12</a>' +
      '<a href="https://www.oyuna-erica.com/blog13">13</a>' +
      '<a href="https://www.oyuna-erica.com/blog14">14</a>' +
      '<a href="https://www.oyuna-erica.com/blog15">15</a>' +
      '<a href="https://www.oyuna-erica.com/blog16">16</a>' +
      '<a href="https://www.oyuna-erica.com/blog17">17</a>' +
      '<a href="https://www.oyuna-erica.com/blog18">18</a>' +
      '<a href="https://www.oyuna-erica.com/blog19">19</a>' +
      '<a href="https://www.oyuna-erica.com/blog20">20</a>' +
      '<a href="https://www.oyuna-erica.com/blog21">21</a>' +
      '<a href="https://www.oyuna-erica.com/blog22">22</a>' +
      '<a href="#">&raquo;</a> </div>' +
      "</div>";

    document.write(text);
  }

  function navigation() {
    var text1 =
      '<div class="topnav" id="myTopnav">' +
      '<a href="https://www.oyuna-erica.com/">Home</a>' +
      '<a href="https://www.oyuna-erica.com/about">About</a>' +
      '<a href="https://www.oyuna-erica.com/store">Store</a>' +
      '<a href="https://www.oyuna-erica.com/tourism">TourNZ</a>' +
      '<a href="https://www.oyuna-erica.com/previous_webinar">Webinar</a>' +
      '<a href="https://www.oyuna-erica.com/product">Product</a>' +
      '<a href="https://www.oyuna-erica.com/event">Event</a>' +
      '<a href="https://www.oyuna-erica.com/blog">Blog</a>' +
      '<a href="https://www.oyuna-erica.com/english-lesson23568318">Free Training</a>' +
      '<a href="https://www.oyuna-erica.com/affiliate_page">Affiliate</a>' +
      '<a href="https://www.oyuna-erica.com/login">Login</a>' +
      '<a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>' +
      "</div>";

    document.write(text1);
  }
</script>

<script>
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
</script>



