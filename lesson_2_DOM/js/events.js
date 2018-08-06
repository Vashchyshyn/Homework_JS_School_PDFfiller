class Events {
    // constructor class Events
    constructor(elems) {
        // NodeList elems
        this.elems = elems;
    }

    // add listenerKeyboard
    // init dropdown
    // add listenerMouse
    init() {
        this.addListenerKeyboard();
        this.dropdown();
        this.addListenerMouse();
    }

    addListenerMouse() {
        Array.from(this.elems).map((elem) => {
            elem.addEventListener('click', () => {
                this.addArrowsDropdown(elem); // for select Dropdown folder add Arrows
                this.dropdownShowContent(elem); // show folder
                this.select(elem); // init select folder
            })
        });
    }

    addListenerKeyboard() {
        window.onkeydown = (e) => {
            this.shift = e.keyCode;
        };
        window.onkeyup = (e) => {
            this.shift = null;
        }
    }

    removeSelect() {
        Array.from(this.elems).map((elem) => {
            elem.classList.remove('select');
        });
    }

    dropdown() {
        this.dropdownContent = document.querySelectorAll('.dropdown-content');
        this.dropdownItem = document.querySelector('.dropdown')
    }

    addArrowsDropdown(elem) {
        if (elem.classList.contains('dropdown')) {
            if (document.querySelector('.dropdown-click').classList.contains('boottom')) {
                document.querySelector('.dropdown-click').innerHTML = '&#9660';
                document.querySelector('.dropdown-click').classList.remove('boottom');
            } else {
                document.querySelector('.dropdown-click').innerHTML = '&#9658';
                document.querySelector('.dropdown-click').classList.add('boottom');
            }
        }
    }

    dropdownShowContent(elem) {
        if (elem.classList.contains('dropdown')) {
            Array.from(this.dropdownContent).map((el) => {
                el.classList.toggle('dropdown-content-show')
            })
        }
    }

    select(elem){
        if (this.shift === 16) {
            elem.classList.add('select');
        } else {
            this.removeSelect();
            elem.classList.add('select');
        }
    }

}