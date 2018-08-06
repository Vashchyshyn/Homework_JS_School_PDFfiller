class User {
    constructor(questions, userDate, output){
        this.questions=questions;
        this.userDate = userDate;
        this.output = output;
    }
    init() {
        this.user = Object.create(null);
        this.questions.map((question, index) => {
            this.user[this.userDate[index]] = prompt(question);
        });
        this.userInfo();
    }

    userInfo()
    {
        let userToString = `<b>User First Name</b><span style="color: red"> ${this.user.userFirstName};</span><br>
         User Last Name <span style="color: red"> ${this.user.userLastName};</span><br>
         User Middle Name <span style="color: red"> ${this.user.userMiddleName};</span><br>
         User Birth Day <span style="color: red"> ${this.user.userBirthday};</span><br>`;
        this.output.innerHTML = userToString;
    }
}