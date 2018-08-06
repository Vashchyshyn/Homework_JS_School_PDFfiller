class Calculation {
    constructor(data) {
        this.data = data.split('\n');
        this.data.shift();
    }

    init() {
        this.total();
        this.department();
        this.month();
    }

    total() {
        let total = 0;
        this.data.map((item, index) => {
            if (+item.split(',')[3]) {
                total += +item.split(',')[3];
            }
        });
        this.addTotal(total.toFixed(2));
    }

    department() {
        let indexForDepartment = 1;
        let byDepartments = this.countByField(indexForDepartment);
        this.addDepartment(byDepartments);
    }

    month() {
        let indexForMonth = 0;
        let byMonth = this.countByField(indexForMonth);
        this.addMonth(byMonth);
    }

    addTotal(total) {
        document.getElementById('total').innerHTML =
            `<table> 
                <tr>
                    <td><b>Total</b></td>
                </tr>
                <tr>
                    <td>${total}</td>
                </tr>
            </table>`
    }

    addDepartment(data) {
        let department = "";
        department += "<table><tr><td><b>Department</b></td><td><b>Avg.Payment</b></td></tr>";
        for (let value in data) {
            department += `<tr><td>${value}</td><td>${data[value]}</td><tr>`;
        }
        department += "</table>";
        document.getElementById('department').innerHTML = department;

    }

    addMonth(data) {
        let month = "";
        month += "<table><tr><td><b>Department</b></td><td><b>Avg.Payment</b></td></tr>";
        for (let value in data) {
            if (!isNaN(data[value])) {
                month += `<tr><td>${value}</td><td>${data[value]}</td><tr>`;
            }
        }
        month += "</table>";
        document.getElementById('month').innerHTML = month;
    }

    countByField(indexfield) {
        let fields = [];
        let result = [];

        this.data.map((field) => {
            field.trim();
            if (field.split(',')[indexfield]) {
                fields[field.split(',')[indexfield]] = [field.split(',')[indexfield]];
            }
        });

        this.data.map((field, index) => {
            if (field.split(',')[indexfield]) {
                fields[field.split(',')[indexfield]].push(field.split(',')[3]);
            }
        });

        for (let value in fields) {
            fields[value].shift();
            let length = fields[value].length;
            result[value] = fields[value].reduce((sum, current) => {
                return parseInt(sum) + parseInt(current);
            }, 0);
            result[value] = (result[value] / length).toFixed(2);
        }

        return result;
    }

}
