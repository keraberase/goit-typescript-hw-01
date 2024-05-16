
type newUser = {
    name: string;
    surname: string;
    email: string;
    password: string;
};

function createOrUpdateUser(initialValues: Partial<newUser>) {

}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});