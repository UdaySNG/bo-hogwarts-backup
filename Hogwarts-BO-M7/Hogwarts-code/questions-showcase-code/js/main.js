class Dropdown {
    constructor() {
      this.dropdown = document.getElementById("myDropdown");
      this.dropdownBtn = document.querySelector('.dropbtn');
      this.dropdownContent = document.getElementsByClassName("dropdown-content");
      this.handleClick = this.handleClick.bind(this);
      this.handleWindowClick = this.handleWindowClick.bind(this);
      this.init();
    }
  
    init() {
      this.dropdownBtn.addEventListener('click', this.handleClick);
      window.addEventListener('click', this.handleWindowClick);
    }
  
    handleClick() {
      this.dropdown.classList.toggle("show");
    }
  
    handleWindowClick(event) {
      if (!event.target.matches('.dropbtn')) {
        for (let i = 0; i < this.dropdownContent.length; i++) {
          const openDropdown = this.dropdownContent[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  }
  
  const dropdown = new Dropdown();
  

  