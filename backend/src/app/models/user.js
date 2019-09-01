import Sequilize, { Model  } from "sequelize";

class User extends Model {
  static init(sequelize){
    super.init({
      name: Sequilize.STRING,
      email: Sequilize.STRING,
      password_hash: Sequilize.STRING,
      provider: Sequilize.BOOLEAN
    },
    {
      sequelize,
    }
    )
  }
}

export default User;
