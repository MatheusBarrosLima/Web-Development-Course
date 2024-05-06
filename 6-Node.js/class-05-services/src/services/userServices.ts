type UserData = {
  name: string;
  age: number;
};

export const userServices = {
  create(data: UserData) {
    try {
      const { name, age } = data;

      const user = {
        id: "1",
        name: name,
        age: age,
      };

      console.log(user); // database
      
      return {id: user.id}
    } catch (error) {
      return console.error(error);
      
    }
  },
};
