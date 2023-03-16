
const Sidebar =() =>{
    return(
        <>

            <nav class="navbar navbar-expand navbar-light bg-faded">
                <a class="navbar-brand" href="#">Navbar</a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Active <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div class="d-none d-sm-block">
                <div class="d-sm-none">
                    
                </div>
                
            </div>

        </>
    )
}
export default Sidebar
