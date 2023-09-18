import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


class Navbar extends React.Component {
  render() { 
    return (
      <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h4 class="text-white"><button>First</button></h4>
      <span class="text-muted"><button>Second</button></span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div>
    );
  }
}

export default Navbar;
